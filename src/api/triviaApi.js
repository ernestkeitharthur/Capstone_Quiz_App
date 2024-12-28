import axios from "axios";

export const fetchCategories = async () => {
  const res = await axios.get("https://opentdb.com/api_category.php");
  return res.data.trivia_categories;
};

export const fetchQuizQuestions = async (amount, category, difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const res = await axios.get(endpoint);
  return res.data.results;
};
