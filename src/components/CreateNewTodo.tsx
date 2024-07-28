import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/slices/todoSlice";

const CreateNewTodo = () => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Add todo");
      return;
    }

    const payload = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo,
    };

    dispatch(createTodo(payload));
    setNewTodo("");
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        className="todo-input"
        type="text"
        placeholder="Add todo"
      />
      <button onClick={handleCreateTodo} className="todo-create-btn">
        Create
      </button>
    </div>
  );
};

export default CreateNewTodo;
