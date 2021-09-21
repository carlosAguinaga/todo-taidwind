import "./App.css";

function App() {
  return (
    <div className="h-screen bg-blue-700 flex justify-center items-center">
      <div className="w-full bg-blue-900 text-white px-10 py-10 rounded md:w-5/12">
        <h2>TODO LIST</h2>
        <div className="flex w-full mt-5">  
        <input type="text" className="w-3/4 text-blue-500 p-2"/>
        <button className="bg-yellow-500 w-1/4">+</button>
        </div>
        <div>
          <div>
            <p>Tarea</p>
            <button>completada</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
