"use client";

import { useState } from "react";

interface QuizScreenProps {
  onComplete: (score: number, total: number) => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  tip: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "ما هي الشركات التي تعتمد على الاعتبار الشخصي بين الشركاء؟",
    options: ["شركات الأموال", "شركات الأشخاص", "الشركات المساهمة", "الشركات الحكومية"],
    correctAnswer: 1,
    explanation: "الإجابة الصحيحة هي شركات الأشخاص لأنها تعتمد على الاعتبار الشخصي مثل الثقة والخبرة والسمعة بين الشركاء، بينما شركات الأموال تعتمد على رأس المال فقط.",
    tip: "تذكر: الأشخاص = الثقة الشخصية!"
  },
  {
    id: 2,
    question: "في شركة التضامن، مسؤولية الشركاء عن ديون الشركة تكون:",
    options: ["محدودة بقدر حصتهم", "كاملة وغير محدودة", "اختيارية", "معدومة"],
    correctAnswer: 1,
    explanation: "في شركة التضامن، جميع الشركاء مسؤولون مسؤولية كاملة وغير محدودة عن ديون الشركة. هذا يعني أنه يمكن للدائنين مطالبة أي شريك بكامل الدين.",
    tip: "التضامن = تضامن في المسؤولية الكاملة!"
  },
  {
    id: 3,
    question: "هل الشريك الموصي في شركة التوصية البسيطة يعتبر تاجر؟",
    options: ["نعم", "لا", "أحياناً", "حسب رأس المال"],
    correctAnswer: 1,
    explanation: "الشريك الموصي لا يعتبر تاجر لأن مسؤوليته محدودة بقدر حصته فقط ولا يشارك في الإدارة. فقط الشريك المتضامن يعتبر تاجراً.",
    tip: "الموصي = مسؤولية محدودة = ليس تاجر!"
  },
  {
    id: 4,
    question: "من يدير شركة التوصية البسيطة؟",
    options: ["الشركاء الموصون فقط", "الشركاء المتضامنون فقط", "جميع الشركاء", "مدير خارجي"],
    correctAnswer: 1,
    explanation: "في شركة التوصية البسيطة، الشركاء المتضامنون فقط هم من يديرون الشركة. الشركاء الموصون ممنوعون من الإدارة وإلا تحولت مسؤوليتهم إلى غير محدودة.",
    tip: "المتضامن يدير، الموصي يستثمر فقط!"
  },
  {
    id: 5,
    question: "مسؤولية الشريك الموصي تكون:",
    options: ["غير محدودة", "محدودة بقدر حصته", "تضامنية", "شخصية كاملة"],
    correctAnswer: 1,
    explanation: "مسؤولية الشريك الموصي محدودة بقدر حصته في رأس مال الشركة فقط. هذا هو الفرق الجوهري بينه وبين الشريك المتضامن.",
    tip: "الموصي = محدود، المتضامن = غير محدود!"
  },
  {
    id: 6,
    question: "في شركة التضامن، من يعتبر تاجر؟",
    options: ["الشريك الأكبر فقط", "لا أحد", "جميع الشركاء", "المدير فقط"],
    correctAnswer: 2,
    explanation: "في شركة التضامن، جميع الشركاء يعتبرون تجار لأنهم جميعاً مسؤولون مسؤولية كاملة ويشاركون في الإدارة.",
    tip: "التضامن = الكل تجار!"
  },
  {
    id: 7,
    question: "هل يمكن نقل الحصص في شركات الأشخاص بحرية؟",
    options: ["نعم، بحرية تامة", "لا، إلا بموافقة جميع الشركاء", "نعم، بموافقة الأغلبية", "لا يمكن نقلها أبداً"],
    correctAnswer: 1,
    explanation: "لا يمكن نقل الحصص في شركات الأشخاص إلا بموافقة جميع الشركاء لأنها تعتمد على الاعتبار الشخصي والثقة المتبادلة.",
    tip: "الاعتبار الشخصي = موافقة الجميع!"
  },
  {
    id: 8,
    question: "ما الفرق الرئيسي بين الشريك المتضامن والشريك الموصي؟",
    options: [
      "لا يوجد فرق",
      "المتضامن مسؤوليته محدودة والموصي غير محدودة",
      "المتضامن مسؤوليته غير محدودة والموصي محدودة",
      "كلاهما مسؤوليته محدودة"
    ],
    correctAnswer: 2,
    explanation: "الفرق الجوهري: الشريك المتضامن مسؤوليته كاملة وغير محدودة ويدير الشركة ويعتبر تاجر، بينما الشريك الموصي مسؤوليته محدودة بحصته ولا يدير ولا يعتبر تاجر.",
    tip: "متضامن = غير محدود + إدارة، موصي = محدود + لا إدارة!"
  },
  {
    id: 9,
    question: "من يحق له المشاركة في إدارة شركة التضامن؟",
    options: ["المستثمرون الخارجيون", "الشريك الأكبر فقط", "جميع الشركاء", "مجلس الإدارة فقط"],
    correctAnswer: 2,
    explanation: "في شركة التضامن، جميع الشركاء يحق لهم المشاركة في إدارة الشركة لأنهم جميعاً متضامنون في المسؤولية.",
    tip: "التضامن في المسؤولية = التضامن في الإدارة!"
  },
  {
    id: 10,
    question: "شركة التوصية البسيطة تتكون من:",
    options: [
      "شركاء متضامنون فقط",
      "شركاء موصون فقط",
      "شركاء متضامنون وشركاء موصون",
      "مساهمون فقط"
    ],
    correctAnswer: 2,
    explanation: "شركة التوصية البسيطة تتكون من نوعين: شركاء متضامنون (مسؤولية كاملة ويديرون) وشركاء موصون (مسؤولية محدودة ولا يديرون).",
    tip: "التوصية = خليط من المتضامنين والموصين!"
  }
];

export default function QuizScreen({ onComplete }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 10);
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsCorrect(false);
    } else {
      onComplete(score + (isCorrect ? 0 : 0), questions.length);
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen law-pattern p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-amber-50 rounded-2xl shadow-lg p-4 mb-6 border-4 border-red-900">
          <div className="flex justify-between items-center mb-3">
            <span className="text-red-900 font-medium flex items-center gap-2">
              <span className="text-amber-600">&#9878;</span>
              السؤال {currentQuestion + 1} من {questions.length}
            </span>
            <span className="bg-red-900 text-amber-300 px-4 py-1 rounded-full font-bold">
              النقاط: {score}
            </span>
          </div>
          <div className="w-full bg-red-100 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-red-700 to-red-900 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-amber-50 rounded-2xl shadow-xl p-6 mb-6 border-4 border-red-900 relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-900 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-red-900 rounded-tr-xl"></div>
          
          <h2 className="text-xl font-bold text-red-900 mb-6 leading-relaxed">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              let buttonClass = "w-full p-4 rounded-xl border-2 text-right transition-all ";
              
              if (showExplanation) {
                if (index === question.correctAnswer) {
                  buttonClass += "bg-green-100 border-green-500 text-green-800";
                } else if (index === selectedAnswer && !isCorrect) {
                  buttonClass += "bg-red-100 border-red-500 text-red-800";
                } else {
                  buttonClass += "bg-gray-50 border-gray-200 text-gray-500";
                }
              } else {
                buttonClass += "bg-red-50 border-red-200 hover:bg-amber-50 hover:border-amber-400 text-red-900";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={showExplanation}
                >
                  <span className="font-medium">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`mt-6 p-4 rounded-xl ${isCorrect ? "bg-green-50 border-2 border-green-300" : "bg-red-50 border-2 border-red-300"}`}>
              <p className={`font-bold mb-2 text-lg ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                {isCorrect ? "🏆🎉 إجابة صحيحة! +10 نقاط" : "😢 إجابة خاطئة"}
              </p>
              <p className="text-gray-700 mb-3">{question.explanation}</p>
              <div className="bg-amber-100 rounded-lg p-3 border border-amber-300">
                <p className="text-amber-800 font-bold text-sm">
                  نصيحة: {question.tip}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Next Button */}
        {showExplanation && (
          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              className="bg-red-900 hover:bg-red-800 text-amber-50 font-bold py-3 px-8 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
            >
              {currentQuestion < questions.length - 1 ? "السؤال التالي" : "عرض النتيجة"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
