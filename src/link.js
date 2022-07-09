import  axios from "axios";
import React from "react";

function App(){
    
    const spacex=()=>{
        axios("https://api.spacexdata.com/v3/launches").then((response)=>{console.table(response.data);
    }
    )
}
    return<div>
        <button onClick={spacex}> onClick</button>
    </div>
    
}
export default App;
