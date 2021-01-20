import './App.css';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import { addTodo, clearCompleted, toggleCompleted } from './actions';

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAddTodo = (name) => {
    dispatch(addTodo(name))
  }

  const handleToggleCompleted = (id) =>
  dispatch(toggleCompleted(id))

  const handleClearCompleted = () => {
    dispatch(clearCompleted())
  }

  console.log(state)
  return (
    <div className="App">
      <TodoList todos={state} handleToggleCompleted={handleToggleCompleted} handleClearCompleted={handleClearCompleted}/>
      <TodoForm handleAddTodo={handleAddTodo}/>
    </div>
  );
}

export default App;
