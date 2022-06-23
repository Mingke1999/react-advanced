import React, { Component } from 'react'

export default class Border extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        //update state
        return{
            hasError:true   //send error signal
        }
    }
    componentDidCatch(error,errorInfo){
        console.log(error,errorInfo)
    }

  render() {
    if(this.state.hasError){
        return <h1>something went wrong</h1>
    }else{
        return this.props.children
    }
       
    }
}
