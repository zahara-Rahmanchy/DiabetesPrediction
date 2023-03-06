import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import imgp from "../img/login.png";
import loginValidation from "./loginValidation";
import { userContext } from "../App";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const redirect = useNavigate();
  const { state, dispatch } = useContext(userContext);

  ///error handler
  useEffect(() => {
    const errorHandler = async () => {
      setErrors(loginValidation(email, password));
    };
    errorHandler();
  }, [email, password]);

  const submitForm = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      if (email === "email@gmail.com" && password === "abC123@") {
        alert("Sign In successful!");
        dispatch({ type: "USER", payload: true });
        redirect("/");
      } else {
        alert("Invalid credentials...");
      }
    } else {
      alert("Please enter valid email/password.");
    }
  };
  return (
    <>
      <section className="bg-gray-50 mt-0 p-10   h-screen  flex items-center justify-center  drop-shadow-2xl ">
        <div className=" bg-gray-100 flex w-9/12 mt-0 rounded-2xl shadow-lg max-w-screen p-5 justify-between ">
          <div className="w-1/2 px-16  ">
            <h2 className="font-bold text-2xl p-5 text-red-700 text-center">
              <span className="italic ">Login Here</span>
            </h2>

            <form
              className="flex flex-col gap-4"
              action=""
              onSubmit={submitForm}
            >
              {/* <div> */}

              <label className="font-bold text-zinc-600" class="form-label">
                Email:{" "}
              </label>
              <input
                className="mx-px p-3 mt-1 rounded-xl border "
                type="email"
                id="email"
                placeholder=" Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {errors.email}
                </span>
              )}

              <label className="font-bold text-zinc-600" class="form-label">
                Password:{" "}
              </label>
              <input
                className="mx-px p-3 mt-1  rounded-xl border "
                type="password"
                id="password"
                placeholder=" Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {errors.password}
                </span>
              )}

              {/* button */}
              <button
                className="py-2 mt-3  rounded-xl border bg-gradient-to-r from-purple-300 to-purple-600  text-white   focus:outline-none focus:ring-violet-300 "
                type="submit"
                onClick={submitForm}
              >
                Login
              </button>
            </form>
            <p className="font-bold text-xl p-2">
              Haven't Any Account ? <br />
              Please{" "}
              <Link to="/SignUp">
                <span className="text-purple-500 italic">Sign Up</span>
              </Link>{" "}
              Here.
            </p>
          </div>
          {/* img div */}
          <div className="sm:block hidden bg-gradient-to-r from-purple-300 to-purple-600 w-1/2 rounded-2xl">
            <div className=" rounded-2xl  mx-12 p-10 my-20 hover:shadow-lg">
              <img className="rounded-3xl  " src={imgp} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
