import React, { useState } from 'react';
import './App.css'
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');

  return (
    <div>
      <header>
        <h1>
          Todo List
        </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
};

export default App;
