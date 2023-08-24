import React from "react";
import { useState } from "react";

interface IRegisterProps {}

const Register = (props: IRegisterProps) => {
  /*****************************  useStates  *****************************/
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  /*****************************  handlers  *****************************/
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-20">
        <input
          type="text"
          className="block mb-4 p-2 w-full rounded-sm"
          placeholder="User Name"
          value={userName}
          onChange={handleUserNameChange}
        />
        <input
          type="password"
          className="block mb-4 p-2 w-full rounded-sm"
          name=""
          id=""
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="bg-blue-500 w-full p-2 text-white rounded-sm">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
