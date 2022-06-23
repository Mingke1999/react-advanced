import React, { Component } from 'react'

export default class ErrorDemo extends Component {
    componentWillMount(){
        console.log("before render")
    }
    componentDidMount(){
        console.log("after render")
    }
  render() {
    return (
      <div>
        <p>outdate function</p>
      </div>
    )
  }
}
