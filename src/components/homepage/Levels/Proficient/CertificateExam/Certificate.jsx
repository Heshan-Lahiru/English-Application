import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';

const Certificate = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const [name, setName] = useState('');
  const certificateRef = useRef();

  const downloadCertificate = () => {
    html2canvas(certificateRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'certificate.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-8">Your Certificate</h1>
      <div
        ref={certificateRef}
        className="relative bg-white p-8 rounded-lg shadow-lg border border-gray-300"
        style={{
          backgroundImage: 'url(/certificatenew.png)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%', // Changed to 100% for responsiveness
          maxWidth: '600px', // Set a maximum width for larger screens
          height: 'auto', // Change height to auto for flexible height
          padding: '40px', // Adjust padding for better spacing
          color: '#fff', // Set text color for better visibility against the image
        }}
      >
        <h2 className="text-3xl font-semibold text-center mb-4 py-6">Certificate of Completion</h2>
        <p className="text-xl text-center mb-2">This certifies that</p>
        <h3 className="text-2xl font-bold text-center mb-4">{name || 'Your Name Here'}</h3>
        <p className="text-xl text-center">has successfully completed the course.</p>
        <div className="text-center mt-8">
          <p className="text-sm">Date: {new Date().toLocaleDateString()}</p>
          <p className="text-sm">Signature: 𝓁𝒶𝒽𝒾𝓇𝓊𝒽𝑒𝓈𝒽𝒶𝓃</p>
        </div>
      </div>
      <div className="mt-8 w-full max-w-xs">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg p-2 w-full"
        />
      </div>
      <button
        onClick={downloadCertificate}
        className="mt-4 bg-blue-500 text-white p-2 rounded-lg w-full max-w-xs"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
