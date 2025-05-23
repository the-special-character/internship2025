import React, { memo } from "react";
import { Button } from "../ui/button";
import { useTodo } from "@/context/todoContext";

const TodoFilter = () => {
  const { loadTodo } = useTodo();
  console.log("TodoFilter render");
  return (
    <footer className="w-full flex">
      <Button
        className="flex-1 rounded-none"
        onClick={() => loadTodo("all")}
      >
        All
      </Button>
      <Button
        className="flex-1 rounded-none"
        onClick={() => loadTodo("pending")}
      >
        Pending
      </Button>
      <Button
        className="flex-1 rounded-none"
        onClick={() => loadTodo("completed")}
      >
        Completed
      </Button>
    </footer>
  );
};

export default memo(TodoFilter);
