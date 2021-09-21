import React from "react";

const AddTodo = ({ setTodoTitle, handleAddTodo }) => {
  return (
    <div className="flex w-full mt-5">
      <input
        type="text"
        className="w-3/4 p-2 text-black"
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button className="bg-yellow-500 w-1/4" onClick={handleAddTodo}>
        +
      </button>
    </div>
  );
};

export default AddTodo;
