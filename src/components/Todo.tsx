import React, { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const dispatch = useDispatch();
  const { id, content } = todoProps;

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setIsEdit(false);
  };

  return (
    <div className="todo-wrapper">
      {isEdit ? (
        <input
          className="input-class"
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}

      <div className="icons-todo">
        <IoMdRemoveCircleOutline
          onClick={handleDeleteTodo}
          style={{ marginRight: "5px", fontSize: "19px", cursor: "pointer" }}
        />

        {isEdit ? (
          <FaCheck onClick={handleUpdateTodo} />
        ) : (
          <FaRegEdit
            onClick={() => setIsEdit(true)}
            style={{ justifySelf: "center", cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
