const TodoItem = (props) => {
  return (
    <div
      style={{
        textDecoration: props.todo.isCompleted ? "line-through" : "none",
      }}
    >
      {props.todo.title}
    </div>
  );
};

export default TodoItem;
