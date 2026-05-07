import React from 'react';
import GlassCard from '../components/GlassCard';

const projects = [
  {
    title: "AI Vision",
    description: "Real-time object detection system using TensorFlow and React. Achieved 95% accuracy on custom datasets.",
    tags: ["React", "Python", "TensorFlow", "FastAPI"]
  },
  {
    title: "Galaxy Chat",
    description: "A decentralized chat application with end-to-end encryption and a space-themed UI.",
    tags: ["Node.js", "Socket.io", "WebCrypto"]
  },
  {
    title: "EcoTrack",
    description: "Sustainability tracking app for urban commuters. Visualizes carbon footprint in real-time.",
    tags: ["React Native", "Firebase", "D3.js"]
  },
  {
    title: "Quantum Ledger",
    description: "High-performance blockchain explorer with advanced data visualization and live updates.",
    tags: ["Solidity", "Ether.js", "React"]
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>Projects</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px',
      }}>
        {projects.map((project, index) => (
          <GlassCard 
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
