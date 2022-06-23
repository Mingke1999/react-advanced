import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Greeting extends Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.age}</p>
      </div>
    )
  }
}
Greeting.propTypes = {  //if the props passed is not string, warning
    title:PropTypes.string
}
Greeting.defaultProps = {
    age:0
}