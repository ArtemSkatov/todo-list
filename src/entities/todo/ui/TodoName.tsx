export const TodoName = ({ name }: { name: string }) => {
  return (
    <p className="text-foreground font-semibold text-lg min-w-0 break-words">
      {name}
    </p>
  );
};
