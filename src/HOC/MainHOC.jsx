import React, { Component } from 'react'
/**
 * 1. must be a function
 * 2. parameter is component
 * 3. return component
 * 4. component reusable, reduce repeat code
 */
const withFetch =(ComposeComponent)=>{
    return class extends React.Component{
        componentDidMount(){
            console.log("Componet Mounted")
        }
        render(){
            return(
                <ComposeComponent {...this.props}/>
            )
        }
    }
}
class MyData extends React.Component{
   
    render(){
        return(
            <div>
                MyData:{this.props.data}
            </div>
        )
    }
}
const WithFetch = withFetch(MyData)

export default class MainHOC extends Component {
  render() {
    return (
      <div>
        <WithFetch data="HIGH LEVEL COMPONENT"/>
      </div>
    )
  }
}
