// Primer Grade1.jsx do Grade5.jsx za React kviz aplikaciju
// Pretpostavljamo da su pitanja importovana iz 'data/questions.js'

// Primer strukture fajla: Grade1.jsx

import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import questions from '../data/questions';
import '../App.css';
const Grade4 = () => {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setShowResult(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Kviz za 4. razred</h2>
      {showResult ? (
        <div className="alert alert-success text-center">
          Vaš rezultat: {score} / {questions.grade4.length}
        </div>
      ) : (
        <Quiz questions={questions.grade4} onQuizEnd={handleQuizEnd} />
      )}
    </div>
  );
};

export default Grade4;

// Isti obrazac koristiš za Grade2.jsx do Grade5.jsx
// Samo zameni `questions.grade1` sa odgovarajućim (npr. `questions.grade2` itd.)
// I naslov sa "Kviz za 2. razred", "Kviz za 3. razred" itd.
