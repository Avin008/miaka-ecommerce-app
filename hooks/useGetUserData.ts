import { useQuery } from "@tanstack/react-query";
import { getSingleDoc } from "../services";
import { useAuthStatus } from "../hooks";

const useGetUserData = (): {
  userData: any;
  isUserDataLoading: boolean;
  isUserDataError: boolean;
} => {
  const { isAuth, authToken } = useAuthStatus();

  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useQuery(
    ["user"],
    async () => {
      return getSingleDoc("users", authToken!);
    },
    {
      enabled: isAuth,
    }
  );

  return { userData, isUserDataLoading, isUserDataError };
};

export default useGetUserData;
