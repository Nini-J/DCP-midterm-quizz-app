import React from 'react';
import { useQuiz } from '../context/QuizContext';
import QuestionCard from './QuestionCard';
import Navigation from './Navigation';
import ResultsView from './ResultsView';
import ProgressBar from './ProgressBar';
import { BookOpen } from 'lucide-react';

const QuizApp: React.FC = () => {
  const { isQuizComplete, progress } = useQuiz();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <BookOpen className="w-8 h-8 text-blue-800" />
          <h1 className="text-3xl font-bold text-blue-800">DistributeQuiz</h1>
        </div>
        <p className="text-gray-600">Test your knowledge of distributed computing concepts</p>
      </header>

      <ProgressBar progress={progress} />
      
      <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
        {isQuizComplete ? <ResultsView /> : <QuestionCard />}
      </div>
      
      {!isQuizComplete && <Navigation />}
    </div>
  );
};

export default QuizApp;