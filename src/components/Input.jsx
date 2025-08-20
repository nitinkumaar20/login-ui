import React from "react";

const Input = ({ type = "text", placeholder,value,  css ,label ,htmlfor,labelcss}) => {
  return (
    <div>
      <label
        htmlFor={htmlfor}
        className={`${labelcss}`}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={`${css}  `}
      />
    </div>
  );
};



export default Input;
