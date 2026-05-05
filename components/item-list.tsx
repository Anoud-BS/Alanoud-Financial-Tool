"use client"

import { useGame, type Item } from "./game-context"
import { useDrag } from "react-dnd"

function ItemCard({ item }: { item: Item }) {
  const { selectItem } = useGame()

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`bg-white rounded-xl p-4 shadow-md flex items-center gap-4 cursor-pointer transition-transform ${
        isDragging ? "opacity-50" : "hover:scale-105"
      }`}
      onClick={() => selectItem(item.id)}
    >
      <div className="flex-shrink-0 bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center">
        <span className="text-4xl" role="img" aria-label={item.name}>
          {item.image}
        </span>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
        <p className="text-lg font-semibold text-green-600">{item.cost} SAR</p>
      </div>
    </div>
  )
}

export default function ItemList() {
  const { items } = useGame()
  const availableItems = items.filter((item) => !item.selected)

  return (
    <div className="bg-blue-50 rounded-xl p-4 shadow-lg">
      <div className="space-y-3">
        {availableItems.length > 0 ? (
          availableItems.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <p className="text-center py-8 text-gray-500 text-lg">No more items available!</p>
        )}
      </div>
    </div>
  )
}
