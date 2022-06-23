import React, { Component } from 'react'
/**
 * some comdition need to optimise
 * 1. time counter: component destruction-> cancle time counter
 * 2. network request: component destruction-> cancle request
 * 3. event listening: component destruction-> destroy event function
 */
const MyAPI ={
    count:0,
    subScribe(cb){
        this.intervalID = setInterval(()=>{
            this.count+=1
            cb(this.count)
        },1000)
    },
    cancel(){
        clearInterval(this.intervalID)
        this.reset()
    },
    reset(){
        this.count = 0;
    }
}

export default class Optimization extends Component {
    constructor(){
        super();
        this.state ={
            count:0
        }
    }
    componentDidMount(){
        MyAPI.subScribe(currentCount =>{
            this.setState({
                count:currentCount
            })
        })
    }

    /**
     * Refresh too quick, which induced ->>
     * possible problem-> component has been destructed
     * but the time counter is still running
     */

    componentWillUnmount(){
        //cancle time counter before component desctruct 
        MyAPI.cancel();
    }
  render() {
    return (
      <div>
        <h2>OPTIMAZATION</h2>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
