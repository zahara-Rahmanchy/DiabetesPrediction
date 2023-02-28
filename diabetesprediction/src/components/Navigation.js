import React from 'react';
import { Link } from 'react-router-dom'
// flex justify-between items-center
export const Navigation = () => {
  return (
    <>
    <nav className='grid grid-cols-4 items-center  bg-red-200 space-x-64'>

        <div className="py-3 w-11 bg-slate-300">
            <h1 className="text-5xl text-rose-500 font-bold px-4 py-2">LOGO</h1>
        </div>
     
      <ul className="flex justify-between space-x-40 p-2 col-span-3">
        <div className=' flex justify-evenly bg-white'>
        <li className="text-lg font-medium p-2 my-5 mx-7 " > <Link to="/">Home </Link></li>
         <li className="text-lg font-medium p-2 my-5 mx-7 "> <Link to="/Prediction">Prediction </Link></li>
        <li className="text-lg font-medium p-2 my-5 mx-7"> <Link to="/Maintanence"> Maintenance </Link></li>
        </div>

        {/* login/sign up */}
        <div className='col-span-1 bg-orange-200 flex justify-self-end'>
        <li className='text-lg font-medium p-2 my-5 mx-7 '> <Link>login </Link></li>

        <li className='text-lg font-medium p-2 my-5 mx-7 '> <Link>SignUp </Link></li>
        </div>
       </ul> 

        
       </nav>
    
    </>
  )
}
