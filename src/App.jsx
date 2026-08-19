import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './components/Layout';

const Hero = lazy(() => import('./sections/Hero'));
const AboutMarquee = lazy(() => import('./sections/AboutMarquee'));
const Services = lazy(() => import('./sections/Services'));
const Projects = lazy(() => import('./sections/Projects'));
const Explore = lazy(() => import('./sections/Explore'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <AboutMarquee />
        <Services />
        <Projects />
        <Explore />
        <Footer />
      </Suspense>
    </Layout>
  );
}

export default App;
