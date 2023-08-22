import { useState, useEffect, useReducer } from 'react';
import initialTodos from './initialTodos';

// (1) Define action types
const INITIALIZE_TODOS = 'INITIALIZE_TODOS';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// (2) Define reducer
const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, { ...action.payload, id: state.length + 1, complete: false }];
    }
    case TOGGLE_TODO: {
      return state.reduce((acc, todo) => {
        if (todo.id === action.payload.id) {
          return [...acc, {
            ...todo,
            complete: !todo.complete,
          }];
        }
        return [...acc, todo];
      }, []);
    }
    case INITIALIZE_TODOS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

const App = () => {
  // (3) Replace useState with useReducer
  const [todos, dispatch] = useReducer(
    todosReducer, 
    initialTodos, 
    (initial) => JSON.parse(localStorage.getItem("todos")) || initial
  );
  // Works as well :D
  // const [todos, dispatch] = useReducer(todosReducer, JSON.parse(localStorage.getItem("todos")) || initialTodos);

  const [newTodoText, setNewTodoText] = useState('');
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (t) => {
    dispatch({ type: TOGGLE_TODO, payload: t })
  }

  const handleChangeInput = (ev) => setNewTodoText(ev.target.value);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    dispatch({
      type: ADD_TODO,
      payload: {
        id: todos.length + 1,
        text: newTodoText,
        complete: false,
      }
    });

    setNewTodoText('');
  }

  return (
    <main>
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
