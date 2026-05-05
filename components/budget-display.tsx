"use client"

import { useGame } from "./game-context"

export default function BudgetDisplay() {
  const { budget, remainingBudget } = useGame()

  // Calculate percentage of budget spent
  const percentSpent = ((budget - remainingBudget) / budget) * 100

  // Determine color based on remaining budget
  const getProgressColor = () => {
    if (remainingBudget >= budget * 0.6) return "bg-green-500"
    if (remainingBudget >= budget * 0.3) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Budget Tracker</h3>

      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium">Remaining: {remainingBudget} SAR</span>
        <span className="text-lg font-medium">Total: {budget} SAR</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
        <div className={`h-6 rounded-full ${getProgressColor()}`} style={{ width: `${percentSpent}%` }}></div>
      </div>

      <div className="flex justify-between text-sm">
        <span>0 SAR</span>
        <span>{budget} SAR</span>
      </div>
    </div>
  )
}
