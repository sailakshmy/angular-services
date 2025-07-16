import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./tasks/task.model";
import { LoggingService } from "./logging.service";

// @Injectable({
//   providedIn: "root",
// })
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: "OPEN",
    };
    this.tasks.update((prevTasks) => [...prevTasks, newTask]);
    this.loggingService.log(
      `Added a new task with the title ${taskData.title}`
    );
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
    this.loggingService.log(`Updated task to new status ${newStatus}`);
  }
}
