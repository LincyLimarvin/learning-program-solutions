import React from 'react';

const IndianPlayers = () => {
  const allPlayers = ["Virat", "Rohit", "Dhoni", "Kohli", "Raina", "Ashwin"];

  // Destructuring
  const [odd1, even1, odd2, even2, odd3, even3] = allPlayers;

  // Merge two arrays
  const T20players = ["Hardik", "Shreyas"];
  const RanjiTrophyPlayers = ["Sundar", "Jaiswal"];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
