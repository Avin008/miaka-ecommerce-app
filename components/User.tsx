import Link from "next/link";
import { useRouter } from "next/router";
import { LoadingSpinner } from "../components";
import { useAuthStatus } from "../hooks";
import { HiOutlineUser, MdOutlineLogin } from "../icons";
import { useAuthStore } from "../lib/store";
import { signoutFunc } from "../services";

const User = (): React.ReactElement => {
  const removeAuth = useAuthStore((state: any) => state.removeAuth);

  const router = useRouter();

  const { isAuth, loading } = useAuthStatus();

  const signOutUser = async () => {
    try {
      await signoutFunc();
      removeAuth();
      // router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (isAuth) {
    return <MdOutlineLogin size={25} onClick={signOutUser} />;
  } else {
    return (
      <Link href="/login">
        <a>
          <HiOutlineUser size={25} />
        </a>
      </Link>
    );
  }
};

export default User;
