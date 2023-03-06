import React, { useState } from "react";

import LineCurve from "./LineCurve";
import BpCurve from "./BpCurve";

// insulin, curve, days,insluin
// bp//daily/weekly curve, days vs bp
// ,cholesterol,urine level: yearly/half-yearly:: bar graph amount vs year
//weight graph:: curve
// // BMI: from height,weight curve
// get value from input field

const Maintanence = () => {
  return (
    <>
      <div className="lg:container  lg:mx-auto my-11 h-screen space-y-20 overflow-scroll no-scrollbar">
        <section className="lg:container rounded-md shadow-lg shadow-violet-400 mx-auto h-2/4 mb-5 md:w-full sm:w-full ">
          {/* insulin curve */}

          <LineCurve type="Line" labelName="Blood Sugar Level" unit="mmol/l" />
        </section>

        <section className=" lg:container rounded-md shadow-lg shadow-violet-400 mx-auto h-2/4 mb-5 md:w-full sm:w-full">
          {/* Blood Pressure */}

          <BpCurve />
        </section>
        <section className="lg:container rounded-md shadow-lg shadow-violet-400 mx-auto h-96">
          {/* weight*/}

          <LineCurve type="Line" labelName="Weight" unit="Kilograms (kg)" />
        </section>

        <section className="lg:container rounded-md shadow-lg shadow-violet-400 mx-auto h-96">
          {/* cholesterol */}

          <LineCurve
            type="Bar"
            labelName="Cholesterol"
            unit="mmol/l"
            className="py-9"
          />
        </section>
      </div>
    </>
  );
};

export default Maintanence;
