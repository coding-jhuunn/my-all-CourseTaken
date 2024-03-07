import {useState,useEffect } from 'react';

const EffectHooks = () => {
    const [count,setCount] = useState(0);


    useEffect(()=>{

        if(count>10){
            console.log("Greather than 10")
        }

    },[count])


  return (
    <>
    <h1>State Hooks with Effect Hooks</h1>
    <h2>Count : {count}</h2>
    <button onClick={()=>setCount(count +1)}>Increment</button>
    <button onClick={()=>setCount(count -1)}>Decrement</button>
    </>
  )
}

export default EffectHooks