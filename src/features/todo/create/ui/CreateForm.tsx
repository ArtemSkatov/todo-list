import { useForm } from "react-hook-form";
import { Todo } from "@/entities/todo";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { TextArea } from "@/shared/ui/TextArea";
import { TodoCreateDto, useCreateTodo } from "../model";

export const CreateForm = () => {
  const createTodo = useCreateTodo();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoCreateDto>({
    defaultValues: {
      name: "",
      description: "",
      stopTime: "00:10",
      timer: 0,
      status: "start",
    },
  });

  const onSubmit = (data: TodoCreateDto) => {
    const finData: Todo = {
      ...data,
      stopTime:
        Number(data.stopTime.split(":")[0]) * 60 * 60 +
        Number(data.stopTime.split(":")[1]) * 60,
    };

    createTodo(finData);
    reset();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Название"
        {...register("name", {
          required: "Поле обязательное к заполнению",
          minLength: {
            value: 3,
            message: "Минимум 3 символа",
          },
        })}
        error={errors.name?.message}
      />
      <TextArea
        placeholder="Описание задачи"
        {...register("description")}
        error={errors.description?.message}
        rows={6}
      />
      <Input
        type="time"
        placeholder="00:00"
        {...register("stopTime", {
          required: "Поле обязательное к заполнению",
          minLength: {
            value: 3,
            message: "Минимум 3 символа",
          },
          validate: (v) => {
            if (!/^\d{2}:\d{2}$/.test(v)) return false;

            const [h, m] = v.split(":").map(Number);
            return h > 0 || m > 0;
          },
        })}
        error={errors.stopTime?.message}
      />
      <Button>Создать</Button>
    </form>
  );
};
