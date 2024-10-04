import React, {useEffect} from 'react';
import Nav from '../nav_footer/nav';
import Footer from '../nav_footer/footer';

const ContactUs = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  // Sample teacher data
  const teachers = [
    {
      name: 'John Doe',
      role: 'English Teacher',
      phone: '123-456-7890',
      email: 'john@example.com',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Jane Smith',
      role: 'English Instructor',
      phone: '987-654-3210',
      email: 'jane@example.com',
      image: 'https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727740800&semt=ais_hybrid'
    },
    {
        name: 'Jane Smith',
        role: 'English Instructor',
        phone: '987-654-3210',
        email: 'jane@example.com',
        image: 'https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg'
      },
    
  ];

  return (
    <>
    <Nav />
    <div className="min-h-screen bg-gray-100">
      {/* Cover Image */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-back-school-supplies-with-books-copy-space_23-2148587137.jpg)' }}>
        <div className="absolute inset-0 "></div>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Teachers</h2>
          <p className="text-gray-600">Feel free to reach out to any of our teachers for assistance.</p>
        </div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img src={teacher.image} alt={teacher.name} className="w-32 h-32 rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-bold text-center">{teacher.name}</h3>
              <p className="text-center text-gray-600">{teacher.role}</p>
              <div className="text-center mt-4">
                <p className="text-gray-800"><strong>Phone:</strong> {teacher.phone}</p>
                <p className="text-gray-800"><strong>Email:</strong> <a href={`mailto:${teacher.email}`} className="text-blue-500">{teacher.email}</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
