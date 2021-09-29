import React from "react";

const TodoItem = ({ item, setTotalTasks, totalTasks }) => {
  const handleCheckbox = () => {
    setTotalTasks(
      totalTasks.map((el) =>
        el.id === item.id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const handleRemove = () => {
    if (item.eliminated) {
      return setTotalTasks(totalTasks.filter((el) => el.id !== item.id));
    }

    setTotalTasks(
      totalTasks.map((el) =>
        el.id === item.id ? { ...el, eliminated: true } : el
      )
    );
  };

  const handleRestart = () => {
    setTotalTasks(
      totalTasks.map((el) =>
        el.id === item.id ? { ...el, eliminated: false } : el
      )
    );
  };

  return (
    <div className="flex justify-between item-center w-full bg-indigo-900 rounded-md py-3 px-4 my-3">
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
          {item.eliminated && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer hover: fill-current hover:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleRestart}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer hover: fill-current hover:text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleRemove}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
