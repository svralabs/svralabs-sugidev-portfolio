import React from 'react';

const Explore = () => {
  return (
    <section className="bg-gradient-to-r from-orange-800 to-orange-600 py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Explore Our Work</h1>
        <p className="text-xl text-orange-200 mb-8">Discover the projects we've built and the solutions we've delivered.</p>
        <button className="bg-white text-orange-800 hover:bg-orange-100 px-8 py-3 rounded-full transition">Get Started</button>
      </div>
      <div className="absolute inset-0 bg-[url('/path/to/your/image.jpg')] bg-cover bg-fixed bg-center opacity-20" />
    </section>
  );
};

export default Explore;
