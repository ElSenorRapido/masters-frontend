import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://masters-backend-tyzw.onrender.com/api/scores")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching scores:", err));
  }, []);

  const getScoreClass = (score) => {
    if (score <= -5) return "score-great";
    if (score <= -1) return "score-good";
    if (score === 0) return "score-even";
    return "score-bad";
  };

  return (
    <div className="container">
      <h1>🏌️ Masters Pool Leaderboard</h1>
      {data.map((entry, index) => (
        <div key={index} className="card">
          <h2>
            {index + 1}. {entry.name} ({entry.total > 0 ? "+" : ""}
            {entry.total})
          </h2>
          <div className="picks">
            {entry.picks.map((pick, i) => (
              <div key={i} className={`golfer ${getScoreClass(pick.score)}`}>
                <strong>{pick.golfer}</strong>: {pick.score}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
