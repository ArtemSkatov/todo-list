import clsx from "clsx";
import PauseSvg from "@icons/pause.svg";
import PlaySvg from "@icons/play.svg";
import { Status } from "@/entities/todo";

export const Timer = ({
  status,
  time,
  stopTime,
  handleStartTime,
  handlePauseTime,
}: {
  status: Status;
  handleStartTime: () => void;
  handlePauseTime: () => void;
  time: number;
  stopTime: number;
}) => {
  const createViewTimer = (timeValue: number) => {
    const allMinutes = Math.floor(timeValue / 60);
    const minutes = allMinutes % 60;
    const watch = Math.floor(allMinutes / 60);

    return `${watch < 10 ? `0${watch}` : watch}:${minutes < 10 ? `0${minutes}` : minutes}`;
  };

  return (
    <div className={clsx("flex gap-4 items-center")}>
      <span>{createViewTimer(time)}</span>
      <div className="w-16 h-1 bg-slate-200 rounded-sm sm:w-32">
        <div
          className={clsx(
            "h-1 bg-blue-400 rounded-sm",
            status === "done" && "bg-green-400",
            time > stopTime && "bg-red-400",
          )}
          style={{
            width: time > stopTime ? "100%" : `${(time / stopTime) * 100}%`,
            transition: "width 1s ease-in-out",
          }}
        ></div>
      </div>
      <span>{createViewTimer(stopTime)}</span>
      {status === "start" || status === "pause" ? (
        <button onClick={handleStartTime} className="border-none p-0">
          <PlaySvg className={"h-6 w-6"} />
        </button>
      ) : null}
      {status === "inProgress" && (
        <button onClick={handlePauseTime} className="border-none p-0">
          <PauseSvg className={"h-6 w-6"} />
        </button>
      )}
    </div>
  );
};
