import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineLogin } from "react-icons/md";
import { useAuthStore } from "../lib/store/useAuthStore";
import { ClipLoader } from "react-spinners";
import Link from "next/link";
import { signoutFunc } from "../services/firebaseFunc";
import { useRouter } from "next/router";
import useAuthStatus from "../hooks/useAuthStatus";

const User = (): React.ReactElement => {
  const removeAuth = useAuthStore((state: any) => state.removeAuth);

  const router = useRouter();

  const { isAuth, loading } = useAuthStatus();

  const signOutUser = async () => {
    try {
      await signoutFunc();
      removeAuth();
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  if (loading) {
    return <ClipLoader size={25} />;
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
