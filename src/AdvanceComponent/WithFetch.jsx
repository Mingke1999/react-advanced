import React, { Component } from 'react'
// = () => {} later ...

const WithFetch = (url) => (View) => {
    return class extends React.Component{
        constructor(){
            super();
            this.state ={
                data:null,
                loading:true
            }
        }
        //all DOM were render
        componentDidMount(){
            fetch(url).then(res=>res.json())
            .then(data=>{
                this.setState({
                    loading:false,
                    data
                })
            })
        }
        render(){
            if(this.state.loading){
                return(
                    <div>loading</div>
                )
            }else{
                return <View data={this.state.data}/>
            }
        }
    }
}

export default WithFetch