import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React!"
    },
    {
      text: "React"
    },
    {
      text: "Belajar!"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar"
    },
    {
      text: "Belajar React!"
    },
    {
      text: "React"
    },
    {
      text: "Belajar!"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
