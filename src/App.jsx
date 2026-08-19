import { Home, Marquee, Services, Projects, Explore, Footer } from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white">
      <Home />
      <Marquee />
      <Services />
      <Projects />
      <Explore />
      <Footer />
    </div>
  );
}
