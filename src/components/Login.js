import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Logo"
        />
      </div>
      <form className="w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (<input
          className="p-4 my-4 w-full bg-zinc-600 rounded-md"
          type="text"
          placeholder="Full Name"
        />)}
        <input
          className="p-4 my-4 w-full bg-zinc-600 rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full bg-zinc-600 rounded-md"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md" type="submit">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignForm
            ? "New To Neflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
