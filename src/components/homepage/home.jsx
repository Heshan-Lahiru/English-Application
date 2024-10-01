import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../nav_footer/nav';
import Footer from '../nav_footer/footer';
import './home.css'
const HomePage = () => {
 
  const images = [
    'https://rukminim2.flixcart.com/image/850/1000/xif0q/book/l/t/r/understanding-and-using-english-grammar-introductory-b-original-imagu26hfyjfvtpu.jpeg?q=90&crop=false',
    'https://www.malikbooksellers.com/wp-content/uploads/2022/12/1662367385.jpg',
    'https://3.imimg.com/data3/EC/NI/MY-9776495/genius-kidz-english-grammar-compositions-2-book-500x500.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0eKrTOXKCEB_1FdbKNRkuZiVrxmOPPVKXMvZ0UwoEf8p0_LcEYomZYAnSsfW_Gj5gB4&usqp=CAU',
    'https://3.imimg.com/data3/CF/SI/MY-9776495/genius-kidz-english-grammar-compositions-4-book-500x500.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaQQwOGm4sszcuvPWzp9N3FkI4RotZmcFc96XPfgGhclYRYGTuAz1hr0gq1yJl-VG9J4&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfADRt8n6TCyAASlVD_ZtuvHJ8x7s3S_H-j36tGcXZNZYN2cZ0AZ1LWj_tizZgYO4G4E&usqp=CAU',
    'https://cdn.exoticindia.com/images/products/original/books-2019-006/has506.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFn8Bqk-16SK2PwgrYNenB1E7gxCUQS6X3QWk0rH__b_Rb-lHYgmkjjIcEfggIa473FQ0&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg--W8YrxyK7qX-1Q4z8FO055pr4fSRdwgs4lIYBer8fujPRvRux8QlY5tgl5F2KpNMDI&usqp=CAU',
  ];

  return (
    <>
      <Nav />
      <div className=" min-h-screen">
        {/* Header Section */}
        <header
          className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center relative "
          style={{
            backgroundImage: 'url(/coverimg.png)',
          }}
        >
          <div className="absolute inset-0 "></div>
          <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between">
            {/* Left side: Headline and List */}
            <div className="text-white lg:w-1/2 text-center lg:text-left space-y-6 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold">English For You</h1>
              <ul className="list-disc list-inside text-xl lg:text-2xl space-y-2">
                <li>Grammar</li>
                <li>Learn Easy</li> 
                <li>Speak With Us</li>
                <li>Free Education</li>
              </ul>
            </div>

            {/* Right side: Moving Cards */}
            <div className="lg:w-1/2 overflow-hidden relative">
              <div className="flex animate-move-cards">
                {images.concat(images).map((image, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg w-44 h-52 flex-shrink-0 transform transition duration-300 hover:scale-105 mx-2"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </header>

      

        {/* Content Box (Image and Paragraph) */}
        <section className="bg-white-0 py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Left Side: Image */}
           
            <div className="flex justify-center items-center">
        <div className="md:w-2/1 mb-8 md:mb-0">
          <img
            src="/girljump.png"
            alt="Image"
            className="shaking-image w-full rounded-lg "
          />
        </div>
      </div>
            {/* Right Side: Paragraph */}
            <div className="md:w-1/2 text-center md:text-left md:pl-8">
              <h2 className="text-5xl text-center font-bold mb-10">History of English</h2>
              <p className="text-lg text-center">
                We provide a range of services to help you build, design, and
                optimize your online presence. Our team is skilled in various
                technologies and design strategies that focus on delivering the
                best user experience.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
      <div className="bg-white-200 w-full h-1/5 flex flex-col md:flex-row justify-around items-center p-4">
        {/* Button for each proficiency level */}
        <Link to="/beginner" className="flex flex-col items-center mb-4 md:mb-0">
          <div className="bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <i className="fas fa-user-graduate text-4xl"></i> {/* Icon for Beginner */}
          </div>
          <span className="mt-2 text-lg font-semibold">Beginner</span>
        </Link>

        <Link to="/preIntermediate" className="flex flex-col items-center mb-4 md:mb-0">
          <div className="bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <i className="fas fa-book-open text-4xl"></i> {/* Icon for Pre Intermediate */}
          </div>
          <span className="mt-2 text-lg font-semibold">Pre Intermediate</span>
        </Link>

        <Link to="/intermediate" className="flex flex-col items-center mb-4 md:mb-0">
          <div className="bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <i className="fas fa-user-edit text-4xl"></i> {/* Icon for Intermediate */}
          </div>
          <span className="mt-2 text-lg font-semibold">Intermediate</span>
        </Link>

        <Link to="/upper-intermediate" className="flex flex-col items-center mb-4 md:mb-0">
          <div className="bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <i className="fas fa-book-reader text-4xl"></i> {/* Icon for Upper Intermediate */}
          </div>
          <span className="mt-2 text-lg font-semibold">Upper Intermediate</span>
        </Link>

        <Link to="/advanced" className="flex flex-col items-center mb-4 md:mb-0">
          <div className="bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <i className="fas fa-chalkboard-teacher text-4xl"></i> {/* Icon for Advanced */}
          </div>
          <span className="mt-2 text-lg font-semibold">Advanced</span>
        </Link>

        <Link to="/proficient" className="flex flex-col items-center mb-4 md:mb-0">
          <div className="bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <i className="fas fa-medal text-4xl"></i> {/* Icon for Proficient */}
          </div>
          <span className="mt-2 text-lg font-semibold">Proficient</span>
        </Link>
      </div>
    </section>

      

        <section className="bg-white-0 py-12">
        <div className="flex flex-col md:flex-row bg-white-100 p-4 rounded-lg shadow-lg">
      {/* Left Side: Paragraph */}
      <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
        <h2 className="text-5xl text-center font-bold mb-10 py-12">About Our Service</h2>
        <p className="text-lg text-center">
          We offer a range of services to help you build your skills and knowledge. Our programs are designed for all proficiency levels, from beginner to proficient, ensuring that everyone can find something to suit their needs. Join us to enhance your learning experience!
        </p>
      </div>

      {/* Right Side: GIF */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://i.pinimg.com/originals/ef/09/36/ef0936558e58d6bebf73fee2ae895fe3.gif" // Replace with your GIF URL
          alt="Learning GIF"
          className="w-82 h-82 rounded-lg" // Set smaller width and height
        />
      </div>
    </div>
</section>
 



      </div>
      <Footer />
    </>
  );
};

export default HomePage;