"use client";

interface WelcomeScreenProps {
  onStartLearning: () => void;
}

export default function WelcomeScreen({ onStartLearning }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen law-pattern flex flex-col items-center justify-center p-6 relative">
      {/* PNU Cloud */}
      <div className="absolute top-4 right-4 z-20">
        <div className="relative bg-amber-100 border-2 border-amber-300 rounded-full px-5 py-3 shadow-lg">
          {/* Cloud bumps */}
          <div className="absolute -top-2 right-4 w-6 h-6 bg-amber-100 rounded-full border-2 border-amber-300"></div>
          <div className="absolute -top-1 right-10 w-4 h-4 bg-amber-100 rounded-full border-2 border-amber-300"></div>
          <div className="absolute -top-1 left-4 w-4 h-4 bg-amber-100 rounded-full border-2 border-amber-300"></div>
          
          <div className="relative z-10 text-center">
            <p className="text-xs font-bold text-amber-900">Princess Norah University</p>
            <p className="text-xs font-bold text-amber-900">جامعة الأميرة نورة</p>
          </div>
        </div>
      </div>

      {/* Decorative Law Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20">&#9878;</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20">&#9878;</div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center border-4 border-amber-400 relative overflow-hidden">
        {/* Gold corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-500 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-500 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-500 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-500 rounded-br-3xl"></div>

        {/* Law Icon - Scale of Justice */}
        <div className="text-8xl mb-4">
          <span className="text-amber-600">&#9878;</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          شركات الأشخاص
        </h1>
        <h2 className="text-xl text-amber-700 font-semibold mb-4">
          في النظام التجاري السعودي
        </h2>

        {/* Description with law book styling */}
        <div className="bg-slate-800 rounded-xl p-4 mb-6 border-2 border-amber-400">
          <p className="text-amber-100 leading-relaxed">
            تعرّف على أنواع شركات الأشخاص في النظام التجاري السعودي واختبر معلوماتك القانونية
          </p>
        </div>

        {/* Features with law theme */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-slate-700 rounded-xl p-3 border border-amber-400">
            <p className="text-amber-300 font-medium text-sm">&#9878; محتوى قانوني</p>
          </div>
          <div className="bg-slate-700 rounded-xl p-3 border border-amber-400">
            <p className="text-amber-300 font-medium text-sm">&#9997; اختبار تفاعلي</p>
          </div>
          <div className="bg-slate-700 rounded-xl p-3 border border-amber-400">
            <p className="text-amber-300 font-medium text-sm">&#128214; 10 أسئلة</p>
          </div>
          <div className="bg-slate-700 rounded-xl p-3 border border-amber-400">
            <p className="text-amber-300 font-medium text-sm">&#128203; نتيجة فورية</p>
          </div>
        </div>

        {/* Start Button with law styling */}
        <button
          onClick={onStartLearning}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-4 px-8 rounded-xl text-xl transition-all hover:scale-105 shadow-lg border-2 border-amber-300"
        >
          ابدأ التعلم
        </button>
      </div>
    </div>
  );
}
