import React from 'react'
import { useState } from 'react'

const counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>

        <h1>{count}</h1>


        <div>

            <button onClick={()=> setCount(count+1)}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>
        </div>

           

    </div>
  )
}

export default counter