import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-900 to-orange-700 min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-white">Welcome to SVRALABS</h1>
      <p className="text-xl text-orange-200 mt-4">Innovative Solutions for Modern Challenges</p>
      <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-white transition mt-8">
        Get Started
      </button>
      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
