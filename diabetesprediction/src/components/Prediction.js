import React from "react";

export const Prediction = () => {
  return (
    <>
      <main className="container bg-slate-50 shadow-lg shadow-slate-400 rounded-md mx-auto my-11 h-screen overflow-auto w-9/12 no-scrollbar">
        {/* Question 1 */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Gender
          </div>
          <div className="flex justify-evenly items-center collapse-content bg-primary peer-checked:bg-violet-500 text-gray-200 font-medium text-lg rounded h-16">
            {/* <div className="mx-auto"> */}
            <div className="space-x-7 flex items-center">
              <label for="Male" className="inline">
                Male
              </label>
              <input type="checkbox" className="w-4 h-4" id="Male" />
            </div>

            <div className="space-x-7">
              <label for="Female" className="inline">
                Female
              </label>
              <input type="checkbox" className=" w-4 h-4" id="Female" />
            </div>

            <div className="space-x-7">
              <label for="Others" className="inline">
                Others
              </label>
              <input
                type="checkbox"
                className=" indeterminate:bg-gray-300 w-4 h-4"
                id="Others"
              />
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Do you have high Blood Pressure?
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            What is your current Blood Pressure?
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 3} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Do you have Polydispia(excessive thirst)?
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 3} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Do you have Polyphagia(excessive hunger)?
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 4} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Do you have Polyuria(urinate more than 3 liters per day)?
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 5} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Do you experience muscle stiffness?
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 6} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Click me to show/hide content
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 7} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Click me to show/hide content
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 8} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Click me to show/hide content
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 9} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Click me to show/hide content
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 10} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Click me to show/hide content
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 11} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Click me to show/hide content
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
        {/* {Question 12} */}
        <div className="collapse collapse-arrow  bg-purple-200 rounded shadow-md shadow-violet-300 mx-1 my-2 row-span-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-zinc-700 font-semibold text-xl">
            Click me to show/hide content
          </div>
          <div className="flex justifiy-between items-center collapse-content bg-primary peer-checked:bg-violet-500 text-zinc-700 text-lg rounded h-16">
            <p>hello</p>
          </div>
        </div>
      </main>
    </>
  );
};
