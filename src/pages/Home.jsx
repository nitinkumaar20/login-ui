import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-end bg-[var(--bg-color)] px-[20px] py-10">
      <div className="text-left">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-[10px]">
          Welcome to PopX
        </h1>
<p className="mb-[29px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate distinctio</p>
        {/* Buttons */}
   <div className="flex gap-3 flex-col">
  <Link to="/register">
    <button className="flex-1 w-full rounded-lg bg-[var(--primary-color)] px-4 py-3 text-white font-medium hover:bg-blue-700">
      Create Account
    </button>
  </Link>

  <Link to="/login">
    <button className="flex-1 w-full rounded-lg px-4 py-3 text-black font-medium bg-[var(--secondary-color)]">
      Already Registered? Login
    </button>
  </Link>
</div>

      </div>
    </div>
  );
}
