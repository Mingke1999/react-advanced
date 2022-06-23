import React, { Component,Suspense } from 'react'
//when it is used to import
const Other = React.lazy(()=>import("./Other"))

export default class LazyMain extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
            <Other/>
        </Suspense>
      </div>
    )
  }
}
