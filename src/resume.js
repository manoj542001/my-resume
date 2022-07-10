import React from "react";
import ReactDOM  from "react-dom";
import Image from './image/Yuhan.jpg'
// import DarkModeToggle from "react-dark-mode-toggle";
import './App.css'
import ProfessionalSkill from './ProfessionalSkill'
class Resume extends React.Component{
    constructor(){
super();
    }
    render(){
        return(
            <body>
                <div className="heading">
                
                    <div className="jumbotron text-center" id="heading">
                        <ul className="nav nav-justified col-sm-4" id="navigation">
                            <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" href="https://github.com/yuhanyuha">Project</a>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link active" href="/youtube">youtube</a>
                            </li> */}
                            <li className="nav-item">
                            <a className="nav-link active" href="#fooder">Contact</a>
                            </li> 
                        </ul>
                        <h1 className="myname">Hai<span style={{'fontSize':30}}>&#128075;</span>,This Is Yuhan.K</h1>
                        <p className="myoccupation">Software Developer</p>
                    </div>
                    </div>
                    <div className="container center">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="rounded-circle">
                                    <img src={Image}  id="img-wrapper" className="rounded-circle mx-auto d-block" alt="my photo" width="300px" height="300px">
                                    </img>
                                </div>
                                <br></br>
                            </div>
                            <div className="col-sm-7"><h2 className="myskills">Career Objectives</h2>
                            <p className="skills">To work in a professional environmental where i can find myself in decisive opportunities for creating value added carrer for myself and extend quality service to my organization.
                            </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2 className="myskills">Technical Skills :</h2><br/>
                                    <ul className="skils">
                                        <li>
                                       Frond End Languages:- HTML,CSS,JavaScript,Reactjs     
                                        </li>
                                        <li>
                                            Back End Languages:- Python
                                        </li>
                                        <li>
                                            DataBase:- MYSQL
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h2 className="myskills">Internship And Certification :</h2><br/>
                                  <ul className="skills">
                                    <li>I done Web Development intern in Crud Operation</li>
                                  </ul>
                                </div>
                                 <br/>
                                 <div className='col-sm-12'>
                        <h2 className='myskills'>Professional Skills :</h2><br/>
                            <ProfessionalSkill />
                    </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/>
                                <div className="col-sm-12">
                                    <h2 className="myskills">My Project :</h2><br/>
                                    <table className="table table-dark table-striped">
                                        <thead>
                                            <tr>
                                                <th>Project Domain</th>
                                                <th>Programming Language</th>
                                                <th>Project Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Frond End Web Development</td>
                                                <td>HTML,CSS,JavaScript,Boostrap,Reactjs</td>
                                                <td><a href={"https://github.com/yuhanyuha/my-resume"}></a>Resume Application</td>
                                            </tr>
                                            <tr>
                                                <td>Frond End Web Development</td>
                                                <td>HTML,CSS,JavaScript,Reactjs</td>
                                                <td><a href={"https://github.com/"}></a>Link Application</td>
                                            </tr>
                                            <tr>
                                                <td>Frond End Web Development</td>
                                                <td>HTML,CSS,JavaScript,Reactjs</td>
                                                <td><a href={"https://github.com/"}></a>Todolist application</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-12">
                                    <h2 className="myskills">Education Qualfiation :</h2><br/>
                                    <table className="table table-dark table-striped">
                                        <thead>
                                            <tr>
                                                <th>Degree</th>
                                                <th>School/College</th>
                                                <th>Year of Passing</th>
                                                <th>Percentage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Master in Computer Application</td>
                                                <td>Kalasalingam Acedymic Research and Education</td>
                                                <td>2022</td>
                                                <td>80%</td>
                                            </tr>
                                            <tr>
                                                <td>BSc IT </td>
                                                <td>Hajee Karutha Rowthar Howdia College</td>
                                                <td>2020</td>
                                                <td>60%</td>
                                            </tr>
                                            <tr>
                                                <td>state borad</td>
                                                <td>Nadar Saraswathi Higher Secondray School</td>
                                                <td>2016</td>
                                                <td>60%</td>
                                            </tr>
                                            <tr>
                                                <td>State borad</td>
                                                <td>Nadar Saraswathi Higher Secondray School</td>
                                                <td>2014</td>
                                                <td>81%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jumbotron text-center" id="fooder">
                     <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/" className="fa fa-linkedin nav-link" style={{color:"blue"}}></a>
                            </li>
                            <li className="nav-item">
                            <a href="https://www.youtube.com/yuhanyuhan" className="fa fa-youtube nav-link" style={{color:"blue"}}></a>
                            </li>
                            <li className="nav-item">
                            <a href="https://wa.me/917397627798" className="fa fa-whatsapp nav-link" style={{color:"blue"}}></a>
                            </li>
                            {/* <li className="nav-item">
                            <a href="mailto:yuhanyuhan43@gmail.com" className="fas fa-envelope nav-link" style={{color:"blue" }}></a>
                            </li> */}
                            <li className="nav-item">
                            <a href="https://www.instagram.com/yuhan_liu_06" className="fa fa-instagram nav-link" style={{color:"blue"}}></a>
                            </li>
                     </ul>
                     <div className='text-center' style={{padding:"30px"}}>
                copywrite ©  yuhan 2022
            </div>
                    </div>
                
            </body>
        )
    }
} 
export default Resume;