import React, { useState, useEffect } from 'react';
import Nav from '../nav_footer/nav';
import Footer from '../nav_footer/footer';

const Services = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const books = [
    { id: 1, image: 'https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/22739/optimized_product_thumb_children-stories-book-cover-541__1_.jpg', pdf: '/Peter_Pan.pdf' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZPO7NyZiBx3fm1Js_lGwL_cci71p6vqh0Q&s', pdf: '/Peter_Pan.pdf' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRbt9EbajQ43o0wjbUCf3QhlsdBfQzkezGA&s', pdf: '/Peter_Pan.pdf' },
    { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQiF0Ahe94Oto7_-KHP4Qox5rDm6onCJ6xYA&s', pdf: '/Peter_Pan.pdf' },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXl3r_z906nM-jR3w9SnuhQnfjAbLLceiSGw&s', pdf: '/Peter_Pan.pdf' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bIxHZ2TvpSDthKtUwN5kMk0787b_Lvr_3Q&s', pdf: '/Peter_Pan.pdf' },
    { id: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYiAHf0Cuw77ekgynPnoI84qSbOwk1tUpPw&s', pdf: '/Peter_Pan.pdf' },
    { id: 8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4yBxAX-Q7KVBkSFEM653anNiplLSqSm0TQ&s', pdf: '/Peter_Pan.pdf' },
    { id: 9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJ6T8H53TuOmwRNiQRM7yZ2HLzrADw-MQ0g&s', pdf: '/Peter_Pan.pdf' },
    { id: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuyGp9wyLk2n2ladRKhtVNwXKvEbQ12QkIQ&s', pdf: '/Peter_Pan.pdf' },
  ];

  const services = [
    { title: 'Technology', description: 'Explore the latest trends in technology and how they affect our daily lives.', link: 'https://www.toppr.com/guides/essays/essay-on-technology/' },
    { title: 'Computer', description: 'Learn about computer systems, programming, and software development.', link: 'https://www.toppr.com/guides/essays/essay-on-computer/' },
    { title: 'Wonder Of Science', description: 'Discover the amazing discoveries and innovations in the world of science.', link: 'https://www.toppr.com/guides/essays/wonder-of-science-essay/' },
    { title: 'Mobile Phone', description: 'Stay updated on mobile technology, apps, and best practices for usage.', link: 'https://www.toppr.com/guides/essays/essay-on-mobile-phone/' },
    { title: 'Internet', description: 'Understand the fundamentals of the internet, web development, and online safety.', link: 'https://www.toppr.com/guides/essays/essay-on-internet/' },
    { title: 'Newspaper', description: 'Get insights into journalism, media, and the importance of news in society.', link: 'https://www.toppr.com/guides/essays/essay-on-newspaper-reading/' },
  ];

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const handleDownload = () => {
    if (selectedBook) {
      const link = document.createElement('a');
      link.href = selectedBook.pdf;
      link.setAttribute('download', selectedBook.pdf.split('/').pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      closeModal();
    }
  };

  return (
    <>
      <Nav />

      <div className="flex flex-col md:flex-row items-center justify-between bg-white-100 p-4 rounded-lg shadow-md">
      {/* Left Side - GIF */}
      <div className="w-full md:w-1/2">
        <img 
          src="https://cdn.dribbble.com/users/2374064/screenshots/4732055/girl-study2.gif" // Replace with your GIF URL
          alt="Animated GIF"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Side - Paragraph */}
      <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
        <h2 className="text-5xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700">
          This is a sample paragraph that describes the content associated with the GIF. You can include any information here that complements the GIF, such as explanations, instructions, or related content. Make sure it’s engaging and informative to capture the reader's interest.
        </p>
      </div>
    </div>


      <div className="min-h-screen bg-white-100 py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 py-16">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200">
                  Learn More
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* Book Download Section */}
        <h2 className="text-3xl font-bold text-center mb-6 py-16">Download Books</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 gap-8">
          {books.map((book) => (
            <div key={book.id} className="text-center">
              <img
                src={book.image}
                alt={`Book ${book.id}`}
                className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <button
                onClick={() => openModal(book)}
                className="mt-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                Download Book
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
              <h3 className="text-xl font-bold mb-4">Do you want to download this book?</h3>
              <div className="flex justify-between">
                <button
                  onClick={closeModal}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDownload}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-200"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        )}

        {/* English Guidelines Section */}
        <div className="mt-12 max-w-3xl mx-auto text-center py-16">
          <h2 className="text-5xl font-bold mb-4 ">English Guidelines</h2>
          <p className="text-2xl text-gray-600 mb-4 py-16">
            Here are some guidelines to help you learn English effectively:
          </p>
          <ul className=" text-2xl list-disc list-inside text-left text-gray-600">
            <li>Practice speaking every day.</li>
            <li>Read books, articles, and blogs in English.</li>
            <li>Watch English movies and shows with subtitles.</li>
            <li>Join language exchange programs.</li>
            <li>Use language learning apps for practice.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
