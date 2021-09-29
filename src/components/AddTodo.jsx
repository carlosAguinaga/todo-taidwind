import React from "react";

const AddTodo = ({  handleAddTodo, setTodoTitle, todoTitle }) => {
  return (
    <form className="flex w-full">
      <input
        type="text"
        className="w-3/4 p-2 text-black outline-none rounded-l-md"
        autoFocus={true}
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button className="bg-yellow-500 w-1/4 rounded-r-md text-xl font-bold" onClick={handleAddTodo}>
        +
      </button>
    </form>
  );
};

export default AddTodo;
