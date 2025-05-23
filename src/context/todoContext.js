"use client";
import { useMemo, useRef, useContext, createContext, useState, useCallback, useEffect } from "react";

export const Context = createContext();

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const todoTextRef = useRef();

  const addTodo = useCallback(async (event) => {
    try {
      event.preventDefault();
      const todoText = todoTextRef.current;

      const text = todoText.value;

      const res = await fetch("http://localhost:8000/todoList", {
        method: "POST",
        body: JSON.stringify({
          text,
          isDone: false,
        }),
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await res.json();

      setTodoList((val) => [...val, json]);

      todoText.value = "";
    } catch (error) {}
  }, []);

  const loadTodo = useCallback(async (ft) => {
    try {
      let url = "http://localhost:8000/todoList";

      if (ft !== "all") {
        url += `?isDone=${ft === "completed"}`;
      }

      const res = await fetch(url);
      const json = await res.json();
      setTodoList(json);
    } catch (error) {}
  }, []);

  const toggleTodoComplete = useCallback(async (todoItem, value) => {
    try {
      const res = await fetch(`http://localhost:8000/todoList/${todoItem.id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...todoItem,
          isDone: value,
        }),
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await res.json();

      setTodoList((val) => {
        const index = val.findIndex((item) => item.id === todoItem.id);
        return [...val.slice(0, index), json, ...val.slice(index + 1)];
      });
    } catch (error) {}
  }, []);

  const deleteTodo = useCallback(async (todoItem) => {
    try {
      await fetch(`http://localhost:8000/todoList/${todoItem.id}`, {
        method: "DELETE",
      });

      setTodoList((val) => {
        const index = val.findIndex((item) => item.id === todoItem.id);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });
    } catch (error) {}
  }, []);

  useEffect(() => {
    loadTodo("all");
  }, [loadTodo]);

  const value = useMemo(
    () => ({
      todoList,
      todoTextRef,
      addTodo,
      loadTodo,
      deleteTodo,
      toggleTodoComplete,
    }),
    [todoList, addTodo, loadTodo, deleteTodo, toggleTodoComplete]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useTodo = () => useContext(Context);

export default TodoProvider;
