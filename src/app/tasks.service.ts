import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./tasks/task.model";

// @Injectable({
//   providedIn: "root",
// })
export class TasksService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: "OPEN",
    };
    this.tasks.update((prevTasks) => [...prevTasks, newTask]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) => {
        if (task.id == taskId) {
          return {
            ...task,
            status: newStatus,
          };
        } else return task;
      })
    );
  }
}
