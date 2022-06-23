import React, { Component } from 'react'

export default class News extends Component {
    constructor(){
        super();
        this.state={
            movement:[]
        }
    }
    //DOM render, should render first then make http request
    componentDidMount(){
        fetch("http://iwenwiki.com/api/blueberrypai/getIndexMovement.php")
        .then(res=>res.json())  //convert to json
        .then(data=>{
            //console.log(data);
            this.setState({
                movement:data.movement  //receiving a set of data
            })
        })
    }
    render() {
        return (
        <div>
            <h3>News Render</h3>
            <ul>
                {
                
                //loop render all movement
                this.state.movement.map((ele,index)=>{
                        return <li key={index}>{ele.content}</li>
                    })
                }
            </ul>
        </div>
        )
    }
}
