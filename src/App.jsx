import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter bg-white text-black">
      <Header />
      <main className="mt-14">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200 bg-white py-8 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Your Name — Interior Designer & 3D Visualizer
      </footer>
    </div>
  );
}

export default App;
