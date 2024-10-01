import React from 'react';
import Nav from '../../../nav_footer/nav';
import Footer from '../../../nav_footer/footer';


const Advanced = () => {
  return (
    <>
    <Nav />
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Advanced English Learning</h1>
          <p className="text-xl text-gray-600 mt-4">
            Master the English language with these advanced resources and techniques.
          </p>
        </section>

        {/* Vocabulary Building Section */}
        <section className="bg-white py-12 rounded-lg shadow-lg mb-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Expand Your Vocabulary</h2>
            <p className="text-xl text-gray-600 mt-4">
              Discover advanced vocabulary words. Click on each word to learn its meaning and usage.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
              {['Articulate', 'Ambiguous', 'Cognizant', 'Ephemeral', 'Juxtapose', 'Meticulous', 'Nuance', 'Pragmatic', 'Sycophant', 'Ubiquitous'].map((word) => (
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
            <h2 className="text-4xl font-bold text-gray-800">Advanced Grammar Insights</h2>
            <p className="text-xl text-gray-600 mt-4">
              Dive into complex grammar rules and elevate your writing and speaking.
            </p>

            <div className="mt-12">
              {['Reported Speech', 'Conditional Sentences', 'Relative Clauses', 'Direct vs. Indirect Questions', 'Advanced Tenses'].map((topic) => (
                <div key={topic} className="bg-gray-200 p-6 mb-4 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
                  <h3 className="text-2xl font-bold text-gray-800">{topic}</h3>
                  <p className="text-lg text-gray-600 mt-2">
                    Explore the rules of {topic} and how to apply them effectively.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="bg-white py-12 rounded-lg shadow-lg">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Strategies for Success</h2>
            <p className="text-xl text-gray-600 mt-4">
              Effective techniques to enhance your advanced English learning experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: 'Read Widely',
                  image: 'https://via.placeholder.com/400x300.png?text=Read+Widely',
                  description: 'Engage with various genres and authors to expand your vocabulary and comprehension.',
                },
                {
                  title: 'Practice Speaking',
                  image: 'https://via.placeholder.com/400x300.png?text=Practice+Speaking',
                  description: 'Join speaking clubs or language exchange programs to improve your fluency.',
                },
                {
                  title: 'Watch English Media',
                  image: 'https://via.placeholder.com/400x300.png?text=Watch+Media',
                  description: 'Consume English films, series, and podcasts to enhance listening skills and vocabulary.',
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
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Advanced;
