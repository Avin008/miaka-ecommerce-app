import { useState, useEffect } from "react";
import { useAuthStore } from "../lib/store/useAuthStore";
const useAuthStatus = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const authStatus = useAuthStore((state: any) => state.authStatus);

  useEffect(() => {
    if (authStatus) {
      setLoading(false);
      setIsAuth(true);
    } else {
      setLoading(false);
      setIsAuth(false);
    }
  }, [authStatus]);

  return { isAuth, loading };
};

export default useAuthStatus;
