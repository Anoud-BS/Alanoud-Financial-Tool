"use client";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onRetry: () => void;
}

export default function ResultsScreen({ score, totalQuestions, onRestart, onRetry }: ResultsScreenProps) {
  const maxScore = totalQuestions * 10;
  const percentage = (score / maxScore) * 100;
  const isExcellent = percentage >= 70;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Celebration Elements for High Score */}
      {isExcellent && (
        <>
          <div className="absolute top-10 right-10 text-4xl animate-bounce">🎉</div>
          <div className="absolute top-20 left-10 text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>🎊</div>
          <div className="absolute bottom-20 right-20 text-4xl animate-bounce" style={{ animationDelay: "0.4s" }}>🏆</div>
          <div className="absolute bottom-10 left-20 text-4xl animate-bounce" style={{ animationDelay: "0.6s" }}>🎉</div>
        </>
      )}

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
        {/* Result Icon */}
        <div className="text-8xl mb-6">
          {isExcellent ? "🏆" : "📚"}
        </div>

        {/* Result Title */}
        <h1 className={`text-3xl font-bold mb-4 ${isExcellent ? "text-green-600" : "text-amber-600"}`}>
          {isExcellent ? "ممتاز!" : "حاول مرة أخرى"}
        </h1>

        {/* Score Display */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <p className="text-gray-600 mb-2">نتيجتك</p>
          <p className="text-5xl font-bold text-sky-600 mb-2">
            {score} <span className="text-2xl text-gray-400">/ {maxScore}</span>
          </p>
          <p className="text-gray-500">
            {percentage.toFixed(0)}% من الإجابات صحيحة
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div
            className={`h-4 rounded-full transition-all duration-500 ${isExcellent ? "bg-green-500" : "bg-amber-500"}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* Message */}
        <p className="text-gray-600 mb-8">
          {isExcellent
            ? "أحسنت! لقد أتقنت معلومات شركات الأشخاص في النظام التجاري السعودي."
            : "لا بأس! راجع المحتوى التعليمي وحاول مرة أخرى لتحسين نتيجتك."}
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105"
          >
            إعادة الاختبار
          </button>
          <button
            onClick={onRestart}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-all"
          >
            العودة للبداية
          </button>
        </div>
      </div>
    </div>
  );
}
