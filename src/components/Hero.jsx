import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-start justify-center px-6 py-24">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Your Name</h1>
        <p className="mt-3 text-lg text-zinc-200 sm:text-2xl">Interior Designer & 3D Visualizer</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300">
          I create calm, timeless interiors and precise visualizations that focus on light, materiality, and spatial balance.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="rounded-full border border-white px-5 py-2 text-sm transition-colors hover:bg-white hover:text-black">
            View Projects
          </a>
          <a href="#contact" className="rounded-full border border-white/30 px-5 py-2 text-sm text-zinc-200 transition-colors hover:border-white">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
