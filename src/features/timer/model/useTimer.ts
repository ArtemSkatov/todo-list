import { useEffect, useState } from "react";
import { startTime, Status, pauseTime } from "@/entities/todo";
import { useBeforeUnload } from "@/shared/lib/hooks";
import { useAppDispatch } from "@/shared/lib/store";

export const useTimer = (todoId: string, timeStart: number, status: Status) => {
  const dispatch = useAppDispatch();
  const [time, setTime] = useState(timeStart);

  useEffect(() => {
    if (status !== "inProgress") return;

    const interval = setTimeout(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, status]);

  useEffect(() => {
    setTime(timeStart);
  }, [timeStart]);

  const handleStartTime = () => dispatch(startTime(todoId));
  const handlePauseTime = () =>
    dispatch(pauseTime({ id: todoId, lastTime: time }));

  useBeforeUnload(status === "inProgress" ? handlePauseTime : () => {});

  return { time, handleStartTime, handlePauseTime };
};
