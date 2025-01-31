import React, { useState } from "react"; // Importing React and useState hook for managing state
import TodoList from "./components/TodoList"; 
import "./styles.css"; 

const App = () => {
  const [todos, setTodos] = useState([]); // State to store the list of tasks

  const addTask = (task) => {
    if (task.trim()) { // Checks if the task is not empty or just spaces
      setTodos([...todos, task]); 
    }
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Removes the task at the specified index
  };

  return (
    <div className="app-container">
      <h1>ToDo List App</h1> {/* Title for the app */}
      <TodoList todos={todos} addTask={addTask} deleteTask={deleteTask} /> 
      {/* Passes the todos list, addTask, and deleteTask functions to TodoList */}
    </div>
  );
};

export default App; // Exports the App component for use in other parts of the app
