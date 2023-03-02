import React from "react";
import { Link } from "react-router-dom";
// flex justify-between items-center
export const Navigation = () => {
  return (
    <>
      <nav className="grid grid-cols-6 items-center bg-base-200 space-x-64">
        <div>
          <h1 className="text-5xl text-purple-500 font-bold px-4 py-2">LOGO</h1>
        </div>

        <ul className="flex justify-between space-x-40 p-2 col-span-5">
          <div className=" flex justify-evenly">
            <li className="text-lg font-medium p-2 mx-7 ">
              <Link to="/">Home </Link>
            </li>
            <li className="text-lg font-medium p-2 mx-7 ">
              <Link to="/Prediction">Prediction </Link>
            </li>
            <li className="text-lg font-medium p-2 mx-7">
              <Link to="/Maintanence"> Maintenance </Link>
            </li>
          </div>

          {/* login/sign up */}
          <div className="col-span-1 flex justify-self-end">
            <li className="text-lg font-medium p-2  mx-7 ">
              <Link>login </Link>
            </li>

            <li className="text-lg font-medium p-2  mx-7 ">
              <Link>SignUp </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
