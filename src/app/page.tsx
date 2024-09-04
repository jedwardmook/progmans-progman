'use client'
import styles from "./page.module.css";
import { useState } from "react";

interface Todo {
  text: string;
  steps: Step[]
  completed: boolean;
}

interface Step {
  text: string;
  completed: boolean
}

export default function Home() {
  const [addTodoToggle, setAddTodoToggle] = useState<boolean>(false)
  const [addStepToggle, setAddStepToggle] = useState<boolean>(false)
  const [newTodo, setNewTodo] = useState<Todo>({
    text: '',
    steps: [],
    completed: false,
  })
  const [todos, setTodos] = useState<Todo[]>([])

  const handleNewTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({...newTodo, text: e.target.value});
  }

  const handleAddTodoClick = () => {
    if (newTodo.text.trim() !== ''){
      setTodos([...todos, newTodo]);
      setNewTodo({ text: '', steps: [], completed: false });
      setAddTodoToggle(!addTodoToggle)
    }
  }

  return (
    <main className={styles.main}>
      <h2>Todos:</h2>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <span>{todo.text}</span>
            {todo.steps.map((step, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                  />
                  <span>{step.text}</span>
                </div>
              )
            })}
            <div>
              {addStepToggle?
                <input />
                :
                <button onClick={() => setAddStepToggle(!addStepToggle)}>Add Step</button>
              }
            </div>
          </div>
        )
      })}
      {addTodoToggle ? 
        <div>
          <input
            placeholder="Todo"
            type="input"
            value={newTodo.text}
            onChange={handleNewTodoText}
          />
          <button onClick={handleAddTodoClick}>+</button>
        </div>
        :
        <button onClick={() => setAddTodoToggle(!addTodoToggle)}>Add New</button>
      }
    </main>
  );
}
