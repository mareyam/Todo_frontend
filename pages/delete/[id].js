import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

export default function Update() {
  const id = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log("resukt  are");
        console.log(result);

        setEmail(result.data.email);
        setPassword(result.data.password);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Delete = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/updateUser/" + id, { email, password })
      .then((result) => {
        console.log(result);
        setEmail(result.data.email);
        setPassword(result.data.password);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex p-20 justify-center">
      <form
        onSubmit={Delete}
        className="mt-8 mb-2  w-80 max-w-screen-lg sm:w-96"
      >
        <button>submit</button>
      </form>
    </div>
  );
}
