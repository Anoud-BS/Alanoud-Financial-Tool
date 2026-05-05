"use client"

import { useState } from "react"
import { GameProvider } from "@/components/game-context"
import GameScreen from "@/components/game-screen"
import WelcomeScreen from "@/components/welcome-screen"

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)

  const handleStartGame = () => {
    setGameStarted(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      {!gameStarted ? (
        <WelcomeScreen onStart={handleStartGame} />
      ) : (
        <GameProvider>
          <GameScreen />
        </GameProvider>
      )}
    </main>
  )
}
