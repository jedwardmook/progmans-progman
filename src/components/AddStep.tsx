import React, { useState } from 'react';
import { StepType } from '@/types';

interface AddStepProps {
  onAddStep: (projectId: string, step: StepType) => void;
  onCancel: () => void;
}

const AddStep: React.FC<AddStepProps> = ({ onAddStep, onCancel }) => {
  const [newStep, setNewStep] = useState<StepType>({
    id: '',
    text: '',
    completed: false,
  });

  return (
    <div>
      <button onClick={onCancel}>X</button>
      <input
        placeholder='Add Step'
        type='input'
        value={newStep.text}
      />
      <button>+</button>
    </div>
  );
};

export default AddStep;
