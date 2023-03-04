import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// *** All React component classes that have a constructor should start with a
// super(props) call since it is a subclass of React ***

// ***** SQUARE *****
//     class Square extends React.Component {
//         // when btn is clicked, the DOM component tells React to set up event listener,
//         // and calls the onClick handler defined in Square's render method and since
//         // this.handlClick(i) was passed, Square calls Board's method also when clicked
//         render () {
//             return (
//                 <button className='square' onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     )
// }
// }

// When square was tracking it's own state:
// render () {
//     // When you call setState in a component, React automatically updates the child components of it
//     return (
//         <button
//         className='square'
//         onClick={() => {
//             this.setState({ value: 'X' })
//         }}
//         >
//         {this.state.value}
//       </button>
//     )
// }

// Replace with function:
function Square (props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

// ***** BOARD *****
class Board extends React.Component {
  // add constructor to the class to initialize the state
  constructor (props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  // when the Board’s state changes, the Square components re-render automatically; keeping the state of all
  // squares in the Board component will allow it to determine the winner in the future
  //   handleClick (i) {
  //     const squares = this.state.squares.slice()

  //     //  Board’s handleClick function to return early by ignoring a click if someone has won the game
  //     // or if a Square is already filled
  //     if (calculateWinner(squares) || squares[i]) {
  //       return
  //     }

  //     squares[i] = this.state.xIsNext ? 'X' : 'O'
  //     this.setState({
  //       squares: squares,
  //       xIsNext: !this.state.xIsNext
  //     })
  //   }

  // passing down two props from Board to Square: value & onClick
  renderSquare (i) {
    console.log('State of each square ---> ', this.state.squares)
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render () {
    // call calculateWinner(squares) in the Board’s render function to check if a player has won
    const winner = calculateWinner(this.state.squares)
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return (
      <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true,
      stepNumber: 0
    }
  }

  // move handleClick function to Game component
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  // define the jumpTo method in Game to update that stepNumber.
  // also set xIsNext to true if the number that we’re changing stepNumber to is even
  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    })
  }

  render () {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    // map over the history in the Game’s render method:
    const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start'
      return (
        // need to add unique key to avoid React error
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

// Helper function to find winner of game
function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

// NOTES:
// / To collect data from multiple children, or to have two child components communicate
// with each other, you need to declare the shared state in their parent component instead.
// The parent component can pass the state back down to the children by using props;
// this keeps the child components in sync with each other and with the parent component.

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />)
