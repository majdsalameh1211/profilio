import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "WhatsApp ChatBot",
      description: "WhatsApp Chatbot for Client Interaction 🤖💬 This is a WhatsApp automation project that interacts with clients using the Green API. The chatbot manages conversations dynamically, saves them in a JSON file, and can export the data to Google Docs or a CRM system for further processing.",
      link: "https://github.com/majdsalameh1211/WhatsApp-ChatBot-JS-and-GreenAPI-"
    },
    {
      title: "GoNature – Park Management System",
      description: "🌿 GoNature is an intelligent park management system designed for seamless visitor reservations and real-time park operations. Built with Java, JavaFX, and SQL, it optimizes park workflow with:\n\nMulti-user authentication (Clients, Guides, Park Managers, Employees)\n Real-time reservation management\n Waiting list system for full bookings\n Automated SMS notifications for approvals\n Data-driven reports for park usage and visitor trends \n\nThe system syncs dynamically between clients and the server, ensuring efficient park management.\n\n",
      link: "https://github.com/majdsalameh1211/GoNature"
    },
    {
      title: "Project 3",
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
