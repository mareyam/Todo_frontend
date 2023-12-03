import React from "react";
import Link from "next/link";

const Details = (id) => {
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="block w-full">
      <p>Completed: state</p>
      <p>Created At time</p>
      <button
        className="rounded-md w-full mx-auto bg-red-400 text-center"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>

      <Link href={`/update/${id}`}>
        <button className="rounded-md my-2 w-full mx-auto bg-orange-400 text-center">
          Update
        </button>
      </Link>
    </div>
  );
};

export default Details;
