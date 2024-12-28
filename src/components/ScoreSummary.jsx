const ScoreSummary = ({ score, totalQuestions, onRetry }) => (
    <div className="p-4">
      <h1>Your Score: {score}/{totalQuestions}</h1>
      <button onClick={onRetry} className="p-2 bg-blue-500 text-white">
        Retry
      </button>
    </div>
  );
  
  export default ScoreSummary;
  