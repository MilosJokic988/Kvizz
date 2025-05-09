import { useState } from 'react';
import Result from './Result';


function Quiz({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (selected) => {
    setSelectedAnswer(selected);

    setTimeout(() => {
      if (selected === questions[currentIndex].answer) {
        setScore(prev => prev + 1);
      }

      const next = currentIndex + 1;
      if (next < questions.length) {
        setCurrentIndex(next);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 500); // kratak delay za animaciju
  };

  if (showResult) {
    return <Result score={score} total={questions.length} />;
  }

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{questions[currentIndex].question}</h3>
      <div className="quiz-options">
        {questions[currentIndex].options.map((opt, idx) => (
          <button
            key={idx}
            className={`quiz-option ${
              selectedAnswer
                ? opt === questions[currentIndex].answer
                  ? 'correct'
                  : opt === selectedAnswer
                  ? 'wrong'
                  : ''
                : ''
            }`}
            onClick={() => handleAnswer(opt)}
            disabled={!!selectedAnswer}
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="quiz-progress">
        Pitanje {currentIndex + 1} od {questions.length}
      </p>
    </div>
  );
}

export default Quiz;
