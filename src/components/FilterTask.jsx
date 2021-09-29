import React from "react";

const FilterTask = ({ currentFilter, setCurrentFilter }) => {
  return (
    <div className="flex justify-around">
      <button
        className={`flex border-2 border-red-500 ${
          currentFilter === "Todas" ? "text-yellow-700" : "text-purple-700"
        }`}
        onClick={() => currentFilter !== "Todas" && setCurrentFilter("Todas")}
      >
        Todas
      </button>
      <button
        className={`flex border-2 border-red-500 ${
          currentFilter === "Completadas"
            ? "text-yellow-700"
            : "text-purple-700"
        }`}
        onClick={() => currentFilter !== "Completadas" && setCurrentFilter("Completadas")}
      >
        Completadas
      </button>
      <button
        className={`flex border-2 border-red-500 ${
          currentFilter === "Incompletas"
            ? "text-yellow-700"
            : "text-purple-700"
        }`}
        onClick={() => currentFilter !== "Incompletas" && setCurrentFilter("Incompletas")}
      >
        Incompletas
      </button>
      <button
        className={`flex border-2 border-red-500 ${
          currentFilter === "Papelera" ? "text-yellow-700" : "text-purple-700"
        }`}
        onClick={() => currentFilter !== "Papelera" && setCurrentFilter("Papelera")}
      >
        Papelera
      </button>
    </div>
  );
};

export default FilterTask;
