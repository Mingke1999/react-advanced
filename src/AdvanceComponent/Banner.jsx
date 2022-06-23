import React, { Component } from 'react'
import WithFetch from './WithFetch'

const Banner = WithFetch("http://iwenwiki.com/api/blueberrypai/getIndexMovement.php")(props=>{
    return(
        <div>
            <h3>BANNER</h3>
            <ul>
                {
                    props.data.movement.map((ele,index)=>{
                        return <li key={index}>{ele.content}</li>
                    })
                }
            </ul>
        </div>
    )
})

export default Banner