import React, { forwardRef, memo } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTodo } from "@/context/todoContext";

const TodoForm = () => {
  const { addTodo, todoTextRef } = useTodo();
  return (
    <form onSubmit={addTodo}>
      <div className="*:not-first:mt-2">
        <Label htmlFor="todoText" className="sr-only">
          Todo Text
        </Label>
        <div className="flex rounded-md shadow-xs">
          <Input
            ref={todoTextRef}
            id="todoText"
            className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          />
          <Button className="rounded-s-none">Add Todo</Button>
        </div>
      </div>
    </form>
  );
};

export default memo(TodoForm);
