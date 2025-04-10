import { useEffect, useState } from "react"


export default function App() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchScores = async () => {
    try {
      const res = await fetch("https://masters-backend-tyzw.onrender.com/api/scores")
      const data = await res.json()
      setEntries(data)
      setLoading(false)
    } catch (err) {
      console.error("Failed to fetch scores:", err)
    }
  }

  useEffect(() => {
    fetchScores()
    const interval = setInterval(fetchScores, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">🏌️ Masters Pool Leaderboard</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Picks</th>
                <th className="p-2 text-left">Tiebreaker</th>
                <th className="p-2 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, idx) => (
                <tr
                  key={entry.name}
                  className={
                    idx === 0
                      ? "bg-yellow-100 font-bold"
                      : idx % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50"
                  }
                >
                  <td className="p-2 whitespace-nowrap">{entry.name}</td>
                  <td className="p-2">
                    <ul className="list-disc pl-5">
                      {entry.picks.map((pick, i) => (
                        <li key={i}>{pick}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-2">{entry.tiebreaker}</td>
                  <td className="p-2 font-semibold">{entry.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
