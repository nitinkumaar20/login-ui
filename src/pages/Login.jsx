import Input from "../components/Input";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex justify-center   bg-[var(--bg-color)] h-[100vh] w-[380px] border">
        <div>
          <div className="flex  flex-col mb-6 mx-[20px] mt-[40px]">
            <h2 className="text-[40px] font-bold mb-[14px] leading-12">
              Signin to Your PopX account
            </h2>
            <p className="mb-[33px] text-[#1D2226] opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              ipsum inventore architecto quae corrupti. Fuga tempore.
            </p>
          </div>
          <form className="space-y-6 mx-[20px]">
            {/* Email Input */}
            <div className="relative">
              <Input
                type="email"
                id="email"
                placeholder="Enter email address"
                // value={''}
                css="w-full rounded-md border border-gray-400 px-3 pt-4 pb-2 text-gray-900focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                label={"Email Address"}
                htmlfor={"email"}
                labelcss={
                  "absolute left-2 -top-2 bg-[#F7F8F9] px-1 text-sm text-[var(--primary-color)]  "
                }
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                // value={""}
                css="w-full rounded-md border border-gray-400 px-3 pt-4 pb-2 text-gray-900  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                label={"Password"}
                htmlfor={"password"}
                // labelcss={
                //   "absolute left-2 -top-2 bg-gray-100 px-1 text-sm text-[var(--primary-color)] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
                // }
                labelcss={
                  "absolute left-2 -top-2 bg-[#F7F8F9] px-1 text-sm text-[var(--primary-color)]  "
                }
              />
            </div>
            <Link to="/account-setting">
              <button
                type="submit"
                className="w-full rounded bg-[var(--btn-color)] px-4 py-2 text-white hover:bg-[var(--primary-color)]"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
