import React from 'react';
import img1 from '../img/img1.jpg';

function Main() {
  return (
    <div className="w-full h-96 border border-gray-100 relative">
      <img src={img1} alt="img1" className="w-full h-full object-cover" />
    </div>
  )
}

export default Main