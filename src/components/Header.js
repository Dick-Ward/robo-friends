import React, {Component} from 'react'
import CounterButton from './CounterButton'

class Header extends Component {
  render(){
    console.log("rendered")
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton color={'red'} />
      </div>
    )
  }

  shouldComponentUpdate(){
    return false
  }
}

export default Header
