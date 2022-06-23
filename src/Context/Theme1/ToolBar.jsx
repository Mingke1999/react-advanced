import React, { Component } from 'react'
import Theme1Button from './Theme1Button'

export default class ToolBar extends Component {
  render() {
    return (
      <div>
        <Theme1Button message={this.props.message}/>
      </div>
    )
  }
}
