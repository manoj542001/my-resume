import React, { Component } from "react";

class Contant extends Component{
    constructor(){ //initial of value
        super();  //parent to constructor called using the super// inherit
        this.state={  //state mean variable deceration & value update using
            displayContent: "welcome all"
        }
    }
    render(){
        return 
        <React.Fragment>
         <div className="container">{this.state.displayContent}</div>
        <button onClick={displayContent}></button>
        </React.Fragment>
    }
}