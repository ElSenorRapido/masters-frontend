import React, { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/api/scores')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Masters Golf Pool Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
