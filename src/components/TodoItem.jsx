import React from "react";
import deleteIcon from "../assets/deleteIcon.svg";
// import back from "../assets/back.svg";

const TodoItem = ({ item, setTotalTasks, totalTasks }) => {

  const handleCheckbox = () => {
    setTotalTasks(
      totalTasks.map((el) =>
        el.id === item.id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const handleDelete = () => {
    setTotalTasks(
      totalTasks.map((el) =>
        el.id === item.id ? { ...el, eliminated: !el.eliminated } : el
      )
    );
  };

  return (
    <div className="flex justify-between item-center w-full border-b border-gray-500 py-2">
      <div className="flex items-center gap-x-4">
        {!item.eliminated && (
          <input
            type="checkbox"
            name=""
            id=""
            checked={item.completed}
            onChange={handleCheckbox}
          />
        )}

        <p className={`${item.completed ? "line-through" : ""}`}>
          {item.title}
        </p>
      </div>

      {item.completed && (
        <div className="flex items-center gap-x-4">
          {/* <img
            src={back}
            alt=""
            className="cursor-pointer"
            onClick={}
          /> */}
          <img
            src={deleteIcon}
            alt=""
            className="cursor-pointer"
            onClick={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default TodoItem;
