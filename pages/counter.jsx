import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div>

        <h1>Hello:{count}</h1>


        <div>

            <button onClick={()=> setCount(count+1)}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>
        </div>

           

    </div>
  )
}

export default Counter;