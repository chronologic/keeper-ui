import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { notification } from "antd";

import { apiService } from "../../services";
import { IUser } from "../../types";
import { EthersContext } from "../Ethers";

type UserPartial = Partial<Pick<IUser, "email" | "operatorAddress">>;

interface IUserContext {
  user: IUser;
  loading: boolean;
  onUpdate: (user: UserPartial) => void;
}

interface IProps {
  children: React.ReactNode;
}

export const UserContext = createContext<IUserContext>({
  user: {} as IUser,
  loading: false,
  onUpdate: () => {},
});

const UserProvider: React.FC<IProps> = ({ children }: IProps) => {
  const { provider } = useContext(EthersContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);

  const loadUser = useCallback(async () => {
    setLoading(true);

    try {
      const address = await provider?.getSigner().getAddress();
      const { data } = await apiService.post<IUser>("/users", {
        address,
      });
      setUser(data);
    } finally {
      setLoading(false);
    }
  }, [provider]);

  const updateUser = useCallback(
    async (userPartial: UserPartial) => {
      setLoading(true);

      try {
        const address = await provider?.getSigner().getAddress();
        const { data } = await apiService.patch<IUser>(
          `/users/${address}`,
          userPartial
        );
        setUser(data);
        notification.success({
          message: "Success",
          description: `${
            userPartial.email ? "Email" : "Operator address"
          } updated successfully`,
        });
      } catch (e) {
        notification.error({
          message: "Error",
          description: "Update failed",
        });
        console.error(e);
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [provider]
  );

  useEffect(() => {
    if (provider) {
      loadUser();
    }
  }, [loadUser, provider]);

  return (
    <UserContext.Provider value={{ loading, user, onUpdate: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
