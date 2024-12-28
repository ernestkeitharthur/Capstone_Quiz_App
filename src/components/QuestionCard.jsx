const QuestionCard = ({ question, options, onAnswer }) => (
    <div className="p-4">
      <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
      <ul>
        {options.map((opt, i) => (
          <li key={i}>
            <button
              className="border p-2 my-1 w-full"
              onClick={() => onAnswer(opt)}>
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default QuestionCard;
  