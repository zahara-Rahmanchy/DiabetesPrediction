import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
// flex justify-between items-center
import { userContext } from "../App";
export const Navigation = () => {
  const { state, dispatch } = useContext(userContext);
  return (
    <>
      <nav className="grid grid-cols-4 items-center bg-base-200 space-x-40 text-zinc-600">
        <div className="py-3 w-20">
          <img className=" mx-2  rounded-2xl w-screen " src={logo} alt="" />
        </div>

        {state && (
          <ul className="flex justify-between space-x-40 p-2 col-span-3">
            <div className=" flex justify-evenly  ">
              <li className="text-2xl font-medium p-2 mx-7 hover:text-purple-600 ">
                <Link to="/">Home </Link>
              </li>
              <li className="text-2xl font-medium p-2 mx-7 hover:text-purple-600">
                <Link to="/Prediction">Prediction </Link>
              </li>
              {state && (
                <li className="text-2xl font-medium p-2 mx-7 hover:text-purple-600">
                  <Link to="/Maintanence"> Maintenance </Link>
                </li>
              )}
            </div>

            {/* logout */}
            <div className="col-span-1  flex justify">
              <li className="text-2xl font-medium p-2  mx-7 hover:text-purple-600">
                Logout
              </li>
            </div>
          </ul>
        )}

        {/* unauthe navbar */}
        {!state && (
          <>
            <ul className="flex justify-around p-2 col-span-2">
              <div className=" flex justify-evenly items-center space-x-40">
                <li className="text-2xl font-medium p-2 mx-7 hover:text-purple-600 ">
                  <Link to="/">Home </Link>
                </li>
                <li className="text-2xl font-medium p-2 mx-7 hover:text-purple-600">
                  <Link to="/Prediction">Prediction </Link>
                </li>
              </div>
            </ul>

            {/* login/sign up */}
            <div className="col-span-1 flex justify-center">
              {!state && (
                <li className="text-2xl font-medium p-2  mx-7 hover:text-purple-600 list-none">
                  <Link to="/Login">Login </Link>
                </li>
              )}

              {!state && (
                <li className="text-2xl font-medium p-2 mx-7 hover:text-purple-600 list-none">
                  <Link to="/SignUp">SignUp </Link>
                </li>
              )}
            </div>
          </>
        )}
      </nav>
    </>
  );
};
