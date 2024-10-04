import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const questions = [
  {
    question: "What is the synonym of 'happy'?",
    answers: ["Sad", "Joyful", "Angry", "Bored"],
    correct: 0,
  },
  {
    question: "What is the antonym of 'difficult'?",
    answers: ["Easy", "Hard", "Complicated", "Tough"],
    correct: 0,
  },
  {
    question: "Which word means 'to make something better'?",
    answers: ["Improve", "Reduce", "Maintain", "Ignore"],
    correct: 0,
  },
  {
    question: "What does 'contemplate' mean?",
    answers: ["To think deeply", "To forget", "To understand", "To see"],
    correct: 0,
  },
  {
    question: "What is the plural of 'child'?",
    answers: ["Childs", "Children", "Childes", "Childer"],
    correct: 0,
  },
  {
    question: "What does 'ubiquitous' mean?",
    answers: ["Rare", "Everywhere", "Invisible", "Specific"],
    correct: 0,
  },
  {
    question: "What is a synonym for 'rapid'?",
    answers: ["Slow", "Quick", "Lazy", "Late"],
    correct: 0,
  },
  {
    question: "Which word means 'to express regret'?",
    answers: ["Repent", "Rejoice", "Ignore", "Defend"],
    correct: 0,
  },
  {
    question: "What does 'meticulous' mean?",
    answers: ["Careless", "Detail-oriented", "Quick", "Creative"],
    correct: 0,
  },
  {
    question: "What is the antonym of 'generous'?",
    answers: ["Selfish", "Kind", "Helpful", "Supportive"],
    correct: 0,
  },
  {
    question: "What does 'defer' mean?",
    answers: ["To postpone", "To agree", "To argue", "To refuse"],
    correct: 0,
  },
  {
    question: "What is the synonym of 'abundant'?",
    answers: ["Scarce", "Plentiful", "Limited", "Insufficient"],
    correct: 0,
  },
  {
    question: "What does 'diligent' mean?",
    answers: ["Lazy", "Hardworking", "Busy", "Carefree"],
    correct: 0,
  },
  {
    question: "What is the opposite of 'optimistic'?",
    answers: ["Pessimistic", "Hopeful", "Realistic", "Doubtful"],
    correct: 0,
  },
  {
    question: "Which word means 'to travel across or through'?",
    answers: ["Navigate", "Hover", "Fly", "Swim"],
    correct: 0,
  },
  {
    question: "What does 'intermittent' mean?",
    answers: ["Continuous", "Occasional", "Steady", "Fast"],
    correct: 0,
  },
  {
    question: "What is the synonym of 'arduous'?",
    answers: ["Easy", "Difficult", "Simple", "Boring"],
    correct: 0,
  },
  {
    question: "What does 'resilient' mean?",
    answers: ["Weak", "Strong", "Fragile", "Rigid"],
    correct: 0,
  },
  {
    question: "What is the antonym of 'abundant'?",
    answers: ["Rare", "Plentiful", "Rich", "Luxurious"],
    correct: 0,
  },
  {
    question: "What does 'incessant' mean?",
    answers: ["Stop", "Endless", "Temporary", "Rare"],
    correct: 0,
  },
  {
    question: "What is the synonym of 'insipid'?",
    answers: ["Tasty", "Bland", "Delicious", "Flavorful"],
    correct: 0,
  },
  {
    question: "What does 'flourish' mean?",
    answers: ["To grow or develop in a healthy way", "To fail", "To hide", "To stop"],
    correct: 0,
  },
];

const Codeone = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const navigate = useNavigate(); // Changed to useNavigate

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correctCount = answers.filter((answer, index) => answer === questions[index].correct).length;
    setCorrectAnswers(correctCount);
    setSubmitted(true);
  };

  const handleRetakeExam = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
    setCorrectAnswers(0);
  };

  const handleGoHome = () => {
    navigate('/'); // Changed to navigate
  };

  const handleGoToCertificate = () => {
    Swal.fire({
      title: 'Your Certificate Code',
      text: 'Code: 134678',
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6',
      background: '#fff',
      backdrop: `
        rgba(0,0,123,0.4)
        left top
        no-repeat
      `
    });
    navigate('/');
  };


  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Advanced English Exam</h1>
        {submitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Results</h2>
            <p className="text-xl mb-4">
              You answered {correctAnswers} out of {questions.length} questions correctly.
            </p>
            {correctAnswers >= 15 ? (
              <div>
                <p className="text-lg text-green-500 mb-4">Congratulations! You have passed the exam.</p>
                <button
                  onClick={handleGoToCertificate}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Go to Certificate Page
                </button>
              </div>
            ) : (
              <div>
                <p className="text-lg text-red-500 mb-4">Unfortunately, you did not pass the exam. Please try again.</p>
                <button
                  onClick={handleRetakeExam}
                  className="bg-yellow-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-300 mr-4"
                >
                  Retake Exam
                </button>
                <button
                  onClick={handleGoHome}
                  className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  Go Home
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {questions.map((question, index) => (
              <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">{index + 1}. {question.question}</h2>
                <div className="flex flex-col">
                  {question.answers.map((answer, answerIndex) => (
                    <label key={answerIndex} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={answerIndex}
                        checked={answers[index] === answerIndex}
                        onChange={() => handleAnswerChange(index, answerIndex)}
                        className="mr-2"
                      />
                      {answer}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 mt-4"
            >
              Submit Answers
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Codeone;
