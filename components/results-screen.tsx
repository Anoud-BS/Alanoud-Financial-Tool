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
    <div className="min-h-screen law-pattern flex items-center justify-center p-6 relative overflow-hidden">
      {/* Celebration Elements for High Score */}
      {isExcellent && (
        <>
          <div className="absolute top-10 right-10 text-4xl animate-bounce">&#9878;</div>
          <div className="absolute top-20 left-10 text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>&#9733;</div>
          <div className="absolute bottom-20 right-20 text-4xl animate-bounce" style={{ animationDelay: "0.4s" }}>&#9878;</div>
          <div className="absolute bottom-10 left-20 text-4xl animate-bounce" style={{ animationDelay: "0.6s" }}>&#9733;</div>
        </>
      )}

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border-4 border-amber-400 relative">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-slate-700 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-slate-700 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-slate-700 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-slate-700 rounded-br-3xl"></div>

        {/* Result Icon */}
        <div className="text-8xl mb-6">
          {isExcellent ? (
            <span className="text-amber-600">&#9878;</span>
          ) : (
            <span className="text-slate-600">&#128214;</span>
          )}
        </div>

        {/* Result Title */}
        <h1 className={`text-3xl font-bold mb-4 ${isExcellent ? "text-amber-600" : "text-slate-600"}`}>
          {isExcellent ? "ممتاز!" : "حاول مرة أخرى"}
        </h1>

        {/* Score Display */}
        <div className="bg-slate-800 rounded-2xl p-6 mb-6 border-2 border-amber-400">
          <p className="text-amber-200 mb-2">نتيجتك</p>
          <p className="text-5xl font-bold text-amber-400 mb-2">
            {score} <span className="text-2xl text-amber-200">/ {maxScore}</span>
          </p>
          <p className="text-amber-200">
            {percentage.toFixed(0)}% من الإجابات صحيحة
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-4 mb-6">
          <div
            className={`h-4 rounded-full transition-all duration-500 ${isExcellent ? "bg-gradient-to-r from-amber-500 to-amber-600" : "bg-slate-500"}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* Message */}
        <p className="text-slate-600 mb-8">
          {isExcellent
            ? "أحسنت! لقد أتقنت معلومات شركات الأشخاص في النظام التجاري السعودي."
            : "لا بأس! راجع المحتوى التعليمي وحاول مرة أخرى لتحسين نتيجتك."}
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 border-2 border-amber-300"
          >
            إعادة الاختبار
          </button>
          <button
            onClick={onRestart}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl transition-all border-2 border-slate-300"
          >
            العودة للبداية
          </button>
        </div>
      </div>
    </div>
  );
}
