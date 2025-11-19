import { removeTodo } from "@/entities/todo";
import { useAppDispatch } from "@/shared/lib/store";

export const useDeleteTodo = (id: string) => {
  const dispatch = useAppDispatch();

  return () => dispatch(removeTodo(id));
};
