import React, { useMemo } from "react";
import { Todo } from "./Todo";

const delay = (time) => {
  const start = Date.now();
  while (Date.now() - start < time) {
    continue;
  }
  return start;
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.status === nextProps.status) {
    return true;
  }
  return false;
};

const TodoItem = ({ title, id, status, handleDelete, handleToggle }) => {
  /** Expensive calculation */
  const time = delay(200);
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => handleToggle(id)}> {`${status}`}</button>
      <div>{time}</div>
    </div>
  );
};

export const MemoisedTodoItem = React.memo(TodoItem, areEqual);

export default TodoItem;
