import React from 'react'

import './Tictactoe.css'

export default class Tictactoe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      turnMe: false,
      isOver: false,
      winner: 0,
      matrix: []
    }
  }

  componentDidMount() {
    this.initializeMatrix()
  }

  initializeMatrix() {
    const matrix = Array.from({ length: 3 }, () => {
      return Array.from({ length: 3 }).fill(0)
    })

    this.setState({ matrix })
  }

  checkStatus(matrix = this.state.matrix) {
    let winner = 0
    let isOver = matrix.every((cells) => cells.every((item) => !!item))

    const diagonally = []

    // 行检测
    if (!isOver) {
      matrix.forEach((cells, i) => {
        if (isOver) return

        const sum = cells.reduce((acc, item) => acc + item, 0)

        isOver = Math.abs(sum) === 3

        if (isOver) {
          winner = sum === 3 ? 1 : -1
          return
        }

        cells.forEach((item, j) => {
          if (i === j) diagonally.push(item)
        })
      })
    }

    // 对角线检测
    if (!isOver) {
      const sum = diagonally.reduce((acc, item) => acc + item, 0)

      isOver = Math.abs(sum) === 3

      if (isOver) winner = sum === 3 ? 1 : -1
    }

    // 列检测
    if (!isOver) {
      Array.from({ length: 3 }).forEach((_, j) => {
        if (isOver) return

        const columns = Array.from({ length: 3 }, (_, i) => matrix[i][j])

        const sum = columns.reduce((acc, item) => acc + item, 0)

        isOver = Math.abs(sum) === 3

        if (isOver) winner = sum === 3 ? 1 : -1
      })
    }

    this.setState({ isOver, winner })
  }

  clickHandker(rowIndex, cellIndex) {
    const { turnMe, matrix } = this.state

    console.log(rowIndex, cellIndex)

    const _matrix = matrix.map((cells, i) => {
      return cells.map((item, j) => {
        if (item !== 0) return item

        if (i !== rowIndex || j !== cellIndex) return item

        if (turnMe) return 1

        return -1
      })
    })

    this.setState({ turnMe: !turnMe, matrix: _matrix })
    this.checkStatus(_matrix)
  }

  render() {
    return (
      <div className='tictactoe-wrapper'>
        <div className='tictactoe-board'>
          {this.state.matrix.map((cells, rowIndex) => {
            return (
              <div className='tictactoe-row' key={rowIndex}>
                {cells.map((item, cellIndex) => {
                  return (
                    <div
                      className={`tictactoe-cell tictactoe-cell-${item ? (item === 1 ? 'me' : 'computer') : ''}`}
                      key={cellIndex}
                      onClick={() => this.clickHandker(rowIndex, cellIndex)}>
                      {item ? (item === 1 ? 'O' : 'X') : ''}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
