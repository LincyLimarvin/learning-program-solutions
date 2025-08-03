import React from 'react';

const ListofPlayers = () => {
  // Declare an array of 11 players
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Dhoni", score: 75 },
    { name: "Kohli", score: 45 },
    { name: "Raina", score: 66 },
    { name: "Ashwin", score: 92 },
    { name: "Bumrah", score: 50 },
    { name: "Pant", score: 78 },
    { name: "Rahul", score: 80 },
    { name: "Jadeja", score: 40 },
    { name: "Gill", score: 73 }
  ];

  // Use map to display players
  const playerList = players.map((player, index) => (
    <li key={index}>{player.name} - Score: {player.score}</li>
  ));

  // Filter using arrow function - score < 70
  const lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{playerList}</ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
