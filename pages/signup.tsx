import Head from "next/head";
import Link from "next/link";
const Signup = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Head>
        <title>Sign Up</title>
      </Head>
      <form>
        <div className="m-auto h-fit w-96 space-y-2 rounded-md border border-gray-300 bg-slate-50 p-6 shadow-md md:mt-16">
          <h1 className="text-2xl font-semibold text-gray-600">Sign Up</h1>
          <div className="space-y-1">
            <span className="flex flex-col space-y-1">
              <label htmlFor="email">First Name</label>
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder="John"
                name="firstname"
                id=""
              />
            </span>
            <span className="flex flex-col space-y-1">
              <label htmlFor="email">Last Name</label>
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder="Doe"
                name="lastname"
                id=""
              />
            </span>
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
                type="email"
                placeholder="**********"
                name="password"
                id=""
              />
            </span>
          </div>
          <div className="pt-3">
            <span className="flex flex-col space-y-2">
              <button className="rounded-sm bg-yellow-800 p-2 font-semibold text-white">
                Sign Up
              </button>
            </span>
            <span className="flex justify-center pt-2 font-medium">
              <Link href="/login">Already Have an Account</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
