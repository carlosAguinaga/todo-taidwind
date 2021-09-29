import React from "react";

const TodoItem = ({ item, title, status, index, setTodoArray, todoArray }) => {
  // const completeOrDeleteTodo = () => {
  //   if (status) {
  //     const updatedTodos = [...todoArray];
  //     updatedTodos.splice(index, 1);
  //     setTodoArray(updatedTodos);
  //   } else {
  //     const updatedTodos = [...todoArray];
  //     updatedTodos[index].status = true;
  //     setTodoArray(updatedTodos);
  //   }
  // };

  return (
    <div className="flex justify-between item-center w-full border-b border-gray-500 py-2">
      <div className="flex items-center gap-x-4">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => console.log("cambio")}
        />
        <p className={`${item.completed ? "line-through" : ""}`}>{item.title}</p>
      </div>
    </div>
  );
};

export default TodoItem;
