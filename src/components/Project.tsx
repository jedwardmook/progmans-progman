import { ProjectType } from '@/types';
import { useState } from 'react';
import AddStep from './AddStep';

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [addStepToggle, setAddStepToggle] = useState<boolean>(false)
  const [updatedProject, setUpdatedProject] = useState(project)

  const addStepFunction = () => {

  }

  const onCancel = () => {
    setAddStepToggle(false)
  }

  const handleCompleteStep = (id: string) => {
    setUpdatedProject(prevProject => ({
      ...prevProject,
      steps: prevProject.steps.map(step => 
        step.id === id
        ? { ...step, completed: !step.completed }
        : step
      )
    }))
  }

  return (
    <div>
      <span>{updatedProject.text}</span>
      {updatedProject.steps.map(step => (
        <div key={step.id}>
          <input
            type='checkbox'
            checked={step.completed}
            onChange={() => handleCompleteStep(step.id)}
          />
          <span>{step.text}</span>
        </div>
      ))}
      {addStepToggle ? 
        <AddStep onAddStep={addStepFunction} onCancel={onCancel}/>
          :
        <button onClick={() => setAddStepToggle(true)}>Add Step</button>
      }
    </div>
  );
};

export default Project;
