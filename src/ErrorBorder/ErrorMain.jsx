import React, { Component } from 'react'
import List from './List'
import Border from './Border'

export default class ErrorMain extends Component {
  render() {
    return (
      <div>
        <h3>Error Border Runnning</h3>
        <Border>
            <List/>
        </Border>
       
      </div>
    )
  }
}
