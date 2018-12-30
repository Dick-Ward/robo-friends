import React, {Component} from 'react'

class CounterButton extends Component {

  state = {
    count: 0
  }

  updateCount = () =>{
    this.setState(prevState =>{
    return {count: prevState.count + 1}
    })
  }

  render(){
    console.log("CounterButton")
    return(
      <button color={this.props.color} onClick={this.updateCount}>
      Count: {this.state.count}
      </button>
    )
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.state.count !== nextState.count){
    return true
    }
    return false
  }
}

export default CounterButton
