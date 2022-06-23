import React, { Component } from 'react'

export default class RefsMain extends Component {
constructor(){
    super();
    this.text = React.createRef();
}
componentDidMount(){
    //DOM rendered
    this.text.current.innerHTML="New Text"
}
  render() {
    return (
      <div>
        <p ref={this.text}>Text</p>
      </div>
    )
  }
}
