import "./NewTodo.css";
import TodoForm from "../TodoForm/TodoForm";

const NewTodo = (props) => {
  const getUserData = (userInfo) => {
    console.log(userInfo);

    const finalInfo = {
      ...userInfo,
      id: Math.random().toString(),
    };

    props.onFinal(finalInfo);
  };
  return (
    <div className="new-Todo">
      <TodoForm onUserSubmit={getUserData} />
    </div>
  );
};

export default NewTodo;
