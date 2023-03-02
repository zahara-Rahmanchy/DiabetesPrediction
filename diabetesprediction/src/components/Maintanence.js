import React from "react";
import {
  Chart as ChartJS,
  CategoryScale, //y-axis
  LinearScale, //x -axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// insulin, curve, days,insluin
// bp//daily/weekly curve, days vs bp
// ,cholesterol,urine level: yearly/half-yearly:: bar graph amount vs year
//weight graph:: curve
// // BMI: from height,weight curve

const Maintanence = () => {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        PointElement: "red",
        data: [1, 2, 3, 4, 5, 6, 7, 8],
      },
    ],
  };
  return (
    <>
      <main className="md:container grid grid-cols-[max-content_1fr] gap-0 bg-slate-50 shadow-lg shadow-slate-400 rounded-md mx-auto my-11 h-screen">
        {/*left section */}
        <section className=" bg-red-900 w-36">
          <h1>hellpo</h1>
        </section>
        {/* right section */}
        <section className="bg-yellow-500 container grid gap-3">
          {/* insulin curve */}

          <div className="flex justify-evenly items-center bg-slate-50 row-span-3">
            {/* graph div */}
            <div className="w-60">
              <Line
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Insulin per day",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                  responsive: true,
                }}
              />
            </div>

            {/* input field div */}
            <div>
              <input
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Blood Sugar Level(mmol/L)"
                type="text"
                name=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center bg-slate-50 row-span-3">
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
                responsive: true,
              }}
            />
          </div>
          <div className="flex justify-between items-center bg-slate-50 row-span-3"></div>

          <div className="flex justify-between items-center bg-slate-50 row-span-3"></div>
          <div className="flex justify-between items-center bg-slate-50 row-span-1">
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
                responsive: true,
              }}
            />
          </div>
          <div className="flex justify-between items-center bg-slate-50 row-span-1"></div>
        </section>
      </main>
    </>
  );
};

export default Maintanence;
