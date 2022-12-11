import "./App.css";

import Todos from "./Components/Todos/Todos";
import NewTodo from "./Components/NewTodo/NewTodo";
import { useState } from "react";

function App() {
  const task_array = [
    {
      id: "T1",
      task: "Reply to email",
      date: new Date(2024, 10, 12),
      priority: "Low",
    },
    {
      id: "T2",
      task: "Plan a Holiday",
      date: new Date(2023, 9, 14),
      priority: "Medium",
    },
    {
      id: "T3",
      task: "Business trip",
      date: new Date(2023, 4, 12),
      priority: "High",
    },
    {
      id: "T4",
      task: "Shoppen",
      date: new Date(2022, 12, 23),
      priority: "very low",
    },
  ];

  const [allTodo, setAllTodo] = useState(task_array);
  const onAddUser = (finalData) => {
    setAllTodo((prevData) => {
      return [finalData, ...prevData];
    });
    console.log(finalData);
  };

  return (
    <div className="App">
      <NewTodo onFinal={onAddUser} />
      <Todos todoData={allTodo} />
    </div>
  );
}

export default App;
