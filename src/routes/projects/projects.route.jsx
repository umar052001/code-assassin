import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/project-card/project-card.component";
import "./projects.styles.scss";

import { featured_projects as devProjects } from "../../utils/projects";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const featuredProjects = devProjects.map((proj) => proj);
    setProjects(featuredProjects);
  }, []);

  return (
    <section className="projects page dev" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj) => {
          return <ProjectCard project={proj} key={proj.key} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
