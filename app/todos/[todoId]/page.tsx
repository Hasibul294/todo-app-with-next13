import "../../../styles/globals.css";
import React from "react";
import { Todo } from "../../../types";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();
  return todo;
};

async function TodoIdPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        # {todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "YES" : "NO"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoIdPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  // for this demo, we are only pre building the first 10 page to avoid being rate limited by the demo api
  const todoSlice = todos.splice(0, 10);

  return todoSlice.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
