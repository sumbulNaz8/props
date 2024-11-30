"use client"
import {useState} from 'react'


const State = () => {
  // Increment
    const [count , setCount ] = useState(0)

    
  
  return (
    <div className='flex  flex-col justify-between  h-200 space-x-3 mt-12'>
      <h1 className='text-4xl flex justify-center mt-12'>Counter</h1>
      <p className='text-7xl  flex justify-center mt-12'>Value :{count}</p>
      <div className='space-x-4 flex justify-center mt-12'>
      <button
       onClick={() => setCount(count + 1)}
       className='py-2 px-4 bg-red-700 text-white rounded-md ' >Increment</button>
     
    
      <button
       onClick={() => setCount(count - 1)}
      className='py-2 px-4 bg-red-700 text-white rounded-md'>Decrement</button>

<button
       onClick={() => setCount( 0 )}
       className='py-2 px-4 bg-red-700 text-white rounded-md' >Reset</button>
     </div>
    </div>
  )
}

export default State
