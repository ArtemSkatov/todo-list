export const loadState = () => {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = localStorage.getItem("todo_state");
    if (!raw) return undefined;
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
};

export const saveState = (state: unknown) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("todo_state", JSON.stringify(state));
  } catch {}
};
