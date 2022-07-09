 import React, { Component } from "react";
import './header.css';
import DisplayContent from '../display-content';
import displayContent from "../display-content";
class Header extends Component { //feature using
  constructor(){  //initial value
    super();      //parent to called in constructor
    this.state={   //variable decleration
      dislaycontent:"welcome All"
    }
  }
  updatedisplaycontent=()=>{console.log(this);
    //setstate contain callback function && state value update using in setstate
  this.setState({dislaycontent:"content chenged"},()=>{console.log('callback inside setstate',this.state);});
  console.log(this.state);
  }
  updatedisplaycontentfromchild=()=>{
    this.setState({dislaycontent:"content chenged from child"},()=>{console.log('callback inside setstate',this.state);});
    
  }
  handeChange=(event)=>{
    this.setState({displayContent:event.target.value})

  }
  render() {
    return (
    <React.Fragment>
    <div className="container">{this.state.dislaycontent}
    <DisplayContent displaydata={this.state.dislaycontent}
    updateContent={this.updatedisplaycontentfromchild}></DisplayContent>
    in parent component -{this.state.dislaycontent}
    <input type="text"  value={this.state.dislaycontent} onChange={(event)=> this.handeChange(event)}/>
    <button onClick={this.updatedisplaycontent}>change</button>
    </div>
    </React.Fragment>
    );
  }
}

export default Header;
