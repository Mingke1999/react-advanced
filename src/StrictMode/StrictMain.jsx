import React, { Component } from 'react'
import ErrorDemo from './ErrorDemo'
/**
 * help to detect potential error
 * Strict mode is valid when develoment but production
 * 1. unsafe liftcycle
 * 2. outdate ref API Warning
 * 3. abndoned findDOMNode use Warning
 * 4. detect unexpected side effect
 * 5. dete4ct outdate context API
 */
export default class StrictMain extends Component {
  render() {
    return (
      <div>
        <h2>STRICT MODE</h2>
        <React.StrictMode>
            <ErrorDemo/>
        </React.StrictMode>
      </div>
    )
  }
}
