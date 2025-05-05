import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const Navigation: React.FC = () => {
  const { 
    goToPreviousQuestion, 
    goToNextQuestion, 
    submitQuiz, 
    currentQuestionIndex, 
    totalQuestions,
    userAnswers
  } = useQuiz();

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isAllQuestionsAnswered = userAnswers.every(answer => answer.trim() !== '');
  const canSubmit = isLastQuestion && userAnswers[currentQuestionIndex].trim() !== '';

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={goToPreviousQuestion}
        disabled={currentQuestionIndex === 0}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
          currentQuestionIndex === 0
            ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
            : 'text-gray-700 bg-gray-200 hover:bg-gray-300'
        }`}
      >
        <ArrowLeft size={16} />
        Previous
      </button>

      <div className="flex gap-3">
        {isLastQuestion ? (
          <button
            onClick={submitQuiz}
            disabled={!canSubmit}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium ${
              canSubmit
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-purple-300 text-white cursor-not-allowed'
            }`}
          >
            <Check size={16} />
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={goToNextQuestion}
            disabled={userAnswers[currentQuestionIndex].trim() === ''}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
              userAnswers[currentQuestionIndex].trim() === ''
                ? 'bg-blue-300 text-white cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;