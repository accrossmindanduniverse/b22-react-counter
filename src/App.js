import React from 'react'
import Counter from './counter'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter counterText='Counter'/>
      </React.Fragment>
    )
  }
}

export default App