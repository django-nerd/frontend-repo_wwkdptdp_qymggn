import React from 'react';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-zinc-200">
        <a href="#home" className="font-medium tracking-tight text-white">Interior Designer & 3D Visualizer</a>
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
