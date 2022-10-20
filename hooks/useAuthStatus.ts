import { useState, useEffect } from "react";
import { useAuthStore } from "../lib/store";
const useAuthStatus = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [authToken, setAuthToken] = useState<null | string>(null);
  const authStatus = useAuthStore((state: any) => state.authStatus);
  const token = useAuthStore((state: any) => state.authToken);

  useEffect(() => {
    if (authStatus) {
      setLoading(false);
      setIsAuth(true);
      setAuthToken(token);
    } else {
      setLoading(false);
      setIsAuth(false);
      setAuthToken(null);
    }
  }, [authStatus]);

  return { isAuth, loading, authToken };
};

export default useAuthStatus;
