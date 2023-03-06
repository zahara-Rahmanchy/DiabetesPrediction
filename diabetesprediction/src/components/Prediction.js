import React from "react";

const Prediction = () => {
  return (
    <>
      <main className="container bg-slate-50 shadow-lg shadow-slate-400 rounded-md mx-auto my-11 h-screen overflow-auto w-9/12 no-scrollbar">
        {/* Question 1 */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-3xl h-24 ">
            Gender
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Male" className="inline font-medium text-2xl">
                Male
              </label>
              <input type="checkbox" className="w-6 h-6" id="Male" />
            </div>

            <div className="space-x-7">
              <label for="Female" className="inline font-medium text-2xl">
                Female
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Female" />
            </div>

            <div className="space-x-7">
              <label for="Others" className="inline font-medium text-2xl">
                Others
              </label>
              <input
                type="checkbox"
                className=" indeterminate:bg-gray-300 w-6 h-6"
                id="Others"
              />
            </div>
          </div>
        </div>

        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-2xl h-24">
            What is your age?
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Enter your age
              </label>
              <input type="number" className="" id="Bpyes" />
            </div>
          </div>
        </div>
        {/* Question 2 */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-2xl h-24">
            Do you have high Blood Pressure?
          </div>

          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-3xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>

        {/* {Question 3} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-2xl h-24">
            Do you have Polydispia(excessive thirst)?
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-3xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>
        {/* {Question 3} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-2xl h-24">
            Do you have Polyphagia(excessive hunger)?
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-3xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>
        {/* {Question 4} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-2xl h-24">
            Do you have Polyuria(urinate more than 3 liters per day)?
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-3xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>
        {/* {Question 5} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-2xl h-24">
            Do you experience muscle stiffness?
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-3xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>
        {/* {Question 6} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-2xl h-24">
            Click me to show/hide content
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-3xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>
        {/* {Question 7} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Do you experience delay in healing?
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-2xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-2xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>
        {/* {Question 8} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Do you feel irritated?
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-3xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>
        {/* {Question 9} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Do you often feel itchy?
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-3xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>
        {/* {Question 10} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Are you experiencing sudden loss of weight?
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-3xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>
        {/* {Question 11} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Do you have genital thrush?
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-28">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Bpyes" className="inline font-medium text-3xl">
                Yes
              </label>
              <input type="checkbox" className="w-6 h-6" id="Bpyes" />
            </div>

            <div className="space-x-7">
              <label for="Bpno" className="inline font-medium text-3xl">
                No
              </label>
              <input type="checkbox" className=" w-6 h-6" id="Bpno" />
            </div>
          </div>
        </div>
        {/* {Question 12} */}
      </main>
    </>
  );
};

export default Prediction;
