import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    const underline = document.querySelector('.underline-animation');
    if (underline) {
      underline.style.width = '100%';
    }
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2F4F4F] to-[#1E3A3A] text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
      <div className="md:w-2/3 space-y-6">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold">Sugidev</h1>
        <p className="font-inter text-1.25rem font-light tracking-wider">Digital Craftsman</p>
        <div className="relative inline-block">
          <button className="bg-[#D2691E] hover:bg-[#FFD700] text-white font-bold py-3 px-6 rounded transition-colors duration-300">
            Explore Work
          </button>
          <div className="absolute bottom-0 left-0 h-0.5 bg-[#FFD700] w-0 underline-animation"></div>
        </div>
      </div>
      <div className="md:w-1/3 mt-8 md:mt-0"></div>
      <div className="fixed bottom-8 right-8 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#FFD700]" />
      </div>
    </section>
  );
};

export default Home;
