import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Modal, notification } from "antd";
import styled from "styled-components";
import { AxiosError } from "axios";

import { EthersContext } from "../Ethers";
import { apiService } from "../../services";
import { purple } from "../../components/colors";
import { getAuthHeader, removeAuthHeader, setAuthHeader } from "../../utils";

interface IAuthContext {
  authenticated: boolean;
}

interface IProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({
  authenticated: false,
});

const AuthProvider: React.FC<IProps> = ({ children }: IProps) => {
  const { provider } = useContext(EthersContext);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);

  const initAuth = useCallback(async () => {
    const header = getAuthHeader();
    const account = await provider?.getSigner().getAddress();
    try {
      const [address] = atob(header).split(":");
      if (address === account?.toLowerCase()) {
        setAuthenticated(true);
      } else {
        removeAuthHeader();
        setAuthModalOpen(true);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      removeAuthHeader();
      setAuthModalOpen(true);
    }
  }, [provider]);

  const handleSign = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const signer = provider!.getSigner();
    try {
      const signature = await signer.signMessage("keeper");
      const account = await signer.getAddress();

      setAuthHeader(account, signature);
      setAuthenticated(true);
      setAuthModalOpen(false);
      notification.success({ message: "Signature successful" });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      notification.error({ message: "Signature failed" });
    }
  }, [provider]);

  const handleCloseModal = useCallback(() => setAuthModalOpen(false), []);

  useEffect(() => {
    if (provider) {
      initAuth();
    }
  }, [initAuth, provider]);

  useEffect(() => {
    const interceptorId = apiService.interceptors.response.use(
      undefined,
      (res: AxiosError) => {
        if (res?.response?.status === 401) {
          // eslint-disable-next-line no-console
          console.warn("User unauthorized");
          removeAuthHeader();
          setAuthenticated(true);
          setAuthModalOpen(true);
        }
        return res;
      }
    );

    return () => apiService.interceptors.response.eject(interceptorId);
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated }}>
      <Modal
        title="Authentication"
        visible={authModalOpen}
        onOk={handleSign}
        onCancel={handleCloseModal}
        maskClosable={false}
      >
        Please sign the following message to prove ownership of your wallet:
        <br />
        <br />
        <MessageToSign>&quot;keeper&quot;</MessageToSign>
      </Modal>
      {children}
    </AuthContext.Provider>
  );
};

const MessageToSign = styled.div`
  font-size: 24px;
  color: ${purple};
`;

export default AuthProvider;
