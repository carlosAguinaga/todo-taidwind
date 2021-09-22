import React from "react";

const TodoItem = ({ title, status, index, setTodoArray, todoArray }) => {

  const completeOrDeleteTodo = () => {
    if (status) {
      const updatedTodos = [...todoArray];
      updatedTodos.splice(index, 1)
      setTodoArray(updatedTodos);
      console.log("Tarea terminada");

    } else {
      const updatedTodos = [...todoArray];
      updatedTodos[index].status = true;
      setTodoArray(updatedTodos);
    }
  };
  

  return (
    <div className="flex justify-between item-center w-full mt-5 border-b-2 border-blue-700 py-2">
      <p className={`${status ? "line-through" : ""}`}>{title}</p>
      <button className={`${status ? "bg-red-500" : "bg-transparent"} py-2 px-5`} onClick={completeOrDeleteTodo}>
        {" "}
        {status ? "borrar" : "Completar"}{" "}
      </button>
    </div>
  );
};

export default TodoItem;
