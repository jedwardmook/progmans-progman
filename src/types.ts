export interface ProjectType {
  id: string;
  text: string;
  steps: StepType[];
  completed: boolean;
}

export interface StepType {
  id: string;
  text: string;
  completed: boolean;
}