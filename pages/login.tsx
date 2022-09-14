import Head from "next/head";
import Link from "next/link";

const Login = (): React.ReactElement => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Head>
        <title>Login</title>
      </Head>
      <form>
        <div className="m-auto h-fit w-96 space-y-2 rounded-md border border-gray-300 bg-slate-50 p-6 shadow-md">
          <h1 className="text-2xl font-semibold text-gray-600">Login</h1>
          <div className="space-y-1">
            <span className="flex flex-col space-y-1">
              <label htmlFor="email">Email</label>
              <input
                className="border border-gray-400 p-2"
                type="email"
                placeholder="johndoe@gmail.com"
                name="email"
                id=""
              />
            </span>
            <span className="flex flex-col space-y-1">
              <label htmlFor="password">Password</label>
              <input
                className="border border-gray-400 p-2"
                type="password"
                placeholder="**********"
                name="password"
                id=""
              />
            </span>
          </div>
          <div className="pt-3">
            <span className="flex flex-col space-y-2">
              <button className="border border-gray-500 p-2 font-semibold">
                Login
              </button>
              <button className="bg-yellow-800 p-2 font-semibold text-white">
                Login As Guest
              </button>
            </span>
            <span className="flex justify-center pt-2 font-medium">
              <Link href="/signup">Create New Account</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
