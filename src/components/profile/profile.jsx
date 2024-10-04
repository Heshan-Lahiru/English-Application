import React, {useEffect} from 'react';
import Nav from '../nav_footer/nav';
import Footer from '../nav_footer/footer';

const UserProfile = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const user = {
    name: 'Lahiru Heshan',
    email: 'lahiru@gmail.com',
    bio: 'Software Engineer with a passion for web development and open-source contributions.',
    profileImage: '/my.jpeg', // Replace with your profile image path
  };

  return (
    <>
    <Nav />
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center transform transition-transform duration-300 hover:scale-105">
        <img
          src={user.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-4">{user.email}</p>
        <p className="text-gray-500 mb-6">{user.bio}</p>
        
      </div>
    </div>
    <Footer />
    </>
  );
};

export default UserProfile;
