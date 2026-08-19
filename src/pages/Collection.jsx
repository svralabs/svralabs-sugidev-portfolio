import React from 'react';

const Collection = () => {
  return (
    <footer className="bg-orange-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">SVRALABS</h2>
            <p className="text-orange-300">Building the future</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="text-orange-200 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-orange-200 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-orange-200 hover:text-white transition">Services</a></li>
              <li><a href="#" className="text-orange-200 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-200 hover:text-white transition">Facebook</a>
              <a href="#" className="text-orange-200 hover:text-white transition">Twitter</a>
              <a href="#" className="text-orange-200 hover:text-white transition">Instagram</a>
              <a href="#" className="text-orange-200 hover:text-white transition">LinkedIn</a>
            </div>
          </div>
          <div>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-orange-800 text-white placeholder-orange-400 p-2 rounded"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-orange-700 text-center text-orange-400">
          <p>&copy; 2023 SVRALABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Collection;
