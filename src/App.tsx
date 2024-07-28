import "./App.css";
import CreateNewTodo from "./components/CreateNewTodo.js";
import TodoList from "./components/TodoList.js";

const App = () => {
  return (
    <div className="todo-container">
      <CreateNewTodo />
      <TodoList />
    </div>
  );
};

export default App;
