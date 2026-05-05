"use client";

import { useState } from "react";
import WelcomeScreen from "@/components/welcome-screen";
import LearningScreen from "@/components/learning-screen";
import QuizScreen from "@/components/quiz-screen";
import ResultsScreen from "@/components/results-screen";

export type GameScreen = "welcome" | "learning" | "quiz" | "results";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("welcome");
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleStartLearning = () => {
    setCurrentScreen("learning");
  };

  const handleStartQuiz = () => {
    setScore(0);
    setCurrentScreen("quiz");
  };

  const handleQuizComplete = (finalScore: number, total: number) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setCurrentScreen("results");
  };

  const handleRestart = () => {
    setScore(0);
    setTotalQuestions(0);
    setCurrentScreen("welcome");
  };

  const handleRetryQuiz = () => {
    setScore(0);
    setCurrentScreen("quiz");
  };

  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-indigo-100">
      {currentScreen === "welcome" && (
        <WelcomeScreen onStartLearning={handleStartLearning} />
      )}
      {currentScreen === "learning" && (
        <LearningScreen onStartQuiz={handleStartQuiz} />
      )}
      {currentScreen === "quiz" && (
        <QuizScreen onComplete={handleQuizComplete} />
      )}
      {currentScreen === "results" && (
        <ResultsScreen
          score={score}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
          onRetry={handleRetryQuiz}
        />
      )}
    </main>
  );
}
