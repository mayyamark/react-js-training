import './App.css';
import initialTodos from './initialTodos';
import { useState, useEffect } from 'react';

// const [form, setForm] = useState([{
//   name: "email",
//   requried: true,
//   maxLenght: 200,
//   value: '',
// }, {...}, {...}]);

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState('');
  console.log(todos);
  // const todos = useState(initialTodos)[0];
  // const setTodos = useState(initialTodos)[1];
  
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      localStorage.setItem("todos", JSON.stringify(initialTodos));
    }
  }, []);

  const handleChange = (t) => {
    // option 1
    // const updatedTodos = todos.reduce((acc, todo) => {
    //   if (todo.id === t.id) {
    //     return [...acc, {
    //       ...todo,
    //       complete: !todo.complete,
    //     }];
    //   }
    //   return [...acc, todo];
    // }, []);

    // option 2
    const updatedTodos = todos.slice();
    const currentTodoIndex = todos.findIndex((todo) => todo.id === t.id);
    updatedTodos[currentTodoIndex] = {
      ...t,
      complete: !t.complete,
    }

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const handleChangeInput = (ev) => setNewTodoText(ev.target.value);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // setTodos((prev) => [
    //   ...prev, {
    //     id: todos.length + 1,
    //     text: newTodoText,
    //     complete: false,
    //   }
    // ]);

    const updatedTodos = [
      ...todos, {
        id: todos.length + 1,
        text: newTodoText,
        complete: false,
      }
    ];

    setTodos(updatedTodos);
    setNewTodoText('');

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <main className='App'>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Enter todo...' 
          value={newTodoText} 
          onChange={handleChangeInput}
        />
        <button type='submit'>Add todo</button>
      </form>
      {todos.map((t) => (
        <section key={t.id}>
          <label htmlFor={t.id}>{t.text}</label>
          <input 
            id={t.id} 
            type='checkbox' 
            checked={t.complete} 
            onChange={() => handleChange(t)}
          />
        </section>
      ))}
    </main>
  );
}

export default App;
