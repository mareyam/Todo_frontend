import React, { useState } from "react";
import PlusIcon from "@/public/icons/PlusIcon";

const NewTask = () => {
  const [task, setTask] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/todos", { text })
      .then((result) => {
        toast.success("Task added successfully", {
          position: toast.POSITION.TOP_LEFT,
        });
        console.log(result);
        //timeout is set so the toast success is visible before redirecting
        setTimeout(() => {
          router.push("/");
        }, 1000);
      })
      .catch((err) => {
        toast.error("Enter Task", {
          position: toast.POSITION.TOP_LEFT,
        });
        console.log(err);
      });
  };

  return (
    <div className="w-72 relative">
      <form onSubmit={Submit}>
        <input
          type="text"
          placeholder="Add new task"
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />
      </form>
      <div className="absolute  inset-y-0 right-0 flex items-center px-2">
        <button type="submit" className="bg-red-300  rounded-md p-1">
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default NewTask;
