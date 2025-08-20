import React from "react";

const AccountSetting = () => {
  return (
    <div className="bg-[var(--bg-color)] h-[100vh] ">
   <div className="bg-white px-[20px] py-5 text-2xl "> Account Settings</div>
    <div className="max-w-2xl  rounded-lg pt-[30px] ">
      {/* Top Section */}
      <div className="flex items-center gap-6  px-[20px]">
        {/* Profile Picture */}
        <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
          {/* Replace with <img src="" /> */}
          <span className="text-gray-600 text-xl">👤</span>
        </div>

        {/* User Info */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-500">johndoe@example.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-gray-600 border-b border-dotted pb-[20px]">
        <p className=" px-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl nec tincidunt lacinia, nunc est laoreet nulla, non tristique
          sapien nunc nec sapien.
        </p>
      </div>
      
    </div>
    </div>
  );
};

export default AccountSetting;
