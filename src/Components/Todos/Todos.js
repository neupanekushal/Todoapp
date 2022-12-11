import "./Todos.css";
import TodoItem from "../TodoItem/TodoItem";
import Card from "../Card/Card";

const Todos = (props) => {
  const task_array = props.todoData;
  return (
    <Card className="todos">
      {task_array.map((todo) => (
        <TodoItem
          mytask={todo.task}
          mydate={todo.date}
          mypriority={todo.priority}
          key={todo.id} // key should be always in the first element
        />
      ))}

      {/* <TodoItem
        mytask={task_array[1].task}
        mydate={task_array[1].date}
        mypriority={task_array[1].priority}
      />
      <TodoItem
        mytask={task_array[2].task}
        mydate={task_array[2].date}
        mypriority={task_array[2].priority}
      />
      <TodoItem
        mytask={task_array[3].task}
        mydate={task_array[3].date}
        mypriority={task_array[3].priority}
      />*/}
    </Card>
  );
};

export default Todos;
