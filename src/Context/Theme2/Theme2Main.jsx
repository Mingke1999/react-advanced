import React, { Component } from 'react'
import ToolBar from './ToolBar'

//sender receiver
export const {Provider,Consumer} = React.createContext("default data")
export default class Theme2Main extends Component {

state={
        message:"some string"
      }
  render() {
    return (
      <div>
        <Provider value="dark">
            <ToolBar/>
        </Provider>
      </div>
    )
  }
}
