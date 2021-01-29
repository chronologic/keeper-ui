import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Modal } from "antd";
import { EthersContext } from "../Ethers";
import { apiService } from "../../services";

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
      console.error(e);
      removeAuthHeader();
      setAuthModalOpen(true);
    }
  }, [provider]);

  const handleSign = useCallback(async () => {
    const signer = provider!.getSigner();
    const signature = await signer.signMessage("keeper");
    const account = await signer.getAddress();

    setAuthHeader(account, signature);
    setAuthenticated(true);
    setAuthModalOpen(false);
  }, [provider]);

  const handleCloseModal = useCallback(() => setAuthModalOpen(false), []);

  useEffect(() => {
    if (provider) {
      initAuth();
    }
  }, [initAuth, provider]);

  useEffect(() => {
    const interceptorId = apiService.interceptors.response.use((res) => {
      if (res.status === 401) {
        removeAuthHeader();
        setAuthenticated(true);
        setAuthModalOpen(true);
      }
      return res;
    });

    return () => apiService.interceptors.response.eject(interceptorId);
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated }}>
      <Modal
        title="Authentication"
        visible={authModalOpen}
        onOk={handleSign}
        onCancel={handleCloseModal}
      >
        Please sign the following message to prove ownership of your wallet:
        keeper
      </Modal>
      {children}
    </AuthContext.Provider>
  );
};

const authStorageKey = "auth";
export function getAuthHeader(): string {
  return localStorage.getItem(authStorageKey) || "";
}

export function setAuthHeader(address: string, signature: string): void {
  const header = btoa(`${address.toLowerCase()}:${signature.toLowerCase()}`);
  localStorage.setItem(authStorageKey, header);
}

export function removeAuthHeader(): void {
  localStorage.removeItem(authStorageKey);
}

export default AuthProvider;
