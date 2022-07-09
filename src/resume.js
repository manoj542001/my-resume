import React from "react";
import ReactDOM  from "react-dom";
import Image from './image/Yuhan.jpg'
class Resume extends React.Component{
    constructor(){
super();
    }
    render(){
        return(
            <body>
                <div className="heading">
                    <div className="jumbotron text-center" id="heading">
                        <h1 className="myname">YUHAN.K</h1>
                        <p className="myoccupation">Software Developer</p>
                        <ul className="nav nav-pills nav-justified" id="navigation">
                            <li className="nav-item">
                            <a className="nav-link active" href="/">Resume</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" href="/project">Project</a>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link active" href="/youtube">youtube</a>
                            </li> */}
                            <li className="nav-item">
                            <a className="nav-link active" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="container center">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="rounded-circle">
                                    <img src={Image} className="rounded-circle mx-auto d-block" alt="my photo" width="300px" height="300px">
                                    </img>
                                </div>
                                <br></br>
                            </div>
                            <div className="col-sm-8"><h2 className="myskills">Career Objectives</h2>
                            <p className="skills">To work in a professional environmental where i can find myself in decisive opportunities for creating value added carrer for myself and extend quality service to my organization.
                            </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2 className="myskills">Technical Skills</h2><br/>
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
                                    <h2 className="myskills">Internship And Certification</h2><br/>
                                  <ul className="skills">
                                    <li>I done wen Development intern in Crud Operation</li>
                                  </ul>
                                </div>
                                <br/>
                                <div className="col-sm-12">
                                    <h2 className="myskills">my project</h2><br/>
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
                                                <td><a href={"https://github.com/"}></a>Resume Application</td>
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
                                    <h2 className="myskills">Education Qualfiation</h2><br/>
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
                    <div className="jumbotron text-cente" id="fooder">
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
                            <a href="https://www.gmail.com/yuhanyuhan43@gmail.com" className="fa fa-gmail nav-link" style={{color:"blue"}}></a>
                            </li> */}
                            <li className="nav-item">
                            <a href="https://www.instagram.com/yuhan_liu_06" className="fa fa-instagram nav-link" style={{color:"blue"}}></a>
                            </li>
                     </ul>
                    </div>
                </div>
            </body>
        )
    }
} 
export default Resume;