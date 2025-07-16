export type TaskStatus = "OPEN" | "IN_PROGRESS" | "DONE";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export const TaskStatusOptions: {
  value: "open" | "in-progress" | "done";
  text: string;
  taskStatus: TaskStatus;
}[] = [
  {
    value: "open",
    taskStatus: "OPEN",
    text: "Open",
  },
  {
    value: "in-progress",
    taskStatus: "IN_PROGRESS",
    text: "In-Progress",
  },
  {
    value: "done",
    taskStatus: "DONE",
    text: "Completed",
  },
];
