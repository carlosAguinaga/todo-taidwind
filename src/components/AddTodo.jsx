import React from "react";

const AddTodo = ({  handleAddTodo, setTodoTitle, todoTitle }) => {
  return (
    <div className="flex w-full mt-5">
      <input
        type="text"
        className="w-3/4 p-2 text-black"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button className="bg-yellow-500 w-1/4" onClick={handleAddTodo}>
        +
      </button>
    </div>
  );
};

export default AddTodo;
