import { useState } from 'react';
import { Mail } from 'lucide-react';

const Explore = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="h-screen bg-orange-800 flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl md:text-3xl font-bold text-white mb-8 text-center">
        Ready to Elevate Your Brand?
      </h2>
      <button
        onClick={toggleModal}
        className="bg-white text-orange-800 hover:bg-orange-700 hover:text-white px-6 py-3 rounded-lg text-lg md:text-lg font-semibold transition-colors duration-300"
      >
        Let's Collaborate
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <button onClick={toggleModal} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 text-orange-800 mr-2" />
              <p className="text-gray-700">contact@svralabs.com</p>
            </div>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Please send us an email to discuss how we can help elevate your brand.
            </p>
            <button
              onClick={toggleModal}
              className="w-full bg-orange-800 text-white hover:bg-orange-700 px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Explore;
