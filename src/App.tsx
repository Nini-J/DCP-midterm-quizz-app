import React from 'react';
import { QuizProvider } from './context/QuizContext';
import QuizApp from './components/QuizApp';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <QuizProvider>
        <QuizApp />
      </QuizProvider>
    </div>
  );
}

export default App;