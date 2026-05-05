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
}

const questions: Question[] = [
  {
    id: 1,
    question: "ما هي الشركات التي تعتمد على الاعتبار الشخصي بين الشركاء؟",
    options: ["شركات الأموال", "شركات الأشخاص", "الشركات المساهمة", "الشركات الحكومية"],
    correctAnswer: 1,
    explanation: "شركات الأشخاص تعتمد على الاعتبار الشخصي مثل الثقة والخبرة والسمعة بين الشركاء."
  },
  {
    id: 2,
    question: "في شركة التضامن، مسؤولية الشركاء عن ديون الشركة تكون:",
    options: ["محدودة بقدر حصتهم", "كاملة وغير محدودة", "اختيارية", "معدومة"],
    correctAnswer: 1,
    explanation: "في شركة التضامن، جميع الشركاء مسؤولون مسؤولية كاملة وغير محدودة عن ديون الشركة."
  },
  {
    id: 3,
    question: "هل الشريك الموصي في شركة التوصية البسيطة يعتبر تاجر؟",
    options: ["نعم", "لا", "أحياناً", "حسب رأس المال"],
    correctAnswer: 1,
    explanation: "الشريك الموصي لا يعتبر تاجر لأن مسؤوليته محدودة ولا يشارك في الإدارة."
  },
  {
    id: 4,
    question: "من يدير شركة التوصية البسيطة؟",
    options: ["الشركاء الموصون فقط", "الشركاء المتضامنون فقط", "جميع الشركاء", "مدير خارجي"],
    correctAnswer: 1,
    explanation: "في شركة التوصية البسيطة، الشركاء المتضامنون فقط هم من يديرون الشركة، أما الموصون فلا يشاركون في الإدارة."
  },
  {
    id: 5,
    question: "مسؤولية الشريك الموصي تكون:",
    options: ["غير محدودة", "محدودة بقدر حصته", "تضامنية", "شخصية كاملة"],
    correctAnswer: 1,
    explanation: "مسؤولية الشريك الموصي محدودة بقدر حصته في رأس مال الشركة فقط."
  },
  {
    id: 6,
    question: "في شركة التضامن، من يعتبر تاجر؟",
    options: ["الشريك الأكبر فقط", "لا أحد", "جميع الشركاء", "المدير فقط"],
    correctAnswer: 2,
    explanation: "في شركة التضامن، جميع الشركاء يعتبرون تجار لأنهم جميعاً مسؤولون مسؤولية كاملة."
  },
  {
    id: 7,
    question: "هل يمكن نقل الحصص في شركات الأشخاص بحرية؟",
    options: ["نعم، بحرية تامة", "لا، إلا بموافقة جميع الشركاء", "نعم، بموافقة الأغلبية", "لا يمكن نقلها أبداً"],
    correctAnswer: 1,
    explanation: "لا يمكن نقل الحصص في شركات الأشخاص إلا بموافقة جميع الشركاء لأنها تعتمد على الاعتبار الشخصي."
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
    explanation: "الشريك المتضامن مسؤوليته كاملة وغير محدودة، بينما الشريك الموصي مسؤوليته محدودة بقدر حصته."
  },
  {
    id: 9,
    question: "من يحق له المشاركة في إدارة شركة التضامن؟",
    options: ["المستثمرون الخارجيون", "الشريك الأكبر فقط", "جميع الشركاء", "مجلس الإدارة فقط"],
    correctAnswer: 2,
    explanation: "في شركة التضامن، جميع الشركاء يحق لهم المشاركة في إدارة الشركة."
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
    explanation: "شركة التوصية البسيطة تتكون من نوعين: شركاء متضامنون (مسؤولية كاملة) وشركاء موصون (مسؤولية محدودة)."
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
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 font-medium">
              السؤال {currentQuestion + 1} من {questions.length}
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-bold">
              النقاط: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-sky-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 leading-relaxed">
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
                buttonClass += "bg-gray-50 border-gray-200 hover:bg-sky-50 hover:border-sky-300 text-gray-700";
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
            <div className={`mt-6 p-4 rounded-xl ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
              <p className={`font-bold mb-2 ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                {isCorrect ? "إجابة صحيحة! +10 نقاط" : "إجابة خاطئة"}
              </p>
              <p className="text-gray-700">{question.explanation}</p>
            </div>
          )}
        </div>

        {/* Next Button */}
        {showExplanation && (
          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
            >
              {currentQuestion < questions.length - 1 ? "السؤال التالي" : "عرض النتيجة"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
