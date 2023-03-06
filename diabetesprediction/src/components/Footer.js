import React from "react";
import logo from "../img/logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="footer  bg-base-200 text-base-content md:flex md:justify-between md:items-center sm:px-12 px-4 py-2 ">
        <div className=" my-2 mx-2 ">
          <div>
            <img className="rounded-2xl w-1/6   " src={logo} alt="" />
          </div>

          {/*Glycemicist.<br/>  */}
          <p className="text-purple-900">A web application.</p>
        </div>
        <div>
          <span className="footer-title">Services</span>

          <a className="link link-hover">Home</a>
          <a className="link link-hover">Prediction</a>
          <a className="link link-hover">Personal Report</a>
        </div>

        <div>
          {/* <h6>Contact Now</h6>             */}
          <span className="footer-title">Contact Now</span>
          <p>Email:email@gmail.com</p>
          <p>Mobile:+999334455</p>
        </div>
      </footer>
    </>
  );
};
