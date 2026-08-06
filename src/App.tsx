import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#050a14] text-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Skills />
        <Services />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-[#020610] border-t border-white/5 py-10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="gradient-text font-semibold">Buthukuri Karthik Reddy</span>. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">Built with React · TypeScript · TailwindCSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
