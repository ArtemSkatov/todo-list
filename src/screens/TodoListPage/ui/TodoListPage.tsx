"use client";
import { useMemo, useState } from "react";
import { Task } from "@/widgets/Task";
import { CreateForm } from "@/features/todo/create";
import { useDebounce } from "@/shared/lib/hooks";
import { useAppSelector } from "@/shared/lib/store";
import { Board } from "@/shared/ui/Board";
import { SearchInput } from "@/shared/ui/SearchInput";

export const TodoListPage = () => {
  const todoList = useAppSelector((state) => state.todoList.todos);

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const filteredTodoList = useMemo(
    () =>
      todoList.filter(
        (todo) =>
          todo.name.includes(debouncedSearch) ||
          todo.description.includes(debouncedSearch),
      ),
    [debouncedSearch, todoList],
  );

  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto px-4">
      <h1 className="text-3xl font-medium text-center">
        Список задач с таймером
      </h1>
      <Board>
        <CreateForm />
      </Board>
      <SearchInput search={search} setSearch={setSearch} />
      <div className="flex flex-col gap-4">
        {filteredTodoList.map((todo) => (
          <Task todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};
