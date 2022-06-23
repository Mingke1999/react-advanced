import React, { Component } from 'react'

export default class Theme1Button extends Component {
  render() {
    return (
      <div>
        <button>{this.props.message}</button>
      </div>
    )
  }
}
