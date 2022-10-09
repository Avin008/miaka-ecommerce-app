import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAuthStore } from "../lib/store/useAuthStore";

const useRequiredAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const authStatus = useAuthStore((state: any) => state.authStatus);
  const router = useRouter();

  useEffect(() => {
    if (authStatus) {
      setLoading(false);
      setIsAuth(true);
    } else {
      setIsAuth(false);
      router.push("/login");
    }
  }, [authStatus]);

  return { loading, isAuth };
};

export default useRequiredAuth;
