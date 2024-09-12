import React from 'react';
import { StepType } from '@/types';

interface StepProps {
  step: StepType;
}

const Step: React.FC<StepProps> = ({ step }) => (
  <div>
    <input
      type="checkbox"
      checked={step.completed}
    />
    <span>
      {step.text}
    </span>
  </div>
);

export default Step;
