import React, { memo } from "react";

import TodoListItem from "./todoListItem";
import { useTodo } from "@/context/todoContext";

const TodoList = () => {
  const { todoList } = useTodo();

  return (
    <ul className="w-full flex flex-col gap-4 p-4 flex-1">
      {todoList.map((todoItem) => {
        return (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
          />
        );
      })}
    </ul>
  );
};

export default memo(TodoList);
