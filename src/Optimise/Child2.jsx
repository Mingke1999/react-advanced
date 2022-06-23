import React from 'react'
/**
 * pureComponent
 * Shallow/light comparison, compare data only not memory
 */
export default class Child2 extends React.PureComponent {
  render() {
    console.log("Render ->>>Child 2")
    return (
      <div>
        <h3>Child 2</h3>
        <p>{this.props.message}</p>
      </div>
    )
  }
}
