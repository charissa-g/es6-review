// index.js includes all features practiced across all files
import { TaskManager } from './taskManager.js';
import { fetchTaskData } from './fakeAPI.js';

const manager = new TaskManager();

async function loadTasks() {
  const tasks = await fetchTaskData(); // async/await
  tasks.forEach(task => {
    manager.addTask(task.title, task.priority);
  });

  console.log("Loaded tasks:");
  manager.listTasks(); // using class method
}

loadTasks();
