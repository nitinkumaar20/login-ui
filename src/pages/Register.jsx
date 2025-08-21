import Input from "../components/Input";
import { Link } from "react-router-dom";
const Register = () => {
  return (
 <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="flex flex-col justify-start bg-[var(--bg-color)] px-[20px] py-[30px] w-[380px] border  ">
    <div className="text-left">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-[31px]">
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
            css="w-full rounded-md border border-gray-400 px-3 pt-4 pb-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            label={"Full Name"}
            htmlfor={"name"}
            labelcss="absolute left-2 -top-2 bg-[#F7F8F9] px-1 text-sm text-[var(--primary-color)]"
          />
        </div>

        <div className="relative">
          <Input
            type="number"
            id="number"
            placeholder="Enter your number"
            value={"30"}
            css="w-full rounded-md border border-gray-400 px-3 pt-4 pb-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            label={"Phone number"}
            htmlfor={"number"}
            labelcss="absolute left-2 -top-2 bg-[#F7F8F9] px-1 text-sm text-[var(--primary-color)]"
          />
        </div>

        <div className="relative">
          <Input
            type="email"
            id="email"
            placeholder="Enter email address"
            value={"Marry Doe"}
            css="w-full rounded-md border border-gray-400 px-3 pt-4 pb-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            label={"Email Address"}
            htmlfor={"email"}
            labelcss="absolute left-2 -top-2 bg-[#F7F8F9] px-1 text-sm text-[var(--primary-color)]"
          />
        </div>

        <div className="relative">
          <Input
            type="password"
            id="password"
            placeholder="Enter password"
            value={"Marry Doe"}
            css="w-full rounded-md border border-gray-400 px-3 pt-4 pb-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            label={"Password"}
            htmlfor={"password"}
            labelcss="absolute left-2 -top-2 bg-[#F7F8F9] px-1 text-sm text-[var(--primary-color)]"
          />
        </div>

        <div className="relative">
          <Input
            type="text"
            id="company"
            placeholder="Enter company name"
            value={"Marry Doe"}
            css="w-full rounded-md border border-gray-400 px-3 pt-4 pb-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            label={"Company Name"}
            htmlfor={"company"}
            labelcss="absolute left-2 -top-2 bg-[#F7F8F9] px-1 text-sm text-[var(--primary-color)]"
          />
        </div>

        {/* Radio Buttons */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Are you an agency?</p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                className="h-5 w-5 accent-[var(--primary-color)]"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="no"
                className="h-5 w-5 accent-[var(--primary-color)]"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Button */}
        <Link to="/account-setting">
          <button
            type="submit"
            className="w-full rounded hover:bg-[var(--btn-color)] px-4 py-2 text-white bg-[var(--primary-color)]"
          >
            Create Account
          </button>
        </Link>
      </form>
    </div>
  </div>
</div>

  );
};

export default Register;
