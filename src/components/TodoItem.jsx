import React from "react";

const TodoItem = ({ title, status }) => {
  return (
    <div className="flex justify-between item-center w-full mt-5 border-b-2 border-blue-700 py-2">
      <p>{title}</p>
      <button className={`${status ? "bg-red-500" : "bg-transparent"} py-2 px-5`}>
        {" "}
        {status ? "borrar" : "Completar"}{" "}
      </button>
    </div>
  );
};

export default TodoItem;
