// This component allows users to select quiz settings before starting
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../api/triviaApi";

const QuizStart = ({ onStartQuiz }) => {
  const [categories, setCategories] = useState([]); // Stores available quiz categories
  const [selectedCategory, setSelectedCategory] = useState(""); // User's selected category
  const [difficulty, setDifficulty] = useState("easy"); // Selected difficulty level
  const [numQuestions, setNumQuestions] = useState(5); // Number of questions

  useEffect(() => {
    // Fetch quiz categories when the component loads
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Start Quiz</h1>
      <form onSubmit={(e) => onStartQuiz(e, selectedCategory, difficulty, numQuestions)}>
        {/* Category Dropdown */}
        <label>Choose Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        
        {/* Difficulty Level Dropdown */}
        <label>Choose Difficulty:</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        {/* Number of Questions Input */}
        <label>Number of Questions:</label>
        <input
          type="number"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
          min="1"
          max="50"
        />

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white p-2">Start Quiz</button>
      </form>
    </div>
  );
};

export default QuizStart;
