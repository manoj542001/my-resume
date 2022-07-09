import React, { useEffect, useState } from "react";

 
 function Hook(props) {
    const[count,updatecount]=useState(10);
    const[count1,updatecount1]=useState(10);
    const[server,setserver]=useState({})
    // useEffect(()=>{
    //   console.log("helloword");
    //   updatecount1(count * 2);
    // },[count])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/2').then((response)=>response.json()).then(json=>{setserver(json)})
    },[])
    return (
        <div>
            <p>this is state using {count}</p>
            <p>{count1}</p>
            <p>{JSON.stringify(server)}</p>
            <button onClick={()=>updatecount(count+1)}> click</button>
            <button onClick={()=>updatecount1(count1+1)}>click me</button>
        </div>
    );
 }
 
 export default Hook;