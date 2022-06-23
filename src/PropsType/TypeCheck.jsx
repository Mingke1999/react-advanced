import React, { Component } from 'react'
import Greeting from './Greeting'

export default class TypeCheck extends Component {
  render() {
    return (
      <div>
        <h2>PROPS TYPE CHECKING</h2>
        <Greeting title="height" age={200}/>
        <Greeting title="age"/>
      </div>
    )
  }
}
