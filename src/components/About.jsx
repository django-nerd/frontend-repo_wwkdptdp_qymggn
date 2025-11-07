import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white text-black">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
        <div className="mt-6 space-y-5 text-zinc-700">
          <p>
            I am an Interior Designer and 3D Visualizer focused on simple, functional spaces. My work centers on clarity, balance, and material honesty—creating environments that feel calm, coherent, and purposeful.
          </p>
          <p>
            In visualization, I translate ideas into precise images that reveal light, proportion, and texture. Each project is approached with restraint, allowing the architecture to take the lead.
          </p>
          <p>
            I believe good design reduces noise. It guides attention, frames experience, and leaves room for people to belong.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
