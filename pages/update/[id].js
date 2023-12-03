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

  const Update = (e) => {
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
        onSubmit={Update}
        className="mt-8 mb-2  w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <input
            size="lg"
            label="Email"
            color="brown"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            type="password"
            size="lg"
            label="Password"
            color="brown"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <button>submit</button>
        </div>
      </form>
    </div>
  );
}
