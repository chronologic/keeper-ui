import React, { createContext, useCallback, useEffect, useState } from "react";
import { useWallet } from "use-wallet";
import { notification } from "antd";

import { apiService } from "../../services";
import { IUser } from "../../types";

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
  const wallet = useWallet();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);

  const loadUser = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await apiService.post<IUser>("/users", {
        address: wallet.account!,
      });
      setUser(data);
    } finally {
      setLoading(false);
    }
  }, [wallet.account]);

  const updateUser = useCallback(
    async (userPartial: UserPartial) => {
      setLoading(true);

      try {
        const { data } = await apiService.patch<IUser>(
          `/users/${wallet.account}`,
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
    [wallet.account]
  );

  useEffect(() => {
    if (wallet.status === "connected") {
      loadUser();
    }
  }, [loadUser, wallet.status]);

  return (
    <UserContext.Provider value={{ loading, user, onUpdate: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
