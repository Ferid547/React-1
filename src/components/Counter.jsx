import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count,setCount]= useState(0);

  const increment = ()=>{
    setCount(count+1)
  }

  const decrement = ()=>{
    if(count !== 0){
      setCount(count-1);
    }
    
  }
  return (
    <div className="counter">
        <Button onClick={increment} className="plus">+</Button>
        <h2 className="number">{count}</h2>
        <Button onClick={decrement} className="minus">|</Button>
    </div>
  )
}

export default Counter;