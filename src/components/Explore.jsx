import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <section className="bg-dark-orange py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h2 className="font-playfair text-3xl md:text-4xl text-gold mb-6 md:mb-0 md:w-1/2">
          Explore More
        </h2>
        <Link
          to="/projects"
          className="bg-gold hover:bg-dark-orange text-dark-slate font-bold py-3 px-6 rounded-full text-1.5rem transition-colors duration-300 md:w-auto"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default Explore;
