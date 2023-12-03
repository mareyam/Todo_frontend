import React from "react";
import PlusIcon from "@/public/icons/PlusIcon";

const NewTask = () => {
  return (
    <div className="w-72 relative">
      <input
        type="text"
        placeholder="Add new task"
        className="border border-gray-300 px-4 py-2 rounded-md w-full"
      />
      <div className="absolute  inset-y-0 right-0 flex items-center px-2">
        <button className="bg-red-300  rounded-md p-1">
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default NewTask;
