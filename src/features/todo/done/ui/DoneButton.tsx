import CheckSvg from "@icons/check.svg";
import { Status } from "@/entities/todo";
import { Button } from "@/shared/ui/Button";
import { useDoneTask } from "../model";

export const DoneButton = ({
  id,
  status,
  lastTime,
}: {
  id: string;
  status: Status;
  lastTime: number;
}) => {
  const doneTodo = useDoneTask(id, lastTime);

  return status === "done" ? (
    <CheckSvg className="fill-green-500" />
  ) : (
    <Button className="bg-blue-400 w-full sm:w-max" onClick={doneTodo}>
      Завершить
    </Button>
  );
};
