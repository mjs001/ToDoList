import React, { useState } from "react";
import "./DemoComponent.scss";

export default function DemoComponent() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleNewTodoChange(e) {
    e.preventDefault();
    setNewTodo(e.target.value);
  }
  function handleNewTodo(e) {
    e.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    e.target.reset();
  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div className="demo-component">
      <h1>ToDos:</h1>
      <form onSubmit={handleNewTodo}>
        <input
          placeholder="What am I TODO today?"
          onChange={handleNewTodoChange}
        />
        <ul className="list">
          {todos.map(todo => (
            <li className="listItem" key={todo.id}>
              {todo.text}
              <a href="#" className="X" onClick={() => removeTodo(todo.id)}>
                X
              </a>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
