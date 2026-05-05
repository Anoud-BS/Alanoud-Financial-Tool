"use client"

interface WelcomeScreenProps {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 text-7xl opacity-20 rotate-12">💵</div>
      <div className="absolute bottom-20 left-20 text-7xl opacity-20 -rotate-12">💰</div>
      <div className="absolute top-1/3 left-10 text-5xl opacity-20 rotate-45">💳</div>
      <div className="absolute bottom-1/3 right-10 text-5xl opacity-20 -rotate-45">💵</div>

      {/* Cloud-shaped container for PNU and BUS 151 - smaller size */}
      <div className="absolute top-4 left-4 z-20">
        <div className="float-cloud bg-blue-100 px-4 py-2 rounded-[30px] shadow-lg relative border border-blue-200 scale-75">
          {/* Cloud bumps - also light blue */}
          <div className="absolute w-8 h-8 bg-blue-100 border-t border-l border-blue-200 rounded-full -top-3 -left-2"></div>
          <div className="absolute w-7 h-7 bg-blue-100 border-t border-blue-200 rounded-full -top-2 left-5"></div>
          <div className="absolute w-9 h-9 bg-blue-100 border-t border-blue-200 rounded-full -top-3 left-11"></div>
          <div className="absolute w-7 h-7 bg-blue-100 border-t border-blue-200 rounded-full -top-2 right-4"></div>
          <div className="absolute w-8 h-8 bg-blue-100 border-t border-r border-blue-200 rounded-full -top-3 -right-2"></div>

          {/* Content inside cloud */}
          <div className="relative z-10 text-center">
            <div className="text-purple-700 font-bold text-sm">Princess Norah University</div>
            <div className="text-xs text-blue-700 font-medium mt-1">DICE (BUS 151)</div>
            <div className="text-xs text-purple-600 mt-1">جامعة الأميرة نورة بنت عبدالرحمن</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center relative z-10 border-2 border-purple-100">
        {/* Decorative corner elements */}
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center border-2 border-yellow-200">
          <span className="text-xl">💰</span>
        </div>
        <div className="absolute -top-3 -right-3 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-200">
          <span className="text-xl">💵</span>
        </div>
        <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200">
          <span className="text-xl">💵</span>
        </div>
        <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-200">
          <span className="text-xl">💳</span>
        </div>

        {/* Main content */}
        <div className="mb-6 flex justify-center">
          <div className="text-9xl relative emoji-float">
            <span className="drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">💰</span>
            <div className="absolute -top-4 -right-4 text-4xl animate-bounce-slow">✨</div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-purple-600 mb-2 drop-shadow-sm">Savvy Kid</h1>

        <h2 className="text-2xl font-semibold text-blue-500 mb-6">Smart Kid Wallet</h2>

        <p className="text-lg text-gray-600 mb-6 px-4 py-2 bg-blue-50 rounded-lg inline-block">
          A game to learn smart money choices and prioritize needs over wants!
        </p>

        {/* Features with improved styling */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-green-50 p-3 rounded-lg border border-green-100 shadow-sm hover:shadow transition-shadow">
            <span className="text-green-500 font-bold flex items-center justify-center">
              <span className="mr-1 text-sm">💼</span> Budget Skills
            </span>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-100 shadow-sm hover:shadow transition-shadow">
            <span className="text-purple-500 font-bold flex items-center justify-center">
              <span className="mr-1 text-sm">🧠</span> Decision Making
            </span>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 shadow-sm hover:shadow transition-shadow">
            <span className="text-blue-500 font-bold flex items-center justify-center">
              <span className="mr-1 text-sm">📊</span> Financial Literacy
            </span>
          </div>
        </div>

        {/* Simplified button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={onStart}
            className="py-4 px-8 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg text-xl transition-all hover:scale-105 shadow-md"
          >
            Start Playing!
          </button>
        </div>

        {/* Dr. Jamila's credit with improved styling */}
        <div className="py-3 bg-purple-100 rounded-lg border border-purple-200 shadow-inner">
          <p className="text-lg font-bold text-purple-800">Course Instructor: Dr. Jamila Algahtani</p>
        </div>
      </div>
    </div>
  )
}
