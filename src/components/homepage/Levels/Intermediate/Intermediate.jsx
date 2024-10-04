import Nav from '../../../nav_footer/nav';
import Footer from '../../../nav_footer/footer';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Intermediate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const [accessGranted, setAccessGranted] = useState(false); // Tracks if access is granted
  const [inputCode, setInputCode] = useState(''); // Tracks the entered code
  const [errorMessage, setErrorMessage] = useState(''); // Tracks error messages for incorrect code


  const handleCodeSubmit = () => {
    if (inputCode === '278567') {
      setAccessGranted(true); 
      setErrorMessage(''); 
    } else {
      setErrorMessage('Incorrect code. Please try again.'); 
    }
  };


  return (
    <>
    <Nav />
    <div className="bg-gray-100 min-h-screen py-12">

    {!accessGranted ? (
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Enter Access Code</h2>
              <p>Access to the code requires successfully passing the Pre-Intermediate-level exam.</p>
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                placeholder="Enter code"
              />
              {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
              <button
                onClick={handleCodeSubmit}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit Code
              </button>
            </div>
          </div>
        ) : (

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Intermediate English Learning</h1>
          <p className="text-xl text-gray-600 mt-4">
            Take your English skills to the next level with these learning resources.
          </p>
        </section>

        {/* Vocabulary Building Section */}
        <section className="bg-white py-12 rounded-lg shadow-lg mb-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Expand Your Vocabulary</h2>
            <p className="text-xl text-gray-600 mt-4">
              Below is a list of more advanced vocabulary words. Click on each word to learn its meaning and pronunciation.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
              {['Analyze', 'Debate', 'Environment', 'Govern', 'Interpret', 'Research', 'Strategy', 'Theory', 'Trend', 'Validate', 'Logic', 'Innovation'].map((word) => (
                <div key={word} className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
                  <h3 className="text-2xl font-bold text-gray-800">{word}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grammar Tips Section */}
        <section className="bg-white py-12 rounded-lg shadow-lg mb-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Master Grammar</h2>
            <p className="text-xl text-gray-600 mt-4">
              Intermediate grammar rules and examples to help you speak more fluently.
            </p>

            <div className="mt-12">
              {['Past Perfect', 'Conditional Sentences', 'Reported Speech', 'Passive Voice', 'Relative Clauses'].map((topic) => (
                <div key={topic} className="bg-gray-200 p-6 mb-4 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
                  <h3 className="text-2xl font-bold text-gray-800">{topic}</h3>
                  <p className="text-lg text-gray-600 mt-2">
                    Learn about the {topic} and how to use it correctly in different contexts.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="bg-white py-12 rounded-lg shadow-lg">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Study Tips</h2>
            <p className="text-xl text-gray-600 mt-4">
              Some useful tips to improve your English language learning experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: 'Immerse in English Media',
                  image: 'https://via.placeholder.com/400x300.png?text=English+Media',
                  description: 'Watch English movies and TV shows to understand different accents and contexts.',
                },
                {
                  title: 'Practice Speaking',
                  image: 'https://via.placeholder.com/400x300.png?text=Practice+Speaking',
                  description: 'Speak with friends or tutors regularly to improve your pronunciation and fluency.',
                },
                {
                  title: 'Read More Books',
                  image: 'https://via.placeholder.com/400x300.png?text=Read+More+Books',
                  description: 'Reading English books can help with understanding sentence structures and vocabulary.',
                },
              ].map((tip) => (
                <div key={tip.title} className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
                  <img src={tip.image} alt={tip.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">{tip.title}</h3>
                  <p className="text-lg text-gray-600 mt-2">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div class="py-12">
      {/* Exam Link Section */}
 <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready for the Exam?</h2>
          <p className="text-xl text-gray-600 mb-6">Take the next step to validate your proficiency.</p>
          <Link to="/codethree" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Go to Exam Page
          </Link>
        </section>
</div>


      </div>
    )}
    </div>
    <Footer />
    </>
  );
};

export default Intermediate;
