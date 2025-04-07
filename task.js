// task class
export class Task {
    constructor(title, priority) {
      this.title = title;
      this.priority = priority;
    }
  
    describe() {
      return `Task: ${this.title}, Priority: ${this.priority}`;
    }
  }
  