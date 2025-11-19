import { addTodo, Todo } from "@/entities/todo";
import { useAppDispatch } from "@/shared/lib/store";

export const useCreateTodo = () => {
  const dispatch = useAppDispatch();

  return (todo: Todo) => dispatch(addTodo(todo));
};
