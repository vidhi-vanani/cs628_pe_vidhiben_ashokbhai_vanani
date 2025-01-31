import React from "react"; // Import React to use JSX and component features

const TodoItem = ({ task, deleteTask }) => { // Functional component receiving task and deleteTask as props
  return (
    <li className="todo-item">
      {task} {/* Display the task text */}
      <button className="delete-btn" onClick={deleteTask}>Delete</button> {/* Button to delete the task */}
    </li>
  );
};

export default TodoItem; // Export the component for use in other files
