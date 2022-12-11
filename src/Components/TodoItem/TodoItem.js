import "./TodoItem.css";
import TodoDate from "../TodoDate/TodoDate";
import { useState } from "react";
function TodoItem(props) {
  const [todoTitle, setTodoTitle] = useState(props.mytask);

  //console.log(props);
  const todoDate = props.mydate; //new Date();

  //let todoTask = props.mytask; //"Buy Books";
  //const priority = props.mypriority; //"medium";
  //console.log(todoDate);

  const clickHandler = () => {
    setTodoTitle("This is the new value");
  };

  return (
    // JSX
    <div className="todo-item">
      <TodoDate thedate={todoDate} />
      <div className="todo-description">
        <h2> {todoTitle}</h2>
        <div className="todo-priority"> {props.mypriority}</div>
        <button onClick={clickHandler}> Change Text</button>
      </div>
    </div>
  );
}

export default TodoItem;

// 1st time -- component Render
// hooks --concept(function) in react in React to work/access with virtual dom
// State - useState(anything that starts with use is a hook)
//rules to remember: 1. Import useState from react package
//                    2. It(useState or any other hook) will always be used inside the function
//                    3. It will never be inside any other function
//                    4. We cannot use one hook within the another one

// useState will always gives a array of two values:
//                       first one: varaiable value
//                       second one: function(to update variable) --it takes the new value of the variable
//                                  and update in virtual DOM(only function of this function)
