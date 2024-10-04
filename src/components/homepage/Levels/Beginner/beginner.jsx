import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../nav_footer/nav';
import Footer from '../../../nav_footer/footer';

const Beginner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
<Nav />
    <div className="bg-white-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/005/051/481/original/schoolboy-learning-online-course-on-mobile-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg)' }}>
        <div className="absolute inset-0 "></div>
        <div className="flex justify-center items-center h-full">
       
        </div>
      </div>

      {/* How to Learn Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">How Can You Learn English?</h2>
          <p className="text-xl text-gray-600 mt-4">Start with the basics! Learning English is fun and easy if you follow the right steps. Practice, listen, and communicate as much as possible.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800">Step 1: Start with the Alphabet</h3>
            <p className="text-gray-600 mt-4">The first step to learning English is understanding the letters and sounds of the English alphabet. Practice daily to get familiar with the letters.</p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8">Step 2: Learn Simple Words</h3>
            <p className="text-gray-600 mt-4">Once you're familiar with the alphabet, move on to learning simple, everyday words. This will help you form basic sentences.</p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8">Step 3: Practice Speaking and Listening</h3>
            <p className="text-gray-600 mt-4">Learning English isn't just about reading and writing. Make sure to practice speaking and listening to improve your conversational skills.</p>
          </div>
          
          <div>
            <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=338&ext=jpg" alt="Learning Process" className="w-full rounded-lg " />
          </div>
        </div>
      </section>

     {/* Alphabet Learning Section */}
<section className="bg-white py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800">Learn the English Alphabet</h2>
    <p className="text-xl text-gray-600 mt-4">
      Below are the 26 letters of the English alphabet. Click on each letter to learn more.
    </p>

    {/* Updated Grid for Responsive Layout */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
      {[
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ].map((letter) => (
        <div
          key={letter}
          className="bg-gray-200 p-8 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300"
        >
          <h3 className="text-3xl font-bold text-gray-800">{letter}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Images for Motivation Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Visual Learning Helps</h2>
          <p className="text-xl text-gray-600 mt-4">Visualizing what you're learning helps reinforce new concepts. Below are some images that can help you remember new English words.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="https://i.pinimg.com/236x/3e/04/4b/3e044bd16d18faae2642a151f1c912dd.jpg" alt="Visual Learning 1" className="w-full rounded-lg shadow-lg"/>
          <img src="https://grammarvocab.com/wp-content/uploads/2021/08/Slide3-2.png" alt="Visual Learning 2" className="w-full rounded-lg shadow-lg"/>
          <img src="https://i.pinimg.com/1200x/3a/68/ac/3a68ac57b3a8e99295d1fddd89da2e35.jpg" alt="Visual Learning 3" className="w-full rounded-lg shadow-lg"/>
        </div>
      </section>

<div class="py-12">
      {/* Exam Link Section */}
 <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready for the Exam?</h2>
          <p className="text-xl text-gray-600 mb-6">Take the next step to validate your proficiency.</p>
          <Link to="/codeone" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Go to Exam Page
          </Link>
        </section>
</div>
    </div>
    <Footer />
    </>
  );
};

export default Beginner;
