import React, { memo } from "react";

import TodoListItem from "./todoListItem";

const TodoList = ({ todoList, toggleTodoComplete, deleteTodo }) => {
  console.log("TodoList render");

  return (
    <ul className="w-full flex flex-col gap-4 p-4 flex-1">
      {todoList.map((todoItem) => {
        return (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            toggleTodoComplete={toggleTodoComplete}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default memo(TodoList);
