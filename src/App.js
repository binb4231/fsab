import { useState } from "react";

function Square({ value, onSquareClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? "winning-square" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  const winningLine = calculateWinner(squares);

  let status;

  if (winningLine) {
    status = "Winner: " + winningLine.winner;
  } else if (squares.every((square) => square !== null)) {
    status = "Tie game!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          isWinning={winningLine?.line.includes(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          isWinning={winningLine?.line.includes(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          isWinning={winningLine?.line.includes(2)}
        />
      </div>

      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          isWinning={winningLine?.line.includes(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          isWinning={winningLine?.line.includes(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          isWinning={winningLine?.line.includes(5)}
        />
      </div>

      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          isWinning={winningLine?.line.includes(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          isWinning={winningLine?.line.includes(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          isWinning={winningLine?.line.includes(8)}
        />
      </div>
    </>
  );
}
export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  function handlePlay(nextSquares) {
    setSquares(nextSquares);

    const winner = calculateWinner(nextSquares);

    if (winner) {
      if (winner.winner === "X") {
        setPlayer1Score((score) => score + 1);
      } else if (winner.winner === "O") {
        setPlayer2Score((score) => score + 1);
      }
    } else {
      setXIsNext((current) => !current);
    }
  }

  function restartGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <h2>Score</h2>

        <div className="score">
          <p>Player 1 (X): {player1Score}</p>
          <p>Player 2 (O): {player2Score}</p>
        </div>

        <button onClick={restartGame}>Restart Game</button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: [a, b, c],
      };
    }
  }

  return null;
}
