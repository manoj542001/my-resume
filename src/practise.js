import React, { useState } from 'react';

function Practise(props) {
    const[value,setvalue]=useState("");
    const[value1,setvalue1]=useState("");

    return (
        <div>
            <input type="text" onChange={(event)=>setvalue(event.target.value)}></input><br></br>{value1}
            <button onClick={()=>setvalue(value)}>submit</button>
            <button onClick={()=>setvalue1("every")}>edit</button>
            
        </div>
    );
}

export default Practise;