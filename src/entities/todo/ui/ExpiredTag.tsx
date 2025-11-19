export const ExpiredTag = ({
  timer,
  stopTime,
}: {
  timer: number;
  stopTime: number;
}) => {
  console.log(timer, stopTime);
  return timer > stopTime ? (
    <div className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-sm">
      Просрочена
    </div>
  ) : null;
};
