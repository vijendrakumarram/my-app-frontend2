import React from 'react';

const projects = [
  {
    title: 'Train Simulator',
    description:
      'A realistic 3D train simulator built with Unity, designed for enterprise training and immersive interactive experiences.',
    video: 'https://www.youtube.com/embed/_v7Bt0jJSxo',
  },
  {
    title: 'Tractor Simulator',
    description:
      'A realistic 3D farming simulator where players drive tractors to plow fields, plant crops, and manage agricultural tasks.',
    video: 'https://www.youtube.com/embed/YiWx7XSGnYA',
  },
  {
    title: 'Flight Simulator',
    description:
      'A high-fidelity 3D flight simulation experience featuring takeoff, landing, and in-air navigation using realistic aircraft physics.',
    video: 'https://www.youtube.com/embed/RmnS7ToFECc',
  },
  {
    title: 'Edverse Metaverse',
    description:
      'A 3D metaverse app for virtual education, training, and collaboration in immersive environments.',
    video: 'https://www.youtube.com/embed/5NRsN7OY3cg',
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-indigo-50 text-center" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Our Portfolio</h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover the innovative solutions we've built for our clients.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-700 hover:border-red-500 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              {project.video && (
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    className="w-full aspect-video"
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
