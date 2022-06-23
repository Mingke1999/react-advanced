import React, { Component } from 'react'
import ToolBar from './ToolBar'
export default class Theme1Main extends Component {
    state={
        message:"A quick message"
    }
  render() {
    return (
      <div>
        <ToolBar message={this.state.message}/>
      </div>
    )
  }
}
