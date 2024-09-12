import React from 'react';
import Step from './Step';
import { StepType } from '@/types';

interface StepProps {
  steps: StepType[];
}

const StepList: React.FC<StepProps> = ({ steps }) => (
  <div>
    {steps.map((step, index) => (
      <Step key={index} step={step} />
    ))}
  </div>
);

export default StepList;