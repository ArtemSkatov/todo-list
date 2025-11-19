import { Status } from "./status";

export interface Todo {
  id: string;
  name: string;
  description: string;
  timer: number;
  stopTime: number;
  status: Status;
}
