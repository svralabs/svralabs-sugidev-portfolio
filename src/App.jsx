import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Projects from './components/Projects';
import Explore from './components/Explore';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
        <Home />
        <Marquee />
        <Services />
        <Projects />
        <Explore />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
