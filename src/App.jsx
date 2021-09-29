import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";
import FilterTask from "./components/FilterTask";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [totalTask, setTotalTask] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("Todas");

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTotalTask([
      ...totalTask,
      { id: Date.now(), title: todoTitle, completed: false, eliminated: false },
    ]);
    setTodoTitle("");
  };

  useEffect(() => {
    if (localStorage.getItem("todoList")) {
      setTotalTask(JSON.parse(localStorage.getItem("todoList")));
    } else {
      localStorage.setItem("todoList", []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(totalTask));
  }, [totalTask]);

  return (
    <div className="h-screen bg-blue-700 flex justify-center items-center">
      <div className="w-full bg-blue-900 text-white py-10 rounded md:w-5/12 h-2/3 overflow-scroll">
        <h2 className="text-left">TODO LIST</h2>
        <AddTodo
          setTodoTitle={setTodoTitle}
          handleAddTodo={handleAddTodo}
          todoTitle={todoTitle}
        />

        <TodoList>
          {totalTask.map((item) => {
            switch (currentFilter) {
              case "Todas":
                return !item.eliminated ? (
                  <TodoItem item={item} key={item.id} />
                ) : undefined;
              case "Incompletas":
                return !item.completed && !item.eliminated ? (
                  <TodoItem item={item} key={item.id} />
                ) : undefined;
              case "Completadas":
                return item.completed && !item.eliminated ? (
                  <TodoItem item={item} key={item.id} />
                ) : undefined;
              case "Papelera":
                return item.eliminated ? (
                  <TodoItem item={item} key={item.id} />
                ) : undefined;
              default:
                return !item.eliminated ? (
                  <TodoItem item={item} key={item.id} />
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
