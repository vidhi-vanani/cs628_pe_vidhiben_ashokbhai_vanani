import React, { useState } from "react"; // Importing React and useState hook for managing component state
import TodoItem from "./TodoItem"; 

const TodoList = ({ todos, addTask, deleteTask }) => {
  const [task, setTask] = useState(""); // State to keep track of the input field value

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    addTask(task); // Calls the function to add the new task
    setTask(""); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Updates state when user types
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem 
            key={index} // Provides a unique key for React to track list items
            task={todo} 
            deleteTask={() => deleteTask(index)} // Passes the index to deleteTask function
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList; // Exports the component for use in other parts of the app
