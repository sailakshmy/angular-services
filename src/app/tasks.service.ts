import { Injectable, signal } from "@angular/core";
import { Task } from "./tasks/task.model";

@Injectable({
  providedIn: "root",
})
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
}
