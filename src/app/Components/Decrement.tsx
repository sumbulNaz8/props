// "use client"
// import React, { useState } from 'react';

// const DecrementButton = () => {
//     const [count, setCount] = useState(0);

//     const decrement = () => {
//         setCount(count - 1);
//     };

//     return (
//         <div className="flex flex-col items-center">
//             <h1 className="text-2xl mb-4">Count: {count}</h1>
//             <button 
//                 onClick={decrement} 
//                 className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
//             >
//                 Decrement
//             </button>
//         </div>
//     );
// };

// export default DecrementButton;
// pages/index.js
"use client"
import { useState } from "react";

const  DecrementButton =()=> {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Counter</h1>
        <p className="text-xl mb-6">Value: {count}</p>
        <div className="space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default DecrementButton