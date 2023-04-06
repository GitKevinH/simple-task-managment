let taskmanager = (function () {
 tasks = [];

  function addTask(string) {
    tasks.push(string);
  }

  function displayTasks() {
    for (let task of tasks) {
      console.log(task);
    }
  }

  return {
    addTask: addTask,
    displayTasks: displayTasks,
  };
})();

taskmanager.addTask("Schedule appointment for dog groomer."); // Task 1
taskmanager.addTask("Clean gutters"); // Task 2
taskmanager.addTask("Call my mom"); // Task 3

taskmanager.displayTasks(); // Printing tasks using method in function
