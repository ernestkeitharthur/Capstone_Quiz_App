import React, { useState } from "react";
import QuizStart from "../components/QuizStart";
import QuestionCard from "../components/QuestionCard";
import ScoreSummary from "../components/ScoreSummary";
import { fetchQuizQuestions } from "../api/triviaApi";

const Home = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = (e, category, difficulty, numQuestions) => {
    e.preventDefault();
    fetchQuizQuestions(numQuestions, category, difficulty).then((data) => {
      setQuizData(data);
      setQuizStarted(true);
    });
  };

  const handleAnswer = (selected) => {
    if (selected === quizData[currentIndex].correct_answer) setScore((prev) => prev + 1);
    setCurrentIndex((prev) => prev + 1);
  };

  if (!quizStarted)
    return <QuizStart onStartQuiz={startQuiz} />;

  if (currentIndex >= quizData.length)
    return <ScoreSummary score={score} totalQuestions={quizData.length} onRetry={() => window.location.reload()} />;

  return (
    <QuestionCard
      question={quizData[currentIndex].question}
      options={[
        ...quizData[currentIndex].incorrect_answers,
        quizData[currentIndex].correct_answer,
      ].sort(() => Math.random() - 0.5)}
      onAnswer={handleAnswer}
    />
  );
};

export default Home;
