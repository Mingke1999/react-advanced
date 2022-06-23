import React, { Component } from 'react'
import { Consumer } from './Theme2Main'
export default class ThemewButton extends Component {

  render() {
    return (
      <div>
        <Consumer>
          {
            value =>{
              return<button>{value}</button>
            }
          }
        </Consumer>
      </div>
    )
  }
}
