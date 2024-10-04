
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../nav_footer/nav';
import Footer from '../../../nav_footer/footer';

const Proficient = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const [accessGranted, setAccessGranted] = useState(false); // Tracks if access is granted
  const [inputCode, setInputCode] = useState(''); // Tracks the entered code
  const [errorMessage, setErrorMessage] = useState(''); // Tracks error messages for incorrect code


  const handleCodeSubmit = () => {
    if (inputCode === '6732965') {
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
              <p>Access to the code requires successfully passing the Advanced-level exam.</p>
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
          <h1 className="text-5xl font-bold text-gray-800">Proficient English Learning</h1>
          <p className="text-xl text-gray-600 mt-4">
            Achieve mastery in the English language with our proficient resources and tools.
          </p>
        </section>

        {/* Vocabulary Section */}
        <section className="bg-white py-12 rounded-lg shadow-lg mb-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Advanced Vocabulary</h2>
            <p className="text-xl text-gray-600 mt-4">
              Enhance your vocabulary with these advanced words. Click on each word to learn its usage.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
              {['Incongruous', 'Epiphany', 'Voracious', 'Quintessential', 'Resilient', 'Scrupulous'].map((word) => (
                <div key={word} className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
                  <h3 className="text-2xl font-bold text-gray-800">{word}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real-Life Examples Section */}
        <section className="bg-white py-12 rounded-lg shadow-lg mb-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Real-Life English Usage</h2>
            <p className="text-xl text-gray-600 mt-4">
              See how advanced English is used in various contexts.
            </p>

            <div className="mt-12">
              {[
                { title: 'Business Communication', example: 'Utilizing precise terminology to convey complex ideas effectively.' },
                { title: 'Academic Writing', example: 'Employing sophisticated language to argue effectively and persuasively.' },
                { title: 'Cultural Discussions', example: 'Engaging in nuanced conversations about global issues and perspectives.' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-200 p-6 mb-4 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
                  <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                  <p className="text-lg text-gray-600 mt-2">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate Section */}
        <section className="bg-white py-12 rounded-lg shadow-lg mb-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Proficiency Certificate</h2>
            <p className="text-xl text-gray-600 mt-4">
              Upon completion of the Proficient level, you will receive a certificate demonstrating your advanced English skills.
            </p>
            <img
              src="/certificateimage.png"
              alt="Certificate Example"
              className="w-full h-auto mt-4 rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Exam Link Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready for the Exam?</h2>
          <p className="text-xl text-gray-600 mb-6">Take the next step to validate your proficiency.</p>
          <Link to="/certificateexam" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Go to Exam Page
          </Link>
        </section>
      </div>
        )}
    </div>
    <Footer />
    
    </>
  );
};

export default Proficient;
