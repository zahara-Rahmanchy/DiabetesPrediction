import React, { useState } from "react";
import {
  Chart as ChartJS,
  TimeScale, //y-axis
  LinearScale, //x -axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
ChartJS.register(
  TimeScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const BpCurve = () => {
  let [inputVal, setInputVal] = useState({
    input1: "",
    input2: "",
  });
  let [inputArr, setInputArr] = useState([]);
  const getInptValue = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });

    console.log("name", e.target.name);
    console.log("input val:", inputVal);
  };
  console.log("inputVal: ", inputVal);
  let { input1, input2 } = inputVal;
  const onSubmit = (e) => {
    e.preventDefault();

    let date = new Date().toDateString();
    setInputArr([...inputArr, { input1, input2, date }]);
  };
  console.log(inputArr);
  // date array on x axis
  let dates = inputArr.map((d) => {
    return d.date;
  });

  // data array on y axis
  let bpDias = inputArr.map((d) => {
    return d.input1;
  });

  let bpCys = inputArr.map((d) => {
    return d.input2;
  });
  console.log("input1: ", bpCys);
  console.log(dates);

  const state = {
    labels: dates,
    datasets: [
      {
        data: bpDias,
        label: "Diastolic",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgb(55, 34, 191)",
        borderColor: "rgb(55, 34, 191)",
        borderWidth: 2,
        PointElement: "red",
      },

      {
        data: bpCys,
        label: "Cysstolic",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgb(255, 0, 0)",
        borderColor: "rgb(255, 0, 0)",
        borderWidth: 2,
        PointElement: "red",
      },
    ],
  };
  return (
    <div className="lg:flex justify-center items-center bg-slate-100 h-full p-4">
      {/* graph div */}
      <div className="lg:mx-auto h-full lg:w-7/12 md:w-full">
        <Line
          className="h-3/4"
          data={state}
          options={{
            title: {
              display: true,
              text: "Insulin per day",
            },

            scales: {
              x: {
                title: {
                  display: true,
                  text: "Date",
                  fontSize: 30,
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Blood Pressure",
                  fontSize: 30,
                },
              },
            },
            legend: {
              display: true,
              //   position: "left",
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
      {/* input field div */}
      <div className="lg:flex flex-col justify-center form-controll lg:w-96 md:w-full md:my-4 md:mx-auto bg-gradient-to-r from-purple-300 to-purple-500 rounded-lg shadow-slate-700 space-y-5 p-3">
        <label className="label label-text font-semibold text-xl text-violet-900 italic mx-auto">
          Blood Pressure Level
        </label>

        {/* onSubmit={getInptValue} */}

        <input
          className="mx-auto placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 w-44 nshadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Diastolic"
          type="text"
          name="input1"
          onChange={getInptValue}
        />

        <input
          className="mx-auto placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 w-44 nshadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Cystolic"
          type="text"
          name="input2"
          onChange={getInptValue}
        />
        <button
          className="mx-auto btn btn-primary btn-xs sm:btn-sm md:btn-sm lg:btn-sm w-44 my-3"
          type="button"
          onClick={onSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default BpCurve;
