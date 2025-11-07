import React from 'react';

const projects = [
  {
    title: 'Living Room — Soft Light',
    subtitle: 'Residential Interior',
    image: 'https://images.unsplash.com/photo-1726090401458-7abb00f7450c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMaXZpbmclMjBSb29tJTIwJUUyJTgwJTk0JTIwU29mdCUyMExpZ2h0fGVufDB8MHx8fDE3NjI1MjczMTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Monochrome Kitchen',
    subtitle: '3D Visualization',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Calm Workspace',
    subtitle: 'Commercial Interior',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Material Study — Stone & Oak',
    subtitle: '3D Visualization',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
          <p className="text-sm text-zinc-500">Selected work — interiors and 3D visuals</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((p, i) => (
            <figure key={i} className="group">
              <div className="overflow-hidden rounded-md border border-zinc-200">
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3">
                <div className="text-sm uppercase tracking-wider text-zinc-500">{p.subtitle}</div>
                <div className="text-lg font-medium">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
