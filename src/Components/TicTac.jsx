import React, { useState } from "react";

const TicTac = () => {
  const [grid, setGrid] = useState(new Array(9).fill("."));
  const [turn, setTurn] = useState(false);

  const handleTurn = (i) => {
    console.log("IN Onclick");
    if (grid[i] === "X" || grid[i] === "O") {
    } else {
      turn ? (grid[i] = "X") : (grid[i] = "O");
      console.log(grid);
      setGrid([...grid]);
      setTurn(!turn);
      checkWinner();
    }
  };

  const checkWinner = () => {
    if (
      (grid[0] === "X" && grid[1] === "X" && grid[2] === "X") ||
      (grid[3] === "X" && grid[4] === "X" && grid[5] === "X") ||
      (grid[5] === "X" && grid[6] === "X" && grid[7] === "X")
    ) {
      alert("X is Winner");
      return;
    } else if (
      (grid[0] === "X" && grid[3] === "X" && grid[6] === "X") ||
      (grid[1] === "X" && grid[4] === "X" && grid[7] === "X") ||
      (grid[2] === "X" && grid[5] === "X" && grid[8] === "X")
    ) {
      alert("X is the Winner");
      return;
    } else if (
      (grid[0] === "X" && grid[2] === "X" && grid[8] === "X") ||
      (grid[2] === "X" && grid[4] === "X" && grid[6] === "X")
    ) {
      alert("X is the winner");
      return;
    } else if (
      (grid[0] === "O" && grid[1] === "O" && grid[2] === "O") ||
      (grid[3] === "O" && grid[4] === "O" && grid[5] === "O") ||
      (grid[5] === "O" && grid[6] === "O" && grid[7] === "O")
    ) {
      alert("O is Winner");
      return;
    } else if (
      (grid[0] === "O" && grid[3] === "O" && grid[6] === "O") ||
      (grid[1] === "O" && grid[4] === "O" && grid[7] === "O") ||
      (grid[2] === "O" && grid[5] === "O" && grid[8] === "O")
    ) {
      alert("O is the Winner");
      return;
    } else if (
      (grid[0] === "O" && grid[2] === "O" && grid[8] === "O") ||
      (grid[2] === "O" && grid[4] === "O" && grid[6] === "O")
    ) {
      alert("O is the winner");
      return;
    } else {
      return;
    }
  };
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          width: "20%",
          margin: "auto",
        }}
      >
        {grid.map((el, i) => (
          <div
            style={{
              border: "1px solid gray",
            }}
            onClick={() => handleTurn(i)}
            key={i}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTac;
