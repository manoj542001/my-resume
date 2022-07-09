import React, { useState } from 'react';

function Sample(props) {
    const[result,setresult]=useState("");
    const[display,setdisplay]=useState("");
    
    return (
        <div>
            <input type="text" onChange={(event)=>setresult(event.target.value)}></input><br></br>
            

           {display} <br></br>
           <input type="text" onChange={(event)=>setresult(event.target.value)}></input><br></br>
           
            <button onClick={()=>setdisplay(result)}>save</button>
            <button onClick={()=>setdisplay(result)}>edit</button>
        </div>
    );
}

export default Sample;