import React, { Component } from 'react'

export default class Fragment extends Component {
constructor(){
    super();
    this.state={
        hasFlag:false
    }
}
  render() {
    return (
      <div>
        <h3>Fragment</h3>
        {
            this.state.hasFlag?
            <React.Fragment>
            <p>content 1</p>
            <p>content 2</p>
            <p>content 3</p>
            <p>content 4</p>
            <p>content 5</p>
            </React.Fragment>:
            <>
            <p>content 6</p>
            <p>content 7</p>
            <p>content 8</p>
            <p>content 9</p>
            <p>content 0</p>
            </>
        }
      </div>
    )
  }
}
