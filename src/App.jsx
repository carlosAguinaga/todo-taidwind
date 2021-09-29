import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";
import FilterTask from "./components/FilterTask";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [totalTasks, setTotalTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("Todas");

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (todoTitle === "") {
      return console.log('La tarea introducida está vacia');
    }

    if (totalTasks.some(el => el.title === todoTitle)) {
      setTodoTitle("");
      return console.log('Ya hay una tarea con este nombre');
    }

    setTotalTasks([
      ...totalTasks,
      { id: Date.now(), title: todoTitle, completed: false, eliminated: false },
    ]);
    setTodoTitle("");
  };

  useEffect(() => {
    if (localStorage.getItem("todoList")) {
      setTotalTasks(JSON.parse(localStorage.getItem("todoList")));
    } else {
      localStorage.setItem("todoList", []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(totalTasks));
  }, [totalTasks]);

  return (
    <div className="min-h-screen pt-1 bg-blue-700 flex justify-center items-center px-3">
      <div className="w-full text-white py-10 rounded md:w-7/12  overflow-scroll">
        <h1 className="text-center mb-4 text-3xl font-bold">TODO LIST</h1>
        <AddTodo
          setTodoTitle={setTodoTitle}
          handleAddTodo={handleAddTodo}
          todoTitle={todoTitle}
        />

        <TodoList>
          {totalTasks.map((item) => {
            switch (currentFilter) {
              case "Todas":
                return !item.eliminated ? (
                  <TodoItem
                    item={item}
                    key={item.id}
                    totalTasks={totalTasks}
                    setTotalTasks={setTotalTasks}
                  />
                ) : undefined;
              case "Incompletas":
                return !item.completed && !item.eliminated ? (
                  <TodoItem
                    item={item}
                    key={item.id}
                    totalTasks={totalTasks}
                    setTotalTasks={setTotalTasks}
                  />
                ) : undefined;
              case "Completadas":
                return item.completed && !item.eliminated ? (
                  <TodoItem
                    item={item}
                    key={item.id}
                    totalTasks={totalTasks}
                    setTotalTasks={setTotalTasks}
                  />
                ) : undefined;
              case "Papelera":
                return item.eliminated ? (
                  <TodoItem
                    item={item}
                    key={item.id}
                    totalTasks={totalTasks}
                    setTotalTasks={setTotalTasks}
                  />
                ) : undefined;
              default:
                return !item.eliminated ? (
                  <TodoItem
                    item={item}
                    key={item.id}
                    totalTasks={totalTasks}
                    setTotalTasks={setTotalTasks}
                  />
                ) : undefined;
            }
          })}
        </TodoList>

        <FilterTask
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
      </div>
    </div>
  );
}

export default App;
