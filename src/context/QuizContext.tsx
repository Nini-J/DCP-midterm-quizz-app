import React, { createContext, useContext, useState } from 'react';
import { questions } from '../data/questions';
import { checkAnswer } from '../utils/answerChecker';

type QuizContextType = {
  currentQuestionIndex: number;
  userAnswers: string[];
  results: boolean[];
  isQuizComplete: boolean;
  totalQuestions: number;
  currentQuestion: Question | null;
  progress: number;
  questions: Question[];
  setAnswer: (answer: string) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  submitQuiz: () => void;
  restartQuiz: () => void;
};

type Question = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: string;
  subcategory: string;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [results, setResults] = useState<boolean[]>(Array(questions.length).fill(false));
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const totalQuestions = questions.length;
  
  const currentQuestion = questions[currentQuestionIndex] || null;
  const progress = Math.round((currentQuestionIndex / totalQuestions) * 100);

  const setAnswer = (answer: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitQuiz = () => {
    const quizResults = questions.map((question, index) => 
      checkAnswer(userAnswers[index], question.keywords)
    );
    setResults(quizResults);
    setIsQuizComplete(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(questions.length).fill(''));
    setResults(Array(questions.length).fill(false));
    setIsQuizComplete(false);
  };

  const value = {
    currentQuestionIndex,
    userAnswers,
    results,
    isQuizComplete,
    totalQuestions,
    currentQuestion,
    progress,
    questions,
    setAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    submitQuiz,
    restartQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};