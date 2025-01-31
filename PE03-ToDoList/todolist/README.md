# ToDo List  

# Input  
The application provides an input space where users can describe tasks. The description is then taken by the "Add Task" button and put into the task list. Once the task is displayed on the list, there is a "Delete" button next to it so that the task can be deleted by the user upon clicking. Hence, the user can keep adding tasks as they wish or delete old ones.  

# Process  
The app maintains the task list state using React hook `useState`. Whenever a task is added in that state, the task list screen is updated in real-time. The `.map()` function cycles through all the tasks on the task list, displaying each task. The "Delete" button calls an event handler that removes the task from the state, thus causing an update of the currently displayed task list.  

# Output  
The application really shows the updated to-do list in real time. As soon as a task is added, the user can see it in the app and delete it if need be. Thus, the UI updates automatically and keeps on creating dynamic interaction with the users.  