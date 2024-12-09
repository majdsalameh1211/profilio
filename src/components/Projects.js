import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your project.",
      link: "https://github.com/majdsalameh1211"
    },
    {
      title: "Project 2",
      description: "Description of your project.",
      link: "https://github.com/majdsalameh1211"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h4>Projects</h4>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
