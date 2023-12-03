import React, { useEffect, useState } from "react";
import DotIcon from "@/public/icons/DotIcon";
import CheckCircleIcon from "@/public/icons/CheckCircleIcon";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

const TodoItem = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser" + id)
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  console.log(users);
  return (
    <>
      <div className=" w-72 h-36 px-2 py-2 bg-white block justify-between items-start border-2 rounded-md">
        {users.map((item) => (
          <>
            <div className="py-1 flex justify-between">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 mr-2" />
                <p className="px-2">
                  {item.email} {email}
                </p>
              </div>
              <DotIcon className="w-6" />
              <Link href={`/update/${item._id}`}>
                <button>delete</button>
              </Link>

              <Link href={`/delete/${item._id}`}>
                <button onClick={(e) => handleDelete(item._id)}>delete</button>
              </Link>
            </div>
          </>
        ))}
      </div>
      <hr />
    </>
  );
};

export default TodoItem;
