"use client";

import { useState } from "react";

interface LearningScreenProps {
  onStartQuiz: () => void;
}

export default function LearningScreen({ onStartQuiz }: LearningScreenProps) {
  const [activeTab, setActiveTab] = useState<"intro" | "tadamun" | "tawsiya" | "comparison">("intro");

  return (
    <div className="min-h-screen law-pattern p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 bg-amber-50 rounded-2xl p-6 border-4 border-red-900 shadow-xl">
          <div className="text-4xl text-red-900 mb-2">&#9878;</div>
          <h1 className="text-3xl font-bold text-red-900 mb-2">
            شركات الأشخاص في النظام التجاري السعودي
          </h1>
          <p className="text-amber-700 font-semibold">اضغط على الأقسام للتعرف على المحتوى القانوني</p>
          <div className="mt-3 bg-red-50 rounded-lg p-2 inline-block">
            <p className="text-red-800 font-bold text-sm">استعد جيداً للاختبار واحصل على أعلى الجوائز!</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab("intro")}
            className={`px-4 py-2 rounded-lg font-medium transition-all border-2 ${
              activeTab === "intro"
                ? "bg-red-900 text-amber-300 border-amber-400"
                : "bg-white text-red-900 border-red-200 hover:border-amber-400"
            }`}
          >
            مقدمة
          </button>
          <button
            onClick={() => setActiveTab("tadamun")}
            className={`px-4 py-2 rounded-lg font-medium transition-all border-2 ${
              activeTab === "tadamun"
                ? "bg-red-900 text-amber-300 border-amber-400"
                : "bg-white text-red-900 border-red-200 hover:border-amber-400"
            }`}
          >
            شركة التضامن
          </button>
          <button
            onClick={() => setActiveTab("tawsiya")}
            className={`px-4 py-2 rounded-lg font-medium transition-all border-2 ${
              activeTab === "tawsiya"
                ? "bg-red-900 text-amber-300 border-amber-400"
                : "bg-white text-red-900 border-red-200 hover:border-amber-400"
            }`}
          >
            شركة التوصية البسيطة
          </button>
          <button
            onClick={() => setActiveTab("comparison")}
            className={`px-4 py-2 rounded-lg font-medium transition-all border-2 ${
              activeTab === "comparison"
                ? "bg-red-900 text-amber-300 border-amber-400"
                : "bg-white text-red-900 border-red-200 hover:border-amber-400"
            }`}
          >
            مقارنة
          </button>
        </div>

        {/* Content */}
        <div className="bg-amber-50 rounded-2xl shadow-xl p-6 mb-8 border-4 border-red-900 relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-red-900 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-red-900 rounded-tr-xl"></div>
          
          {activeTab === "intro" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-amber-600">&#9878;</span>
                ما هي شركات الأشخاص؟
              </h2>
              <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                <p className="text-red-900 leading-relaxed mb-3">
                  شركات الأشخاص هي شركات تعتمد على <span className="font-bold text-amber-700">الاعتبار الشخصي</span> بين الشركاء.
                </p>
                <ul className="space-y-3 text-red-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">&#9679;</span>
                    <span>تعتمد على <span className="font-bold">الثقة</span> بين الشركاء</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">&#9679;</span>
                    <span><span className="font-bold">الشخصية والخبرة</span> لها دور أساسي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">&#9679;</span>
                    <span>لا يمكن نقل الحصص إلا <span className="font-bold">بموافقة جميع الشركاء</span></span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-300">
                <p className="text-red-900 font-medium">
                  أنواع شركات الأشخاص في النظام السعودي:
                </p>
                <div className="flex gap-4 mt-3">
                  <span className="bg-red-900 text-amber-300 px-3 py-1 rounded-lg font-medium">شركة التضامن</span>
                  <span className="bg-red-900 text-amber-300 px-3 py-1 rounded-lg font-medium">شركة التوصية البسيطة</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tadamun" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-amber-600">&#9878;</span>
                شركة التضامن
              </h2>
              <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                <ul className="space-y-4 text-red-800">
                  <li className="flex items-start gap-3">
                    <div className="bg-red-900 text-amber-300 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <p className="font-bold text-red-900">المسؤولية</p>
                      <p>جميع الشركاء مسؤولون مسؤولية <span className="font-bold text-red-600">كاملة وغير محدودة</span> عن ديون الشركة</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-900 text-amber-300 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <p className="font-bold text-red-900">صفة التاجر</p>
                      <p>كل شريك يعتبر <span className="font-bold text-amber-700">تاجر</span></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-900 text-amber-300 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <p className="font-bold text-red-900">الإدارة</p>
                      <p><span className="font-bold">جميع الشركاء</span> يديرون الشركة</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-900 text-amber-300 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <p className="font-bold text-red-900">المسؤولية الشخصية</p>
                      <p>المسؤولية <span className="font-bold">شخصية وكاملة</span> عن جميع الالتزامات</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "tawsiya" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-amber-600">&#9878;</span>
                شركة التوصية البسيطة
              </h2>
              <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-300 mb-4">
                <p className="text-red-900 mb-3">تتكون من <span className="font-bold">نوعين</span> من الشركاء:</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-900 rounded-xl p-4 border-2 border-amber-400">
                  <h3 className="text-lg font-bold text-amber-300 mb-3">الشركاء المتضامنون</h3>
                  <ul className="space-y-2 text-red-100">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">&#9679;</span>
                      <span>مسؤوليتهم <span className="font-bold text-amber-300">كاملة وغير محدودة</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">&#9679;</span>
                      <span>يديرون الشركة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">&#9679;</span>
                      <span>يعتبرون <span className="font-bold text-amber-300">تجار</span></span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-4 border-2 border-red-400">
                  <h3 className="text-lg font-bold text-red-900 mb-3">الشركاء الموصون</h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">&#9679;</span>
                      <span>مسؤوليتهم <span className="font-bold text-amber-700">محدودة بقدر حصتهم</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">&#9679;</span>
                      <span><span className="font-bold">لا يشاركون</span> في الإدارة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">&#9679;</span>
                      <span><span className="font-bold">لا يعتبرون</span> تجار</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "comparison" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-amber-600">&#9878;</span>
                مقارنة بين النوعين
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-red-900">
                      <th className="border-2 border-amber-400 p-3 text-amber-300">العنصر</th>
                      <th className="border-2 border-amber-400 p-3 text-amber-300">شركة التضامن</th>
                      <th className="border-2 border-amber-400 p-3 text-amber-300">شركة التوصية البسيطة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border-2 border-red-300 p-3 font-medium bg-red-50">المسؤولية</td>
                      <td className="border-2 border-red-300 p-3">غير محدودة لجميع الشركاء</td>
                      <td className="border-2 border-red-300 p-3">متضامن: غير محدودة<br/>موصي: محدودة</td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="border-2 border-red-300 p-3 font-medium bg-red-50">صفة التاجر</td>
                      <td className="border-2 border-red-300 p-3">جميع الشركاء تجار</td>
                      <td className="border-2 border-red-300 p-3">المتضامن فقط تاجر</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border-2 border-red-300 p-3 font-medium bg-red-50">الإدارة</td>
                      <td className="border-2 border-red-300 p-3">جميع الشركاء</td>
                      <td className="border-2 border-red-300 p-3">الشركاء المتضامنون فقط</td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="border-2 border-red-300 p-3 font-medium bg-red-50">انتقال الحصص</td>
                      <td className="border-2 border-red-300 p-3">بموافقة الجميع</td>
                      <td className="border-2 border-red-300 p-3">بموافقة الجميع</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Start Quiz Button */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-4 mb-4 inline-block border-2 border-red-900">
            <p className="text-red-900 font-bold">هل أنت جاهز للتحدي؟ اختبر معلوماتك الآن!</p>
          </div>
          <div>
            <button
              onClick={onStartQuiz}
              className="bg-red-900 hover:bg-red-800 text-amber-50 font-bold py-4 px-12 rounded-xl text-xl transition-all hover:scale-105 shadow-lg"
            >
              ابدأ الاختبار
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
