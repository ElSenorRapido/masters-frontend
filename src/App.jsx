
import React, { useEffect, useState } from 'react';

function App() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('https://masters-backend-tyzw.onrender.com/api/scores')
      .then((response) => response.json())
      .then((data) => setScores(data))
      .catch((error) => console.error('Error fetching scores:', error));
  }, []);

  return (
    <div>
      <h1>Masters Golf Pool Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((player, idx) => (
            <tr key={idx}>
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
