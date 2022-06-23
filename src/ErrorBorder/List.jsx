import React, { Component } from 'react'

export default class List extends Component {
    state={
        names:["mingke","May"]
    }
  render() {
    return (
      <div>
        <ol>
            {
                this.state.names.map((ele,index)=>{
                    return <li key={index}>{ele}</li>
                })
            }
        </ol>
      </div>
    )
  }
}
