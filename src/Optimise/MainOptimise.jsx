import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2';
export default class MainOptimise extends Component {

  constructor() {
    super();
    this.state ={
        message:"BULK NUITRIENTS",
        count:0
    }
  }

  increment = () =>{
    this.setState({
        count:this.state.count+1
    })
  }
  render() {
    console.log("Render ->>>Main")
    return (
      <div>
        <h2>PERFORMANCE OPTIMASATION</h2>
        <Child1 message={this.state.message}/>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>INCREASE</button>

        <Child2 message={this.state.message}/>
      </div>
    )
  }
}
