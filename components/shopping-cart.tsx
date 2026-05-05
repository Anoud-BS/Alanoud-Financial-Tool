"use client"

import { useGame } from "./game-context"
import { useDrop } from "react-dnd"

export default function ShoppingCart() {
  const { selectedItems, unselectItem, checkResults } = useGame()

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item: { id: string }) => {
      // This is handled by selectItem in the drag source
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold text-purple-600 mb-4">My Shopping Cart</h3>
      <div
        ref={drop}
        className={`bg-purple-50 rounded-xl p-4 shadow-lg min-h-[300px] ${
          isOver ? "border-2 border-dashed border-purple-400" : ""
        }`}
      >
        {selectedItems.length > 0 ? (
          <div className="space-y-3">
            {selectedItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
                <div className="flex-shrink-0 bg-gray-100 rounded-lg w-12 h-12 flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label={item.name}>
                    {item.image}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <p className="text-md font-semibold text-green-600">{item.cost} SAR</p>
                </div>
                <button
                  onClick={() => unselectItem(item.id)}
                  className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-10">
            <p className="text-center text-gray-500 text-lg mb-4">Your shopping cart is empty!</p>
            <p className="text-center text-gray-400">Tap items or drag them here to add to your cart</p>
          </div>
        )}

        <button
          onClick={checkResults}
          disabled={selectedItems.length === 0}
          className={`w-full mt-6 py-3 rounded-lg text-white font-bold text-lg ${
            selectedItems.length > 0 ? "bg-green-500 hover:bg-green-600" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Check Results
        </button>
      </div>
    </div>
  )
}
