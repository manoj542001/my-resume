import React, { Component } from "react";

class DisplayContent extends Component {
  updateContent=()=>{
    this.props.updateContent();
  }
  render() {
    return <div>child component -{this.props.displaydata} 
    {/* parent chid main action in this.props */}
    <button onClick={this.updateContent}>content change from child </button></div>
  }
}

export default DisplayContent;
