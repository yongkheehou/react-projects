import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todos';

import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo) // returns new arr
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items = {todos} />
    </div>
  );
}

export default App;
