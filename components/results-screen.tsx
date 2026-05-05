"use client"

import { useGame } from "./game-context"
import { useEffect, useState } from "react"

export default function ResultsScreen() {
  const { gameState, stars, resetLevel, nextLevel, items, selectedItems, currentLevel } = useGame()
  const [showConfetti, setShowConfetti] = useState(false)

  // Get high priority items
  const highPriorityItems = items.filter((item) => item.priority === "high")
  const selectedHighPriorityItems = highPriorityItems.filter((item) => item.selected)

  // Calculate score percentage
  const scorePercentage = Math.round((selectedHighPriorityItems.length / highPriorityItems.length) * 100)

  // Parent notification message
  const parentMessage =
    gameState === "won"
      ? `Your child made great spending choices in Level ${currentLevel} by focusing on needs first!`
      : `Your child is learning about financial priorities in Level ${currentLevel}. They missed some important items in their budget.`

  // Check if this is the final level
  const isFinalLevel = currentLevel === 5

  // Show confetti effect when winning
  useEffect(() => {
    if (gameState === "won") {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [gameState])

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto relative">
      {/* Celebration emojis for winning - removed face emojis */}
      {gameState === "won" && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 text-5xl animate-bounce">🎉</div>
          <div className="absolute top-10 right-1/4 text-5xl animate-bounce" style={{ animationDelay: "0.3s" }}>
            🎊
          </div>
          <div className="absolute bottom-20 left-10 text-5xl animate-bounce" style={{ animationDelay: "0.5s" }}>
            🎈
          </div>
          <div className="absolute top-20 right-10 text-5xl animate-bounce" style={{ animationDelay: "0.7s" }}>
            🎈
          </div>
          <div className="absolute bottom-40 right-20 text-5xl animate-bounce" style={{ animationDelay: "0.2s" }}>
            🏆
          </div>
        </div>
      )}

      <div className="text-center mb-8 relative z-10">
        <h2 className={`text-3xl font-bold mb-4 ${gameState === "won" ? "text-green-600" : "text-red-600"}`}>
          {gameState === "won" ? (
            <span className="flex items-center justify-center">
              Great Job! <span className="ml-2">🎉</span>
            </span>
          ) : (
            "Try Again!"
          )}
        </h2>

        <div className="flex justify-center mb-4">
          {gameState === "won" ? (
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-5xl text-yellow-400">
                  ★
                </span>
              ))}
            </div>
          ) : (
            <div className="w-24 h-24 mx-auto flex items-center justify-center">
              <span className="text-5xl">❌</span> {/* Replaced sad face with X mark */}
            </div>
          )}
        </div>

        <p className="text-xl mb-2">
          {gameState === "won" ? "You prioritized your spending wisely!" : "You missed some important items!"}
        </p>

        <p className="text-lg text-gray-600 mb-6">
          You purchased {selectedHighPriorityItems.length} out of {highPriorityItems.length} important items.
        </p>

        <div className="bg-blue-50 rounded-lg p-4 mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Parent Notification</h3>
          <p className="text-gray-700">{parentMessage}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={resetLevel}
            className="py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-lg text-lg transition-colors"
          >
            Try Again
          </button>

          {gameState === "won" && !isFinalLevel && (
            <button
              onClick={nextLevel}
              className="py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Next Level
            </button>
          )}

          {gameState === "won" && isFinalLevel && (
            <button
              onClick={resetLevel}
              className="py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Play Again
            </button>
          )}

          {gameState === "lost" && (
            <button
              onClick={resetLevel}
              className="py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Start Over
            </button>
          )}
        </div>
      </div>

      <div className="mt-8 relative z-10">
        <h3 className="text-xl font-bold mb-4">Important Items:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highPriorityItems.map((item) => (
            <div
              key={item.id}
              className={`p-3 rounded-lg flex items-center gap-3 ${
                item.selected ? "bg-green-100 border border-green-300" : "bg-red-100 border border-red-300"
              }`}
            >
              <div className="w-10 h-10 flex-shrink-0 bg-white rounded flex items-center justify-center">
                <span className="text-2xl" role="img" aria-label={item.name}>
                  {item.image}
                </span>
              </div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm">{item.cost} SAR</p>
              </div>
              <div className="ml-auto">
                {item.selected ? (
                  <span className="text-green-600 text-xl">✓</span>
                ) : (
                  <span className="text-red-600 text-xl">✗</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
