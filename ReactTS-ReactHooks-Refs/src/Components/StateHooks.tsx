
import {useState } from 'react';


const StateHooks = () => {

    const [count,setCount] = useState(0);

  return (
    <>
    <h1>State Hooks</h1>
    <h2>Count : {count}</h2>
    <button onClick={()=>setCount(count +1)}>Increment</button>
    <button onClick={()=>setCount(count -1)}>Decrement</button>
    </>
    
  )
}

export default StateHooks