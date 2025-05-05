import React, { useState, useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import AnswerInput from './AnswerInput';

const QuestionCard: React.FC = () => {
  const { currentQuestion, currentQuestionIndex, totalQuestions } = useQuiz();
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  if (!currentQuestion) return null;

  return (
    <div 
      className={`p-6 transition-opacity duration-300 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mb-4 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-500">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
        <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
          {currentQuestion.category}: {currentQuestion.subcategory}
        </span>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {currentQuestion.question}
      </h2>

      <AnswerInput />
    </div>
  );
};

export default QuestionCard;