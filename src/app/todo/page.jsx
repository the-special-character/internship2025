"use client";

import React, { useRef, useState, useEffect } from "react";
import TodoFilter from "@/components/todo/todoFilter";
import TodoForm from "@/components/todo/todoForm";
import TodoList from "@/components/todo/todoList";
import { useCallback } from "react";
import { useMemo } from "react";
import { Context, useLocale } from "@/context/localeContext";

const Test = () => {
  return (
    <main className="flex flex-col items-center gap-4 h-screen">
      <header>
        <h1 className="text-2xl font-semibold">Todo List</h1>
      </header>
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </main>
  );
};

export default Test;

// export default class Test extends PureComponent {
//   state = {
//     todoList: [],
//   };

//   todoTextRef = createRef();

//   componentDidMount() {
//     this.loadTodo("all");
//   }

//   loadTodo = async (ft) => {
//     try {
//       let url = "http://localhost:8000/todoList"

//       if(ft !== "all") {
//         url += `?isDone=${ft === "completed"}`
//       }

//       const res = await fetch(url);
//       const json = await res.json();
//       this.setState({ todoList: json });
//     } catch (error) {}
//   };

//   addTodo = async (event) => {
//     try {
//       event.preventDefault();
//       const todoText = this.todoTextRef.current;

//       const res = await fetch("http://localhost:8000/todoList", {
//         method: "POST",
//         body: JSON.stringify({
//           text: todoText.value,
//           isDone: false,
//         }),
//         headers: {
//           "content-type": "application/json",
//           Accept: "application/json",
//         },
//       });
//       const json = await res.json();

//       this.setState(
//         (state) => {
//           return {
//             todoList: [...state.todoList, json],
//           };
//         },
//         () => {
//           todoText.value = "";
//         }
//       );
//     } catch (error) {}
//   };

//   toggleTodoComplete = async (todoItem, value) => {
//     try {
//       const res = await fetch(`http://localhost:8000/todoList/${todoItem.id}`, {
//         method: "PUT",
//         body: JSON.stringify({
//           ...todoItem,
//           isDone: value,
//         }),
//         headers: {
//           "content-type": "application/json",
//           Accept: "application/json",
//         },
//       });
//       const json = await res.json();

//       this.setState((state) => {
//         const index = state.todoList.findIndex(
//           (item) => item.id === todoItem.id
//         );

//         return {
//           todoList: [
//             ...state.todoList.slice(0, index),
//             json,
//             ...state.todoList.slice(index + 1),
//           ],
//         };
//       });
//     } catch (error) {}
//   };

//   deleteTodo = async (todoItem) => {
//     try {
//       await fetch(`http://localhost:8000/todoList/${todoItem.id}`, {
//         method: "DELETE",
//       });

//       this.setState((state) => {
//         const index = state.todoList.findIndex(
//           (item) => item.id === todoItem.id
//         );

//         return {
//           todoList: [
//             ...state.todoList.slice(0, index),
//             ...state.todoList.slice(index + 1),
//           ],
//         };
//       });
//     } catch (error) {}
//   };

//   render() {
//     const { todoList, filterType } = this.state;

//     return (
//       <main className="flex flex-col items-center gap-4 h-screen">
//         <header>
//           <h1 className="text-2xl font-semibold">Todo List</h1>
//         </header>
//         <TodoForm addTodo={this.addTodo} ref={this.todoTextRef} />
//         <TodoList
//           todoList={todoList}
//           filterType={filterType}
//           toggleTodoComplete={this.toggleTodoComplete}
//           deleteTodo={this.deleteTodo}
//         />
//         <TodoFilter chnageFilterType={this.loadTodo} />
//       </main>
//     );
//   }
// }
