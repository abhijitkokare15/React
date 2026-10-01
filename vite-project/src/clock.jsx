import { useState,useEffect } from "react";

function Clock ()
{   // indicate the current time and update the time every second
    const [time,setTime]=useState(new Date().toLocaleTimeString())

    const [show,setShow]=useState(true)
 
    // this is function is handled by the web api and run only once when the component is mounted and then it will run the setInterval function every second to update the time
    useEffect(()=>
    {
        if(!show)
            return;

    const intid= setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
        console.log("pavan")
    },1000)

    // clear interval function is used to clear the interval when the component is unmounted or when the show state is changed to false
    return()=>
    {
        clearInterval(intid)
    }
    // clear the interval and avoid for memory leak when the component is unmounted or when the show state is changed to false i.e
    //i.e sending the interval to web api to clear the interval and avoid memory leak

},[show]) // this is dependency array and it will run the useEffect function only when the show state is changed    



    return (
     <>
     <button onClick={() =>setShow(!show)}>{show ? "show ":"hide"}</button>
     {
        show && <h1> Current-time :{time}</h1>
     }
     {/* <h1> Current-time :{time}</h1> */}
       
    </>

    )
}

export default Clock;
