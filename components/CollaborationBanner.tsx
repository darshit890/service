import React from 'react';
import Image from 'next/image';

const CollaborationBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-3xl max-w-7xl mx-auto my-20">
      <Image
        src="/heros.avif" // Replace with your actual image path
        alt="Team Collaboration"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
      />
      <div className="absolute inset-0 bg-purple-500 bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Real-Time Team Collaboration and Communication Enhancements
        </h1>
        <button className="bg-purple-800 text-white font-semibold py-2 px-6 rounded-full w-max hover:bg-purple-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CollaborationBanner;