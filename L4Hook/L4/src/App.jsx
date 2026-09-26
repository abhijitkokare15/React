import {useState} from 'react';
import './App.css'
 export default function App()
{
  // let count = 0;
  // function inc()
  // {

  //   count++;
  //   document.querySelector('p').textContent=`counter:${count}`
    
  // }

   let [count,setCount]=useState(0);
       
  function inc()
  {
    count++;
    setCount(count);

  }
  return( <>
  <p> counter: {count}</p>
<button onClick={inc}> Increment</button>

 </>)
}
   
//or export default App //aslo find 