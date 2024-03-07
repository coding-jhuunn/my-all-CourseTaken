
import {useMemo,useState} from'react';


const MemoHooks = () => {
  const [count,setCount]=useState<number>(0);
  const [item,setItem]=useState<string[]>([]); 
  const calcualte = useMemo(()=> LoopCalculation(count),[count])

  const countPlust = ()=>{
    setCount((c)=>c+1)
  }

  const addItem = ()=>{
    setItem ((t)=>[...t,"c"])
  }
  return (
    <>
    <h1>Item List</h1>
    <div>
        {item.map((items,index)=>{
          return <p key={index}>{items}</p>
        })}
    </div>
    <button onClick={addItem}>ADD ITEM</button>
        <div>
          <h1>Count: {count}</h1>
          <button onClick={countPlust}>Increment</button>
          <h2>{calcualte}</h2>
        </div>
  </>
  )
  
}
  const LoopCalculation = (c:number)=>{
    for(let i=0;i<10000000;i++){
      c+=i;
    }
    return c;
  }






export default MemoHooks