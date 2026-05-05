"use client";

interface WelcomeScreenProps {
  onStartLearning: () => void;
}

export default function WelcomeScreen({ onStartLearning }: WelcomeScreenProps) {
  const students = [
    "العنود السعدون",
    "لانا الشريان",
    "جنى آل وقيان",
    "نورة العتيبي",
    "رانيا الحسيني",
    "ربى العنزي"
  ];

  return (
    <div className="min-h-screen law-pattern flex flex-col items-center justify-center p-6 relative">
      {/* PNU Cloud */}
      <div className="absolute top-4 right-4 z-20">
        <div className="relative bg-amber-50 border-2 border-amber-200 rounded-full px-5 py-3 shadow-lg">
          <div className="absolute -top-2 right-4 w-6 h-6 bg-amber-50 rounded-full border-2 border-amber-200"></div>
          <div className="absolute -top-1 right-10 w-4 h-4 bg-amber-50 rounded-full border-2 border-amber-200"></div>
          <div className="absolute -top-1 left-4 w-4 h-4 bg-amber-50 rounded-full border-2 border-amber-200"></div>
          
          <div className="relative z-10 text-center">
            <p className="text-xs font-bold text-red-900">Princess Norah University</p>
            <p className="text-xs font-bold text-red-900">جامعة الأميرة نورة</p>
          </div>
        </div>
      </div>

      {/* Decorative Law Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 text-amber-100">&#9878;</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20 text-amber-100">&#9878;</div>

      {/* Main Card */}
      <div className="bg-amber-50 rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center border-4 border-red-900 relative overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-400 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-400 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-400 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-400 rounded-br-3xl"></div>

        {/* Law Icon */}
        <div className="text-8xl mb-4">
          <span className="text-red-900">&#9878;</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-red-900 mb-2">
          شركات الأشخاص
        </h1>
        <h2 className="text-xl text-red-800 font-semibold mb-4">
          في النظام التجاري السعودي
        </h2>

        {/* Motivational Text */}
        <div className="bg-red-900 rounded-xl p-4 mb-6">
          <p className="text-amber-50 leading-relaxed text-lg font-bold">
            هل أنت مستعد لتحدي معلوماتك القانونية؟
          </p>
          <p className="text-amber-100 text-sm mt-2">
            تعلّم واختبر نفسك واحصل على جوائز!
          </p>
        </div>

        {/* Student Names Section */}
        <div className="mb-6">
          <p className="text-red-900 font-bold mb-3">إعداد الطالبات:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {students.map((student, index) => (
              <span
                key={index}
                className="bg-white text-red-900 px-3 py-1 rounded-full text-sm font-medium border border-red-200"
              >
                {student}
              </span>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStartLearning}
          className="w-full bg-red-900 hover:bg-red-800 text-amber-50 font-bold py-4 px-8 rounded-xl text-xl transition-all hover:scale-105 shadow-lg"
        >
          ابدأ المغامرة!
        </button>
      </div>
    </div>
  );
}
