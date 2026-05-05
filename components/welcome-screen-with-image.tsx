"use client"
import Image from "next/image"

interface WelcomeScreenProps {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  // This is an alternative implementation that uses an actual image
  // To use this, you need to:
  // 1. Rename this file to welcome-screen.tsx (replacing the current one)
  // 2. Add the actual logo image to public/images/pnu-logo.png

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 to-blue-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative w-64 h-64">
            <Image
              src="/images/pnu-logo.png"
              alt="Princess Norah University Logo"
              width={256}
              height={256}
              className="object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Welcome to My Financial Priorities
          <span className="animate-bounce-slow inline-block ml-2">💰</span>
        </h1>

        <h2 className="text-2xl font-semibold text-blue-500 mb-8">Smart Wallet</h2>

        <p className="text-lg text-gray-600 mb-8">
          Learn how to make smart financial decisions by prioritizing your needs over wants! This fun game will teach
          you how to manage your money wisely.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-purple-600">Game Features:</h3>
          <ul className="text-left space-y-2 mb-8">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>5 exciting levels with increasing challenges
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Learn to budget and prioritize spending
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Make smart choices between needs and wants
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Earn stars and rewards for good decisions
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onStart}
            className="py-4 px-8 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg text-xl transition-transform hover:scale-105 animate-pulse"
          >
            Start Playing!
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-500">Developed in collaboration with Princess Norah University</p>
      </div>
    </div>
  )
}
