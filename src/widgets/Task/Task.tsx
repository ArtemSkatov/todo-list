import { useTimer } from "@/features/timer";
import { DoneButton } from "@/features/todo/done";
import { RemoveTodoButton } from "@/features/todo/remove";
import { Timer, Todo, TodoDescription } from "@/entities/todo";
import { TodoName, ExpiredTag } from "@/entities/todo";

export const Task = ({ todo }: { todo: Todo }) => {
  const { time, handleStartTime, handlePauseTime } = useTimer(
    todo.id,
    todo.timer,
    todo.status,
  );

  return (
    <div className="flex flex-col gap-4 bg-card rounded-md px-2 py-1 sm:px-6 sm:py-4">
      <div className="flex justify-between items-start gap-3">
        <TodoName name={todo.name} />
        <ExpiredTag timer={time} stopTime={todo.stopTime} />
      </div>
      <TodoDescription description={todo.description} />
      <div className="flex justify-center  flex-wrap gap-4 sm:justify-between">
        <div className="flex gap-4 justify-end">
          <Timer
            time={time}
            stopTime={todo.stopTime}
            handleStartTime={handleStartTime}
            handlePauseTime={handlePauseTime}
            status={todo.status}
          />
          <RemoveTodoButton id={todo.id} />
        </div>
        <DoneButton id={todo.id} status={todo.status} lastTime={time} />
      </div>
    </div>
  );
};
