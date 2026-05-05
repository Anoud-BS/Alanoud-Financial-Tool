"use client";

interface WelcomeScreenProps {
  onStartLearning: () => void;
}

export default function WelcomeScreen({ onStartLearning }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* PNU Cloud */}
      <div className="absolute top-4 right-4 z-20">
        <div className="relative bg-sky-200 border border-sky-300 rounded-full px-5 py-3 shadow-lg">
          {/* Cloud bumps */}
          <div className="absolute -top-2 right-4 w-6 h-6 bg-sky-200 rounded-full border border-sky-300"></div>
          <div className="absolute -top-1 right-10 w-4 h-4 bg-sky-200 rounded-full border border-sky-300"></div>
          <div className="absolute -top-1 left-4 w-4 h-4 bg-sky-200 rounded-full border border-sky-300"></div>
          
          <div className="relative z-10 text-center">
            <p className="text-xs font-bold text-sky-800">Princess Norah University</p>
            <p className="text-xs font-bold text-sky-800">جامعة الأميرة نورة</p>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center border border-gray-100">
        {/* Main Icon */}
        <div className="text-8xl mb-6 animate-bounce">
          <span>⚖️</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          شركات الأشخاص
        </h1>
        <h2 className="text-xl text-sky-600 font-semibold mb-4">
          في النظام التجاري السعودي
        </h2>

        {/* Description */}
        <div className="bg-sky-50 rounded-xl p-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            تعرّف على أنواع شركات الأشخاص في النظام التجاري السعودي واختبر معلوماتك
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
            <p className="text-blue-700 font-medium text-sm">محتوى تعليمي</p>
          </div>
          <div className="bg-green-50 rounded-xl p-3 border border-green-100">
            <p className="text-green-700 font-medium text-sm">اختبار تفاعلي</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
            <p className="text-amber-700 font-medium text-sm">10 أسئلة</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
            <p className="text-purple-700 font-medium text-sm">نتيجة فورية</p>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStartLearning}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all hover:scale-105 shadow-lg"
        >
          ابدأ التعلم
        </button>


      </div>
    </div>
  );
}
