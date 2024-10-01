import React from 'react';
import Nav from '../../../nav_footer/nav';
import Footer from '../../../nav_footer/footer';

const PreIntermediate = () => {
  return (
    <>
    <Nav />
    <div className="bg-white-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2987413b93db0_3d-education-2cv.png)' }}>
        <div className="absolute inset-0 "></div>
        <div className="flex justify-center items-center h-full">
          
        </div>
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to Pre Intermediate English</h2>
          <p className="text-xl text-gray-600 mt-4">At this level, you will improve your grammar, build your vocabulary, and become more confident in speaking English. Let's get started with advanced concepts!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800">Step 1: Grammar Rules</h3>
            <p className="text-gray-600 mt-4">Understanding grammar is crucial at this stage. Focus on past tense, future tense, and conditionals. Learning these will help you communicate complex ideas.</p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8">Step 2: Expand Vocabulary</h3>
            <p className="text-gray-600 mt-4">Pre-Intermediate learners should aim to learn 10-15 new words a day. Focus on verbs, adjectives, and adverbs that are common in everyday conversations.</p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8">Step 3: Conversation Practice</h3>
            <p className="text-gray-600 mt-4">The more you practice speaking with others, the more fluent you will become. Start speaking about daily topics like travel, work, and hobbies with confidence.</p>
          </div>
          
          <div>
            <img src="https://img.freepik.com/free-vector/freelancer-concept-illustration_114360-7590.jpg" alt="Learning Process" className="w-full rounded-lg " />
          </div>
        </div>
      </section>

   {/* Vocabulary Building Section */}
<section className="bg-white py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800">Build Your Vocabulary</h2>
    <p className="text-xl text-gray-600 mt-4">
      Below is a list of common words at the Pre-Intermediate level. Click on each word to learn its meaning and pronunciation.
    </p>

    {/* Updated Grid for Responsive Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
      {[
        'Travel',
        'Food',
        'Health',
        'Technology',
        'Work',
        'Leisure',
        'Hobbies',
        'Education',
        'Family',
        'Nature',
        'Sports',
        'Transport',
      ].map((word) => (
        <div key={word} className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
          <h3 className="text-2xl font-bold text-gray-800">{word}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Listening & Speaking Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Practice Listening and Speaking</h2>
          <p className="text-xl text-gray-600 mt-4">Listening to native speakers and practicing with friends will boost your fluency. Watch videos or listen to podcasts in English, and try repeating phrases to improve your accent.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="https://k12.thoughtfullearning.com/sites/k12/files/teacherGuides/chapterOpeners/WriteAhead_435.jpg" alt="Listening 1" className="w-full rounded-lg shadow-lg"/>
          <img src="https://k12.thoughtfullearning.com/sites/k12/files/teacherGuides/chapterOpeners/371_AllWrite.jpg" alt="Speaking Practice 2" className="w-full rounded-lg shadow-lg"/>
          <img src="https://i.pinimg.com/736x/3f/79/a7/3f79a7b9bff184824cd07d8c95ada642.jpg" alt="Listening 3" className="w-full rounded-lg shadow-lg"/>
        </div>
      </section>

      {/* Grammar Rules Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Grammar for Pre Intermediate Learners</h2>
          <p className="text-xl text-gray-600 mt-4">At this level, you should focus on learning past tenses, present perfect tense, and conditionals.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Past Tense</h3>
              <p className="text-gray-600 mt-4">Learn the simple past and past continuous tenses to describe events that happened in the past.</p>
              <img src="https://englishforyourself.com/wp-content/uploads/2023/07/Simple-Past-or-Past-Simple-Tense-Chart-Table-Structure-or-Form-Examples-1024x831.jpg" alt="Past Tense" className="w-full rounded-lg mt-4"/>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Present Perfect Tense</h3>
              <p className="text-gray-600 mt-4">Understand the difference between the past tense and the present perfect tense to describe ongoing actions.</p>
              <img src="https://englishforyourself.com/wp-content/uploads/2023/07/Present-Perfect-Tense-Chart-Table-Structure-or-Form-Examples-scaled.jpg" alt="Present Perfect" className="w-full rounded-lg  mt-4"/>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Skills Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Improve Your Writing Skills</h2>
          <p className="text-xl text-gray-600 mt-4">At the Pre-Intermediate level, you should work on writing paragraphs and short essays. Practice by writing about topics you're passionate about, such as travel, sports, or your hobbies.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="https://image.isu.pub/240201205332-78dfe518ce84350e0cc4224ac74d1a9d/jpg/page_1_thumb_large.jpg" alt="Writing 1" className="w-full rounded-lg shadow-lg"/>
          <img src="https://image.isu.pub/240202220218-54c8d7bc913e22c426d43a59b67f9fcb/jpg/page_1_thumb_large.jpg" alt="Writing 2" className="w-full rounded-lg shadow-lg"/>
          <img src="https://image.isu.pub/240209173620-c24997ef1d056f7f034f3c9a30aada84/jpg/page_1_thumb_large.jpg" alt="Writing 3" className="w-full rounded-lg shadow-lg"/>
        </div>
      </section>

     
    </div>
    <Footer />
    </>
  );
};

export default PreIntermediate;
