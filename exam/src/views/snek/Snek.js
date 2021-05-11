import React from 'react'

import './Snek.css'

export default class Snek extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      matrix: []
    }
  }

  componentDidMount() {
    this.initializeMatrix()
  }

  initializeMatrix() {
    const matrix = Array.from({ length: 10 }, () => {
      return Array.from({ length: 10 }).fill(0)
    })

    this.setState({ matrix })
  }

  render() {
    return (
      <div className='snek-wrapper'>
        <div className='snek-board'>
          {this.state.matrix.map((item, rowIndex) => {
            return (
              <div className='snek-row' key={rowIndex}>
                {item.map((status, cellIndex) => {
                  return <div className='snek-cell' key={cellIndex}></div>
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
