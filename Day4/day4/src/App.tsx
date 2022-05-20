import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] =useState("")


  const fibo=(n:number):number =>{
    if(n<=1){
      return n 

    }
    return fibo(n-1)+fibo(n-2)
  }
  
  const memoisedFibo = useMemo(()=>{
    return fibo(Number(text))
  },[text])
  console.time("t1")
  console.timeEnd("T2")
  const calcFibo = ()=>{
    console.log("nth", memoisedFibo)
  }
  return (
    <div>
   <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
   <button onClick={calcFibo}>Calc</button>
    </div>
  );
}

export default App;
