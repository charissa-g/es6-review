// taskManager to practice maps
import { Task } from './task.js';

export class TaskManager {
  constructor() {
    this.tasks = new Map(); // title => task object
  }

  addTask(title, priority) {
    const task = new Task(title, priority);
    this.tasks.set(title, task);
  }

  listTasks() {
    for (let [title, task] of this.tasks) {
      console.log(task.describe());
    }
  }
}
