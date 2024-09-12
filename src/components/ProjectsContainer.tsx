import React from 'react';
import Project from './Project';
import { ProjectType, StepType } from '@/types';

interface ProjectsContainerProps {
  projects: ProjectType[];
}

const ProjectContainer: React.FC<ProjectsContainerProps> = ({ projects }) => (
  <div>
    <h2>Projects:</h2>
    {projects.map((project, index) => (
      <Project key={index} project={project} />
    ))}
  </div>
);

export default ProjectContainer