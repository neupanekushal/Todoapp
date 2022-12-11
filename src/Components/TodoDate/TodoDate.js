import "./TodoDate.css";
//import TodoItem from "../TodoItem/TodoItem";
const TodoDate = (props) => {
  const todoDate = props.thedate;
  const mymonth = todoDate.toLocaleString("en-US", { month: "long" });
  const myday = props.thedate.toLocaleString("en-US", { day: "2-digit" });
  const myyear = todoDate.getFullYear();
  return (
    <div className="todo-date">
      <div className="todo-month">{mymonth}</div>
      <div className="todo-day">{myday}</div>
      <div className="todo-year">{myyear}</div>
    </div>
  );
};

export default TodoDate;
