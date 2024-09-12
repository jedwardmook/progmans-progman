'use client'
import styles from "./page.module.css";
import { useState } from "react";
import ProjectContainer from "@/components/ProjectsContainer";
import AddProject from "@/components/AddProject";
import { ProjectType, StepType } from "@/types";

export default function Home() {
  const [addProjectToggle, setAddProjectToggle] = useState<boolean>(false)
  const [projects, setProjects] = useState<ProjectType[]>([
    { id: "98",
      text: "Project X",
      steps: [  
        {
          id: "7865",
          text: "Step X 1",
          completed: false,
        },
        {
          id: "78d65",
          text: "Step X 2",
          completed: false,
        }
        ],
      completed: false,
    }
  ])

  const handleAddProject = (project: ProjectType) => {
    const newProject = { ...project, id: Date.now().toString(), steps: [] };
    setProjects([...projects, newProject]);
    setAddProjectToggle(false)
  }

  return (
    <main className={styles.main}>
      <ProjectContainer projects={projects} />
      {addProjectToggle ? (
        <AddProject onAddProject={handleAddProject} />
      ) : (
        <button onClick={() => setAddProjectToggle(!addProjectToggle)}>Add New</button>
      )}
    </main>
  );
}
