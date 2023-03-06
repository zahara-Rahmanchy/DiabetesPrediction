import React from "react";
// import D1 from '../img/D1.jpg';
import k1 from "../img/k1.png";
import D2 from "../img/D2.jpg";
import D3 from "../img/D3.jpg";
import D4 from "../img/D4.jpg";
import help from "../img/help.jpg";

import Card1 from "../img/Card1.jpg";

export const Home = () => {
  return (
    <>
      {/* img div section */}
      <section>
        <div className="carousel w-screen">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={k1} alt="" className="w-full h-3/4" />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img src={D2} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={D3} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={D4} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*end img div section */}

      {/* about section */}

      <div className=" w-9/12 mx-32 my-20 bg-base-200 rounded-2xl text-2xl flex justify-between ">
        {/* img div */}
        <div className="mx-5 my-10 bg-gradient-to-r from-purple-300 to-purple-600 w-1/2 rounded-2xl">
          <div className=" rounded-2xl  mx-12 p-10 my-20 hover:shadow-lg">
            <img className="rounded-3xl  " src={Card1} alt="" />
          </div>
        </div>

        <div className="w-1/2 my-12">
          <h2 className=" font-mono text-center text-5xl text-purple-600 my-5">
            Welcome to Our App
          </h2>
          <p className="mx-8 my-20 ">
            <span className="font-bold text-purple-900">Glycemicist:</span>It is
            a web based app that aims to predict the probability of diabetes
            risk in an individual. An authorised user can keep track of glucse
            level,blood pressure,weight,and BMI through their report generated
            from their record.Diabetes is a chronic, metabolic disease
            characterized by elevated levels of blood glucose (or blood sugar),
            which leads over time to serious damage to the heart, blood vessels,
            eyes, kidneys and nerves.
          </p>
        </div>
      </div>

      {/*description card system*/}
      <section className="bg-base-200 mx-10 my-10 rounded  flex justify-between ">
        <div>
          <div className="card w-94 mx-20 my-24  ">
            <div className="card-body  rounded-xl bg-gradient-to-r from-purple-300 to-purple-600">
              <h2 className="card-title ">How to use</h2>
              <p>
                You have to create an account first using signup page.Then you
                can login with your email and password that you have used to
                create your account.After login anyone can use all the features
                of the website easily.
              </p>

              <div className="card-actions justify-end">
                <button className="btn py-2 mt-3 bg-white rounded-xl border text-purple-600">
                  Help!
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* img div */}
        <div className="mx-px my-2 bg-gradient-to-r from-purple-300 to-purple-600 w-1/2 rounded-2xl">
          <div className=" rounded-2xl  mx-2 p-5 my-5 hover:shadow-lg">
            <img className="rounded-2xl  " src={help} alt="" />
          </div>
        </div>
        /
      </section>
    </>
  );
};
