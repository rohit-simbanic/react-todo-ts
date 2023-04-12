import React from "react";
import { Todo } from "../model/model";
import "./TodoList.css";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  console.log(todos);
  return (
    <>
      {todos.length > 0 ? (
        <div className="todos">
          {todos.map((todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
      ) : (
        "Create your first task now"
      )}
    </>
  );
};

export default TodoList;
