import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAuthStore } from "../lib/store";

const useAuthRedirect = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const authStatus = useAuthStore((state: any) => state.authStatus);
  const router = useRouter();

  useEffect(() => {
    if (authStatus) {
      setIsAuth(true);
      setLoading(false);
    } else {
      router.push("/login");
    }
  }, [authStatus]);

  return { loading, isAuth };
};

export default useAuthRedirect;
