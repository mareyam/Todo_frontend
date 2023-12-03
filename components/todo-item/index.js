import React, { useEffect, useState } from "react";
import DotIcon from "@/public/icons/DotIcon";
import CheckCircleIcon from "@/public/icons/CheckCircleIcon";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import Details from "@/components/details";

const TodoItem = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [details, setDetails] = useState(false);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

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
  }, [id]);

  console.log(users);
  return (
    <>
      {users.length > 0 ? (
        <div className="w-72 h-36 px-2 py-2 bg-white block justify-between items-start border-2 rounded-md">
          {users.map((item) => (
            <div key={item._id} className="py-1 flex justify-between">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 mr-2" />
                <p className="px-2">
                  {item.email} {email}
                </p>
              </div>

              <DotIcon
                onClick={toggleDetails}
                className={`w-4 transform ${
                  showDetails && "rotate-180"
                } transition-all duration-300`}
              />

              <div
                className={`transition-all duration-500 ${
                  showDetails ? "max-h-36 opacity-100" : "max-h-0"
                } mt-4`}
              >
                {showDetails && <Details id={item._id} />}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-72 h-42 px-2 py-2 bg-white block justify-between items-start border-2 rounded-md">
          <div className="py-1 flex justify-between">
            <div className="flex items-center">
              <CheckCircleIcon className="h-6 mr-2" />
              <p className="px-2">sample item ^-^</p>
            </div>

            <DotIcon
              onClick={toggleDetails}
              className={`w-4 transform ${
                showDetails && "rotate-180"
              } transition-all duration-300`}
            />
          </div>
          <div
            className={`transition-all duration-500 ${
              showDetails ? "max-h-36 opacity-100" : "max-h-0"
            } mt-4`}
          >
            {showDetails && <Details id={1} />}
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItem;
