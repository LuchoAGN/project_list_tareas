import React from "react";
import { TodoCounter } from "./components/todo_counter/TodoCounter";
import { TodoSearch } from "./components/todo_search/TodoSearch";
import { TodoList } from "./components/todo_list/TodoList";
import { TodoItem } from "./components/todo_item/TodoItem";
import { CreateTodoButton } from "./components/create_todo_button/CreateTodoButton";
import { ImageTodo } from "./components/image_todo/ImageTodo";
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <div className="main_struct">
        <div className="colum">
          <div className="card">
            <CreateTodoButton/>
            <ImageTodo/> 
          </div>
        </div>
        <div className="colum">
          <div className="card">
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
              {todos.map((todo, index) => (
                <TodoItem key={ index } id={index} text={todo.text}/>
              ))}
              </TodoList>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
