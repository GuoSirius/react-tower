import React from 'react'

import store from 'store2'

import { getInitialScore } from '../../api/home.js'

import './Home.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    const score = store.get('score', 0)

    this.state = { score }
  }

  componentDidMount() {
    const { score } = this.state

    if (!score) this.getInitialScore()
  }

  getInitialScore() {
    getInitialScore().then((result) => {
      const { score } = result

      store.set('score', score)

      this.setState({ score })
    })
  }

  resetHandler = () => {
    this.getInitialScore()
  }

  render() {
    return (
      <div className='home-wrapper'>
        <p className='home-tip'>Please choose an option from the sidebar.</p>
        <p className='home-score'>
          <span>Games left to win: {this.state.score} </span>
          <button type='button' className='home-reset' onClick={this.resetHandler}>
            (reset)
          </button>
        </p>
      </div>
    )
  }
}
