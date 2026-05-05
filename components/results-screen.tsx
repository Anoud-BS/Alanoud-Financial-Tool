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

  const getReward = () => {
    if (percentage === 100) return { title: "الجائزة الذهبية", color: "text-amber-500", icon: "&#9733;" };
    if (percentage >= 80) return { title: "الجائزة الفضية", color: "text-gray-400", icon: "&#9733;" };
    if (percentage >= 60) return { title: "الجائزة البرونزية", color: "text-amber-700", icon: "&#9733;" };
    return null;
  };

  const reward = getReward();

  return (
    <div className="min-h-screen law-pattern flex items-center justify-center p-6 relative overflow-hidden">
      {/* Celebration Elements for High Score */}
      {isExcellent && (
        <>
          <div className="absolute top-10 right-10 text-4xl animate-bounce text-amber-400">&#9733;</div>
          <div className="absolute top-20 left-10 text-4xl animate-bounce text-amber-400" style={{ animationDelay: "0.2s" }}>&#9878;</div>
          <div className="absolute bottom-20 right-20 text-4xl animate-bounce text-amber-400" style={{ animationDelay: "0.4s" }}>&#9733;</div>
          <div className="absolute bottom-10 left-20 text-4xl animate-bounce text-amber-400" style={{ animationDelay: "0.6s" }}>&#9878;</div>
          <div className="absolute top-40 right-40 text-3xl animate-bounce text-amber-300" style={{ animationDelay: "0.3s" }}>&#9733;</div>
          <div className="absolute bottom-40 left-40 text-3xl animate-bounce text-amber-300" style={{ animationDelay: "0.5s" }}>&#9733;</div>
        </>
      )}

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border-4 border-amber-400 relative">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-red-900 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-900 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-red-900 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-red-900 rounded-br-3xl"></div>

        {/* Result Icon */}
        <div className="text-8xl mb-4">
          {isExcellent ? (
            <span className="text-amber-500">&#9878;</span>
          ) : (
            <span className="text-red-400">&#9878;</span>
          )}
        </div>

        {/* Reward Badge */}
        {reward && (
          <div className="mb-4">
            <div className={`inline-block bg-gradient-to-r from-amber-100 to-amber-200 rounded-full px-6 py-2 border-2 border-amber-400`}>
              <span className={`text-2xl ${reward.color}`}>{reward.icon}</span>
              <span className="text-red-900 font-bold mr-2">{reward.title}</span>
              <span className={`text-2xl ${reward.color}`}>{reward.icon}</span>
            </div>
          </div>
        )}

        {/* Result Title */}
        <h1 className={`text-3xl font-bold mb-4 ${isExcellent ? "text-red-900" : "text-red-600"}`}>
          {isExcellent ? "أحسنت!" : "حاول مرة أخرى"}
        </h1>

        {/* Score Display */}
        <div className="bg-red-900 rounded-2xl p-6 mb-6 border-2 border-amber-400">
          <p className="text-amber-200 mb-2">نتيجتك</p>
          <p className="text-5xl font-bold text-amber-400 mb-2">
            {score} <span className="text-2xl text-amber-200">/ {maxScore}</span>
          </p>
          <p className="text-amber-200">
            {percentage.toFixed(0)}% من الإجابات صحيحة
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-red-100 rounded-full h-4 mb-6">
          <div
            className={`h-4 rounded-full transition-all duration-500 ${isExcellent ? "bg-gradient-to-r from-amber-400 to-amber-600" : "bg-red-400"}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* Message */}
        <p className="text-red-800 mb-6">
          {isExcellent
            ? "لقد أتقنت معلومات شركات الأشخاص في النظام التجاري السعودي!"
            : "لا بأس! راجع المحتوى التعليمي وحاول مرة أخرى لتحسين نتيجتك."}
        </p>

        {/* Tips for improvement */}
        {!isExcellent && (
          <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-300 text-right">
            <p className="text-red-900 font-bold mb-2">نصائح للتحسين:</p>
            <ul className="text-red-800 text-sm space-y-1">
              <li>- راجع الفرق بين شركة التضامن والتوصية</li>
              <li>- ركز على مسؤولية كل نوع من الشركاء</li>
              <li>- تذكر من يحق له الإدارة في كل نوع</li>
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 border-2 border-amber-400"
          >
            إعادة الاختبار
          </button>
          <button
            onClick={onRestart}
            className="w-full bg-amber-100 hover:bg-amber-200 text-red-900 font-bold py-3 px-6 rounded-xl transition-all border-2 border-amber-300"
          >
            العودة للبداية
          </button>
        </div>
      </div>
    </div>
  );
}
