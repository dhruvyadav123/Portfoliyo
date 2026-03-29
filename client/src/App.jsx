import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Hero     from './sections/Hero';
import About    from './sections/About';
import Skills   from './sections/Skills';
import Projects from './sections/Projects';
import Resume   from './sections/Resume';
import Contact  from './sections/Contact';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    let frameA = 0;
    let frameB = 0;

    const syncScrollPosition = () => {
      if (location.hash) {
        const targetId = decodeURIComponent(location.hash.slice(1));
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    frameA = window.requestAnimationFrame(() => {
      frameB = window.requestAnimationFrame(syncScrollPosition);
    });

    return () => {
      window.cancelAnimationFrame(frameA);
      window.cancelAnimationFrame(frameB);
    };
  }, [location.pathname, location.hash]);

  return null;
}

const Layout = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>

        {/* Home — full scrollable single-page */}
        <Route path="/" element={
          <Layout>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </Layout>
        } />

        {/* Individual routes */}
        <Route path="/about"    element={<Layout><About /></Layout>} />
        <Route path="/skills"   element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/resume"   element={<Layout><Resume /></Layout>} />
        <Route path="/contact"  element={<Layout><Contact /></Layout>} />

        {/* 404 */}
        <Route path="*" element={
          <Layout>
            <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
              <div className="relative select-none">
                <span className="text-[120px] font-black text-[#eba134]/10">404</span>
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-black text-[#eba134]">404</span>
              </div>
              <p className="text-xl text-gray-400">Page not found</p>
              <a href="/"
                className="rounded-full border border-[#eba134]/50 bg-[#eba134]/5 px-8 py-3 text-sm font-bold text-[#eba134] transition-all hover:bg-[#eba134]/15 hover:border-[#eba134]">
                ← Back to Home
              </a>
            </div>
          </Layout>
        } />

      </Routes>
    </Router>
  );
}

export default App;
