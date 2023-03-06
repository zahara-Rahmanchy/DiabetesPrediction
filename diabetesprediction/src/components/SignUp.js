import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import regi from "../img/regi2.png";
import signupValidation from "./signupValidation";

const SignUp = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [Height, setHeight] = useState("");
  const [errors, setErrors] = useState({});

  ///error handler
  useEffect(() => {
    const errorHandler = async () => {
      setErrors(
        signupValidation(Name, email, password, ConPassword, phone, Height)
      );
    };
    errorHandler();
  }, [Name, email, password, phone, Height, ConPassword]);

  // store email and password
  const submitForm = (e) => {
    e.preventDefault(e);
    if (Object.keys(errors).length === 0) {
      alert("Account created successfully!");
    } else {
      alert("Please enter valid informations.");
    }
  };
  return (
    <>
      <p className="font-bold text-2xl p-5  text-center">
        {" "}
        Please <span className="italic text-purple-600 ">
          Sign Up
        </span> First{" "}
      </p>
      <section className="bg-white min-h-screen flex items-center justify-center">
        <div className=" bg-gray-100 flex w-3/4 mt-0 rounded-2xl shadow-lg max-w-screen p-5 justify-between ">
          <div className="w-1/2 px-16  ">
            <form
              className="flex flex-col gap-4 "
              action=""
              onSubmit={submitForm}
            >
              {/* Name */}
              <label className="font-bold text-zinc-600" class="form-label">
                Name:{" "}
              </label>

              <input
                className=" p-5 mt-1 rounded-xl border h-3/4 "
                type="text"
                id="name"
                placeholder="Your Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {errors.name}
                </span>
              )}

              {/* email */}
              <label className="font-bold text-zinc-600 " class="form-label">
                Email:{" "}
              </label>
              <input
                className=" p-5 mt-1 rounded-xl border h-3/4 "
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
              {/* Password */}
              <label className="font-bold text-zinc-600" class="form-label">
                Password:{" "}
              </label>

              <input
                className="mx-px p-3 mt-1  rounded-xl border h-3/4"
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
              {/*Confirm Password */}
              <label className="font-bold text-zinc-600 " class="form-label">
                Confirm Password:{" "}
              </label>
              <input
                className="mx-px p-3 mt-1  rounded-xl border h-3/4"
                type="password"
                id="Conpassword"
                placeholder="Confirm Password"
                value={ConPassword}
                onChange={(e) => setConPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {errors.confirmPassword}
                </span>
              )}
              {/* phone number */}

              <label className="font-bold text-zinc-600 " class="form-label">
                Phone Number:{" "}
              </label>
              <input
                className="mx-px p-3 mt-1  rounded-xl border h-3/4 "
                type="text"
                class="form-control"
                id="Phone"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.mobile && (
                <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {errors.mobile}
                </span>
              )}

              <label className="font-bold text-zinc-600 " class="form-label">
                Height
              </label>
              <input
                className="mx-px p-3 mt-1  rounded-xl border h-3/4s"
                type="text"
                id="Height"
                placeholder="Height"
                value={Height}
                onChange={(e) => setHeight(e.target.value)}
              />
              {errors.height && (
                <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {errors.height}
                </span>
              )}

              <button
                className="py-2 mt-3  rounded-xl border bg-gradient-to-r from-purple-300 to-purple-600 text-white    active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
                type="submit"
              >
                SignUp
              </button>
            </form>
            <p className="font-bold text-xl p-2">
              {" "}
              Allready Have An Account ? <br />
              Let's
              <Link to="/Login">
                <span className="text-purple-600 italic"> Register!!</span>
              </Link>
            </p>
          </div>
          {/* img div */}
          <div className=" bg-gradient-to-r from-purple-300 to-purple-600 w-3/4  rounded-2xl ">
            <div className=" rounded-2xl mx-5 my-24 ">
              <img
                className="rounded-3xlr container w-1/2 mx-auto"
                src={regi}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
