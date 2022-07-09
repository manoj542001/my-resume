import React from "react";
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './home';
import About from './about';
import Viwe from './viwe';
import './index.css'
 
const Head=()=>{
return(
   <Router>
    <>
        <div className="think">

        </div>
        
            <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/View">View</Link>
                </li>
            </ul>
        </div>
            <h1>react router example</h1>
        
                <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/View" element={<Viwe></Viwe>}></Route>
            </Routes>
            </Router>
        
        </>

)
}
export default Head;