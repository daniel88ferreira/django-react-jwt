import React, { Component } from 'react'
import { connect } from 'react-redux'

import {echo} from './actions/echo'
import {serverMessage} from './reducers'

class App extends Component {
  componentDidMount () {
    this.props.fetchMessage('BATATAS!')
  }

  render () {
    return (
      <div>
        <h2>Welcome to React</h2>
        <p>
          The message: <b>{this.props.message}</b>
        </p>
      </div>
    )
  }
}

export default connect(
  state => ({ message: serverMessage(state) }),
  { fetchMessage: echo }
)(App)
