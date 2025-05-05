import React, { useState, useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

const AnswerInput: React.FC = () => {
  const { currentQuestionIndex, userAnswers, setAnswer } = useQuiz();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(userAnswers[currentQuestionIndex] || '');
  }, [currentQuestionIndex, userAnswers]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    setAnswer(e.target.value);
  };

  return (
    <div className="mt-4">
      <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
        Your Answer
      </label>
      <textarea
        id="answer"
        rows={5}
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Type your answer here..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default AnswerInput;