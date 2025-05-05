import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { CheckCircle, XCircle, RefreshCw, Eye } from 'lucide-react';

const ResultsView: React.FC = () => {
  const { results, totalQuestions, restartQuiz, questions, userAnswers } = useQuiz();
  const [showDetails, setShowDetails] = useState(false);
  
  if (!questions || !results || !userAnswers) {
    return <div>Loading...</div>;
  }

  const correctAnswers = results.filter(result => result).length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Quiz Results</h2>
      
      <div className="text-center mb-8">
        <p className={`text-5xl font-bold mb-2 transition-colors duration-300 ease-in-out ${getScoreColor()}`}>
          {score}%
        </p>
        <p className="text-gray-600">
          You answered {correctAnswers} out of {totalQuestions} questions correctly
        </p>
      </div>
      
      <div className="flex justify-center gap-4 mb-8">
        <button 
          onClick={restartQuiz}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RefreshCw size={16} />
          Restart Quiz
        </button>
        
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Eye size={16} />
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      
      {showDetails && (
        <div className="mt-6 border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Detailed Results</h3>
          
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div 
                key={question.id} 
                className={`p-4 rounded-lg ${
                  results[index] ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'
                }`}
              >
                <div className="flex items-start gap-2">
                  {results[index] ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium text-gray-800">{question.question}</p>
                    <p className="text-sm text-gray-600 mt-2">Your answer:</p>
                    <p className="text-sm mt-1 px-3 py-2 bg-white rounded border">
                      {userAnswers[index] || '(No answer provided)'}
                    </p>
                    
                    <div className="mt-3">
                      <p className="text-sm text-gray-600">Key concepts to include:</p>
                      <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                        {question.keywords.map((keyword, idx) => (
                          <li 
                            key={idx}
                            className={userAnswers[index]?.toLowerCase().includes(keyword.toLowerCase()) 
                              ? 'text-green-600' 
                              : 'text-gray-800'
                            }
                          >
                            {keyword}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsView;