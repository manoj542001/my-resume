import {useState} from "react";
function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<30)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (event)=>{
   setNum(event.target.value);
  }

   return(
    <>
    <div className="increment">
    <div className="input-group">
  <div className="input-group-prepend">
    <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" className="form-control" value={num} onChange={handleChange}/>
  <div id="input-group-prepend">
    <button id="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
   </>
  );
}

export default IncDecCounter;