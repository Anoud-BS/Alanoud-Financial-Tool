"use client"

import { useGame } from "./game-context"
import ItemList from "./item-list"
import ShoppingCart from "./shopping-cart"
import BudgetDisplay from "./budget-display"
import ResultsScreen from "./results-screen"
import { useState } from "react"
import { DndProvider } from "react-dnd"
import { TouchBackend } from "react-dnd-touch-backend"

export default function GameScreen() {
  const { currentLevel, budget, gameState } = useGame()
  const [showInstructions, setShowInstructions] = useState(true)

  // Get level-specific message
  const getLevelMessage = () => {
    switch (currentLevel) {
      case 1:
        return "Basic needs vs. wants"
      case 2:
        return "Planning with a bigger budget"
      case 3:
        return "Back-to-school shopping"
      case 4:
        return "Family day planning"
      case 5:
        return "Monthly budget planning"
      default:
        return "Make smart choices!"
    }
  }

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-purple-600 mb-2">
            Savvy Kid <span className="animate-bounce-slow inline-block">💰</span>
          </h1>
          <h2 className="text-2xl font-semibold text-blue-500">Smart Kid Wallet</h2>
          <div className="mt-4 bg-yellow-100 rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-bold text-yellow-700">
              Level {currentLevel}: {getLevelMessage()}
            </h3>
            <p className="text-lg font-medium text-yellow-600">Budget: {budget} SAR</p>
          </div>
        </header>

        {/* Instructions Modal */}
        {showInstructions && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-lg mx-4">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">How to Play</h2>
              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li className="text-lg">
                  You have a budget of <span className="font-bold">{budget} SAR</span>
                </li>
                <li className="text-lg">Tap items to add them to your shopping cart</li>
                <li className="text-lg">Choose wisely! Some items are more important than others</li>
                <li className="text-lg">Try to buy all the important items before spending on fun things</li>
                <li className="text-lg">When you're done shopping, click "Check Results"</li>
              </ol>
              <button
                onClick={() => setShowInstructions(false)}
                className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg text-lg transition-colors"
              >
                Let's Start!
              </button>
            </div>
          </div>
        )}

        {gameState === "playing" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Available Items</h3>
              <ItemList />
            </div>
            <div>
              <BudgetDisplay />
              <ShoppingCart />
            </div>
          </div>
        ) : (
          <ResultsScreen />
        )}
      </div>
    </DndProvider>
  )
}
