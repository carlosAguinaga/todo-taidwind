import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

const list = [
  {
    title: "Alimentar a mandarina",
    status: false,
  },
  {
    title: "Estudiar Javascript",
    status: true,
  },
  {
    title: "Preparar la comida",
    status: false,
  },
];

function App() {
  const [todoArr, setTodoArr] = useState(list);
  const [todoTitle, setTodoTitle] = useState(null)

  const handleAddTodo = (e) => {
    console.log(todoTitle);
    setTodoArr([...todoArr, {title: todoTitle, status: false}])
  }

  return (
    <div className="h-screen bg-blue-700 flex justify-center items-center">
      <div className="w-full bg-blue-900 text-white px-10 py-10 rounded md:w-5/12 h-2/3 overflow-scroll">
        <h2 className="text-left">TODO LIST</h2>
        <AddTodo setTodoTitle={setTodoTitle} handleAddTodo={handleAddTodo}/>
        <TodoList>
          {todoArr.map((item, index) => (
            <TodoItem title={item.title} status={item.status} key={index}/>
          ))}
        </TodoList>
      </div>
    </div>
  );
}

export default App;
