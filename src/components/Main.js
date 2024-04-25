import React from 'react';
import img1 from '../img/img1.jpg';

function Main() {
  return (
    <div className="w-full h-96 border border-gray-100 relative">
      <img src={img1} alt="img1" className="w-full h-full object-cover bg-no-repeate bg-bottom" 
      />
      <div className="absolute bg-white top-12 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-40 w-[440px]">
        <h2 className ="text-3xl font-bold mb-2">Hi Guys Welcome</h2>
        <h3 className ="text-xl">Look at this Project!!!</h3>  
        <h3 className ="text-xl font-bold mb-2">The Goal is to learn Without Stress</h3>
      </div>
    </div>
  )
}

export default Main