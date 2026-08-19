import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Explore = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-900/90"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Explore More</h1>
        <p className="text-xl mb-8">Discover our creative universe</p>
        <button
          onClick={handleClick}
          className="flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          View All Projects
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </section>
  );
};

export default Explore;
