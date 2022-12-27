import "../../styles/globals.css";
import React from "react";
import TodosList from "./TodosList";

const Todos = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <TodosList></TodosList>
    </div>
  );
};

export default Todos;
