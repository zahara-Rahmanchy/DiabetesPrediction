import React, { useState } from "react";
import {
  Chart as ChartJS,
  LinearScale, //x -axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
} from "chart.js";
// import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const LineCurve = (props) => {
  let [inputVal, setInputVal] = useState();
  let [inputArr, setInputArr] = useState([]);
  const getInptValue = (e) => {
    setInputVal(e.target.value);

    console.log("name", e.target.name);
    console.log("input val:", inputVal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let name = inputVal;
    let date = new Date().toDateString();
    setInputArr([...inputArr, { inputVal, date }]);
  };
  console.log(inputArr);
  let dates = inputArr.map((d) => {
    return d.date;
  });
  let insulin = inputArr.map((d) => {
    return d.inputVal;
  });
  console.log(dates);

  const state = {
    labels: dates,
    datasets: [
      {
        data: insulin,
        label: props.labelName,
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        PointElement: "red",
      },
    ],
  };
  return (
    <div className="lg:flex justify-center items-center bg-slate-100 h-full p-4">
      {/* graph div */}

      <div className="lg:mx-auto h-full lg:w-7/12 md:w-full">
        {props.type == "Line" && (
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
                    text: props.labelName + " ( " + props.unit + " )",
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
        )}

        {props.type == "Bar" && (
          <Bar
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
                    text: props.labelName + " ( " + props.unit + " )",
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
        )}
      </div>
      {/* input field div */}
      <div className="lg:flex flex-col justify-center form-controll lg:w-96 md:w-full md:my-4 md:mx-auto bg-gradient-to-r from-purple-300 to-purple-500 rounded-lg shadow-slate-700 space-y-5 p-3">
        <label className="label label-text font-semibold text-xl text-violet-900 italic mx-auto">
          {props.labelName}
        </label>

        {/* onSubmit={getInptValue} */}

        <input
          className="mx-auto placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 w-44 nshadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder={props.unit}
          type="text"
          name="insulin"
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

export default LineCurve;
