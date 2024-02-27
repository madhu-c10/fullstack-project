import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const[countone,setCountOne] = useState(0);
  const[colculation,setColculation] = useState(0);

  const [count,setCount]=useState(0);

  useEffect(()=>{
    setTimeout(() => {
      setCount((count)=>count+1)
    },1000);
  },[])

  const [value,setValue] = useState({
    name:"madhu",
    age:21,
    skills:"javascript"
  }) 

  const changeLanguage =()=>{
    setValue(privios=>{
      return {...privios,skills:"react"}
    })
  }

  useEffect(()=>{
    setColculation(()=>countone*2)
  },[countone])

  return (
  <>
  <h1>{value.skills}</h1>
  <button type='button' onClick={changeLanguage}>change</button>
  <h1>counter{count}</h1>

  <h1>useEffect counter {countone}</h1>
  <button type='button' onClick={()=> setCountOne((c)=>c+1)}>+</button>
  <h1>counter two {colculation}</h1>
  </>
  )
}

export default App;
