import React, { useState } from "react";
import ListIcon from "@/public/icons/ListIcon";
import ChevronIcon from "@/public/icons/ChevronIcon";
import TodoItem from "@/components/todo-item";

const Todo = () => {
  const [showTodoItem, setShowTodoItem] = useState(false);

  const toggleTodoItem = () => {
    setShowTodoItem(!showTodoItem);
  };

  return (
    <>
      <div className="my-4 w-72 px-2 py-2 bg-red-300 flex justify-between rounded-md">
        <div className="flex w-full">
          <ListIcon />
          <p className="px-2">Your todos</p>
        </div>
        <ChevronIcon
          onClick={toggleTodoItem}
          className={`w-4 transform ${
            showTodoItem && "rotate-180"
          } transition-all duration-300`}
        />
        <div
          className={`${
            showTodoItem && "max-h-36"
          } transition-all duration-300`}
        ></div>
      </div>

      <div
        className={`transition-all duration-500 ${
          showTodoItem ? "max-h-36 opacity-100" : "max-h-0"
        } mt-4`}
      >
        {showTodoItem && <TodoItem />}
      </div>
    </>
  );
};

export default Todo;
