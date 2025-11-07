import React from 'react';

const projects = [
  {
    title: 'Monochrome Loft — Interior Study',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Warm Minimal Living — 3D Visualization',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Concrete + Wood Kitchen — Real Project',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nordic Bedroom — Lighting Study',
    img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Gallery Corridor — Composition',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Calm Workspace — 3D Concept',
    img: 'https://images.unsplash.com/photo-1505692794403-34cb0fdc9b6a?q=80&w=1600&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
          <p className="text-sm text-zinc-600">Selected interiors and visualizations</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <figure key={idx} className="group overflow-hidden rounded-md border border-zinc-200 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4 text-sm text-zinc-700">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
