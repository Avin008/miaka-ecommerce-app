import { useQuery } from "@tanstack/react-query";
import { useAuthStatus } from "../hooks";
import { getSingleDoc } from "../services";

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
