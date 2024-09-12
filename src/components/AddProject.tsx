import React, { useState } from 'react';
import { ProjectType } from '@/types';

interface AddProjectProps {
  onAddProject: (project: ProjectType) => void;
}

const AddProject: React.FC<AddProjectProps> = ({ onAddProject }) => {
  const [newProject, setNewProject] = useState<ProjectType>({
    id: '',
    text: '',
    steps: [],
    completed: false,
  });

  const handleNewProjectText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProject({...newProject, text: e.target.value});
  };

  const handleAddProjectClick = () => {
    if (newProject.text.trim() !== '') {
      const projectToAdd = { ...newProject, id: Date.now().toString()};
      onAddProject(projectToAdd);
      setNewProject({ id: '', text: '', steps: [], completed: false});
    }
  };

  return (
    <div>
      <input
        placeholder='Project'
        type='input' 
        value={newProject.text}
        onChange={handleNewProjectText}
      />
      <button onClick={handleAddProjectClick}>+</button>
    </div>
  );
};

export default AddProject;