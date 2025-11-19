import { doneTodo } from "@/entities/todo";
import { useAppDispatch } from "@/shared/lib/store";

export const useDoneTask = (id: string, lastTime: number) => {
  const dispatch = useAppDispatch();

  return () => dispatch(doneTodo({ id, lastTime }));
};
