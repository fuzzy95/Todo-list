import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, setTodos }) => {

  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map(todo => (
            <Todo
              key={todo.id}
              text={todo.text}
              todo={todo}
              setTodos={setTodos}
              todos={todos}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
