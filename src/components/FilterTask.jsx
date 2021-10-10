import React from "react";

const FilterTask = ({ currentFilter, setCurrentFilter }) => {
  return (
    <div className="flex flex-wrap justify-around mt-5">
      <button
        className={`flex text-xl  mx-1 ${
          currentFilter === "Todas" ? "text-yellow-500 font-bold" : "text-purple-300"
        }`}
        onClick={() => currentFilter !== "Todas" && setCurrentFilter("Todas")}
      >
        Todas
      </button>
      <button
        className={`flex text-xl mx-1 ${
          currentFilter === "Completadas"
            ? "text-yellow-500 font-bold"
            : "text-purple-300"
        }`}
        onClick={() =>
          currentFilter !== "Completadas" && setCurrentFilter("Completadas")
        }
      >
        Completadas
      </button>
      <button
        className={`flex text-xl mx-1 ${
          currentFilter === "Incompletas"
            ? "text-yellow-500 font-bold"
            : "text-purple-300"
        }`}
        onClick={() =>
          currentFilter !== "Incompletas" && setCurrentFilter("Incompletas")
        }
      >
        Incompletas
      </button>
      <button
        className={`flex text-xl mx-1 ${
          currentFilter === "Papelera" ? "text-yellow-500 font-bold" : "text-purple-300"
        }`}
        onClick={() =>
          currentFilter !== "Papelera" && setCurrentFilter("Papelera")
        }
      >
        Papelera
      </button>
    </div>
  );
};

export default FilterTask;
