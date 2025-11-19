import { Todo } from "@/entities/todo";

export type TodoCreateDto = Omit<Todo, "stopTime"> & {
  stopTime: string;
};
