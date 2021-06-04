import React from 'react'
import './App.css'

class Counter extends React.Component {
  state = {
    number: 0
  }

  onClickPlus = () => {
    if(this.state.number < 10) this.setState({number: this.state.number + 1})
    if (this.state.number >= 10) window.alert(`Number can't be greater than 10`)
  }

  onClickMinus = () => {
    if(this.state.number !== 0) this.setState({number: this.state.number - 1})
    if (this.state.number <= 0) window.alert(`Number can't be lower than 0`)
  }

  render () {
    return (
      <div id='parent'>
      <div className='props-counter'>
      {this.props.counterText}
      </div>
      <div className='button'>
        <button onClick={this.onClickPlus}>+</button>
        <p className='counter-num'>{this.state.number}</p>
        <button onClick={this.onClickMinus}>-</button>
      </div>
      </div>
    )
  }
}

export default Counter