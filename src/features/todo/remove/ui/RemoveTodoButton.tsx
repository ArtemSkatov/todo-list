import DeleteSvg from "@icons/delete.svg";
import { useDeleteTodo } from "../model";

export const RemoveTodoButton = ({ id }: { id: string }) => {
  const deleteTodo = useDeleteTodo(id);
  return (
    <button className="border-none p-0" onClick={deleteTodo}>
      <DeleteSvg className="w-6 h-6" />
    </button>
  );
};
