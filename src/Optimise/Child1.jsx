import React, { Component } from 'react'

export default class Child1 extends Component {
    shouldComponentUpdate(nextProps,nextState){
        //console.log(nextProps)
        if(nextProps.message===this.props.message){
            return false;
        }else{
            return true;
        }
        
    }
  render() {
    console.log("Render ->>>Child 1")
    return (
      <div>
        <h3>child 1</h3>
        <p>{this.props.message}</p>
      </div>
    )
  }
}
