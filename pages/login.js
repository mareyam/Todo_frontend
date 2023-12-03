import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { email, password })
      .then((result) => {
        console.log(result);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex p-20 justify-center">
      <form
        onSubmit={Submit}
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
