import "./TodoForm.css";
import { useState } from "react";
const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [todoDate, setTodoDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setPriority(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setTodoDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userInformation = {
      task: title,
      priority: priority,
      date: new Date(todoDate),
    };

    console.log(title, priority, todoDate);
    props.onUserSubmit(userInformation);
    setTitle("");
    setPriority("");
    setTodoDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="todo-controls">
        <div className="todo-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className="todo-control">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            onChange={priorityChangeHandler}
            value={priority}
          >
            <option value="high"> High</option>
            <option value="medium"> Medium</option>
            <option value="low"> Low</option>
          </select>
        </div>
        <div className="todo-control">
          <label htmlFor="date"> Date</label>
          <input
            type="date"
            id="date"
            onChange={dateChangeHandler}
            value={todoDate}
          />
        </div>
        <div className="todo-actions">
          <button> Submit </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
