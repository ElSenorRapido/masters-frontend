import React, { useEffect, useState } from 'react';

function App() {
  const [scores, setScores] = useState([]);

  const fetchScores = async () => {
    try {
      const res = await fetch('https://masters-backend-tyzw.onrender.com/api/scores');
      const data = await res.json();
      setScores(data);
    } catch (error) {
      console.error('Error fetching scores:', error);
    }
  };

  useEffect(() => {
    fetchScores();
    const interval = setInterval(fetchScores, 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Masters Pool Leaderboard</h1>
      <div className="overflow-auto shadow-xl rounded-xl bg-white">
        {scores.map((player, idx) => (
          <div key={idx} className="border-b last:border-0 p-4">
            <h2 className="text-xl font-bold">{idx + 1}. {player.name} ({player.total})</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {player.picks.map((pick, pickIdx) => (
                <span key={pickIdx} className="px-3 py-1 bg-gray-200 rounded">
                  {pick.golfer}: <strong>{pick.score === 999 ? 'N/A' : pick.score}</strong>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
