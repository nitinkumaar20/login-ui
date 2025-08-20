import Input from "../components/Input";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex justify-center   bg-[var(--bg-color)] h-[100vh] px-[20px] pt-[40px]">
      <div className="text-left  ">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-[31px] ">
          Create your PopX account
        </h1>
        <form className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={"Marry Doe"}
              css="w-full rounded-md border border-gray-400 px-3 pt-4 pb-2 text-gray-900focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              label={"Full Name"}
              htmlfor={"name"}
              labelcss={
                "absolute left-2 -top-2 bg-[#F7F8F9] px-1 text-sm text-[var(--primary-color)]  "
              }
            />
          </div>
                   <div className="relative">
            <Input
              type="number"
              id="number"
              placeholder="Enter your number"
              value={"30"}
              css="w-full rounded-md border border-gray-400 px-3 pt-4 pb-2 text-gray-900focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              label={"Phone number"}
              htmlfor={"number"}
              labelcss={
                "absolute left-2 -top-2 bg-[#F7F8F9] px-1 text-sm text-[var(--primary-color)]  "
              }
            />
          </div>
          <div className="relative">
            <Input
              type="email"
              id="email"
              placeholder="Enter email address"
              value={"Marry Doe"}
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
             value={"Marry Doe"}
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

             <div className="relative">
            <Input
              type="text"
              id="company"
              placeholder="Enter company name"
              value={"Marry Doe"}
              css="w-full rounded-md border border-gray-400 px-3 pt-4 pb-2 text-gray-900  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              label={"Company Name"}
              htmlfor={"company"}
         
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
  );
};

export default Register;
