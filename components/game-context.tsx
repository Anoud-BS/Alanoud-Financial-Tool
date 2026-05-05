"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Priority = "high" | "medium" | "low"

export interface Item {
  id: string
  name: string
  cost: number
  priority: Priority
  image: string
  selected: boolean
}

export interface Level {
  id: number
  budget: number
  items: Item[]
  message: string
}

interface GameContextType {
  currentLevel: number
  budget: number
  remainingBudget: number
  items: Item[]
  selectedItems: Item[]
  gameState: "playing" | "won" | "lost"
  stars: number
  selectItem: (id: string) => void
  unselectItem: (id: string) => void
  checkResults: () => void
  resetLevel: () => void
  nextLevel: () => void
}

const GameContext = createContext<GameContextType | undefined>(undefined)

const levels: Level[] = [
  {
    id: 1,
    budget: 50,
    message: "Let's learn to prioritize our spending!",
    items: [
      {
        id: "1",
        name: "Lunch",
        cost: 15,
        priority: "high",
        image: "🍱", // Lunch box emoji
        selected: false,
      },
      {
        id: "2",
        name: "Toy",
        cost: 25,
        priority: "low",
        image: "🏎️", // Toy car emoji
        selected: false,
      },
      {
        id: "3",
        name: "Book",
        cost: 10,
        priority: "medium",
        image: "📚", // Books emoji
        selected: false,
      },
      {
        id: "4",
        name: "Donate to Charity",
        cost: 5,
        priority: "medium",
        image: "🤲", // Hands emoji
        selected: false,
      },
      {
        id: "5",
        name: "School Club Activity",
        cost: 20,
        priority: "high",
        image: "🏫", // School emoji
        selected: false,
      },
    ],
  },
  {
    id: 2,
    budget: 100,
    message: "You have more money now! Choose wisely!",
    items: [
      {
        id: "1",
        name: "School Supplies",
        cost: 30,
        priority: "high",
        image: "✏️", // Pencil emoji
        selected: false,
      },
      {
        id: "2",
        name: "Video Game",
        cost: 60,
        priority: "low",
        image: "🎮", // Game controller emoji
        selected: false,
      },
      {
        id: "3",
        name: "Healthy Snacks",
        cost: 15,
        priority: "high",
        image: "🍎", // Apple emoji
        selected: false,
      },
      {
        id: "4",
        name: "Save for Future",
        cost: 20,
        priority: "medium",
        image: "💰", // Money bag emoji
        selected: false,
      },
      {
        id: "5",
        name: "Movie Ticket",
        cost: 25,
        priority: "low",
        image: "🎬", // Movie clapper emoji
        selected: false,
      },
      {
        id: "6",
        name: "Bus Fare",
        cost: 10,
        priority: "high",
        image: "🚌", // Bus emoji
        selected: false,
      },
    ],
  },
  {
    id: 3,
    budget: 150,
    message: "School is starting! Plan your back-to-school shopping!",
    items: [
      {
        id: "1",
        name: "Backpack",
        cost: 45,
        priority: "high",
        image: "🎒", // Backpack emoji
        selected: false,
      },
      {
        id: "2",
        name: "Lunch Box",
        cost: 20,
        priority: "high",
        image: "🍱", // Lunch box emoji
        selected: false,
      },
      {
        id: "3",
        name: "Notebooks",
        cost: 15,
        priority: "high",
        image: "📓", // Notebook emoji
        selected: false,
      },
      {
        id: "4",
        name: "Art Supplies",
        cost: 30,
        priority: "medium",
        image: "🎨", // Art palette emoji
        selected: false,
      },
      {
        id: "5",
        name: "New Shoes",
        cost: 50,
        priority: "medium",
        image: "👟", // Running shoe emoji
        selected: false,
      },
      {
        id: "6",
        name: "Fancy Pencil Case",
        cost: 25,
        priority: "low",
        image: "🖊️", // Pen emoji
        selected: false,
      },
      {
        id: "7",
        name: "Tablet",
        cost: 80,
        priority: "low",
        image: "📱", // Tablet emoji
        selected: false,
      },
    ],
  },
  {
    id: 4,
    budget: 200,
    message: "Plan a family day out! What will you spend on?",
    items: [
      {
        id: "1",
        name: "Transportation",
        cost: 40,
        priority: "high",
        image: "🚗", // Car emoji
        selected: false,
      },
      {
        id: "2",
        name: "Family Lunch",
        cost: 60,
        priority: "high",
        image: "🍔", // Hamburger emoji
        selected: false,
      },
      {
        id: "3",
        name: "Museum Tickets",
        cost: 50,
        priority: "medium",
        image: "🏛️", // Museum emoji
        selected: false,
      },
      {
        id: "4",
        name: "Theme Park Tickets",
        cost: 120,
        priority: "low",
        image: "🎢", // Roller coaster emoji
        selected: false,
      },
      {
        id: "5",
        name: "Souvenir",
        cost: 30,
        priority: "low",
        image: "🧢", // Cap emoji
        selected: false,
      },
      {
        id: "6",
        name: "Ice Cream",
        cost: 20,
        priority: "medium",
        image: "🍦", // Ice cream emoji
        selected: false,
      },
      {
        id: "7",
        name: "Family Photo",
        cost: 25,
        priority: "medium",
        image: "📸", // Camera emoji
        selected: false,
      },
    ],
  },
  {
    id: 5,
    budget: 300,
    message: "You're planning for the whole month! Make smart choices!",
    items: [
      {
        id: "1",
        name: "Groceries",
        cost: 100,
        priority: "high",
        image: "🛒", // Shopping cart emoji
        selected: false,
      },
      {
        id: "2",
        name: "Sports Club",
        cost: 120,
        priority: "high",
        image: "⚽", // Soccer ball emoji
        selected: false,
      },
      {
        id: "3",
        name: "Buy Flowers",
        cost: 40,
        priority: "medium", // Changed priority to medium since it's not as essential
        image: "💐", // Bouquet emoji
        selected: false,
      },
      {
        id: "4",
        name: "New Clothes",
        cost: 60,
        priority: "medium",
        image: "👕", // T-shirt emoji
        selected: false,
      },
      {
        id: "5",
        name: "Movie Night",
        cost: 35,
        priority: "low",
        image: "🎬", // Movie clapper emoji
        selected: false,
      },
      {
        id: "6",
        name: "Savings",
        cost: 50,
        priority: "high", // Changed to high priority to maintain 3 high priority items
        image: "🏦", // Bank emoji
        selected: false,
      },
      {
        id: "7",
        name: "New Video Game",
        cost: 70,
        priority: "low",
        image: "🎮", // Game controller emoji
        selected: false,
      },
      {
        id: "8",
        name: "Charity Donation",
        cost: 30,
        priority: "medium",
        image: "🤲", // Hands emoji
        selected: false,
      },
    ],
  },
]

export function GameProvider({ children }: { children: ReactNode }) {
  const [currentLevel, setCurrentLevel] = useState(0)
  const [items, setItems] = useState<Item[]>(levels[0].items)
  const [budget, setBudget] = useState(levels[0].budget)
  const [remainingBudget, setRemainingBudget] = useState(levels[0].budget)
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing")
  const [stars, setStars] = useState(0)

  const selectedItems = items.filter((item) => item.selected)

  const selectItem = (id: string) => {
    if (gameState !== "playing") return

    const item = items.find((item) => item.id === id)
    if (!item) return

    if (item.cost > remainingBudget) return

    const updatedItems = items.map((item) => (item.id === id ? { ...item, selected: true } : item))

    setItems(updatedItems)
    setRemainingBudget((prev) => prev - item.cost)
  }

  const unselectItem = (id: string) => {
    if (gameState !== "playing") return

    const item = items.find((item) => item.id === id)
    if (!item || !item.selected) return

    const updatedItems = items.map((item) => (item.id === id ? { ...item, selected: false } : item))

    setItems(updatedItems)
    setRemainingBudget((prev) => prev + item.cost)
  }

  const checkResults = () => {
    // Count high priority items
    const highPriorityItems = items.filter((item) => item.priority === "high")
    const selectedHighPriorityItems = highPriorityItems.filter((item) => item.selected)

    // Win condition: All high priority items are selected
    if (selectedHighPriorityItems.length === highPriorityItems.length) {
      setGameState("won")
      setStars((prev) => prev + 3)
    } else {
      setGameState("lost")
    }
  }

  const resetLevel = () => {
    setItems(levels[currentLevel].items)
    setBudget(levels[currentLevel].budget)
    setRemainingBudget(levels[currentLevel].budget)
    setGameState("playing")
  }

  const nextLevel = () => {
    if (currentLevel < levels.length - 1) {
      const nextLevelIndex = currentLevel + 1
      setCurrentLevel(nextLevelIndex)
      setItems(levels[nextLevelIndex].items)
      setBudget(levels[nextLevelIndex].budget)
      setRemainingBudget(levels[nextLevelIndex].budget)
      setGameState("playing")
    }
  }

  return (
    <GameContext.Provider
      value={{
        currentLevel: levels[currentLevel].id,
        budget,
        remainingBudget,
        items,
        selectedItems,
        gameState,
        stars,
        selectItem,
        unselectItem,
        checkResults,
        resetLevel,
        nextLevel,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider")
  }
  return context
}
