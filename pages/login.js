import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/login", { email, password })
      .then((result) => {
        toast.success("Login successful", {
          position: toast.POSITION.TOP_LEFT,
        });
        console.log(result);
        //timeout is set so the toast success is visible before redirecting
        setTimeout(() => {
          router.push("/");
        }, 3000);
      })
      .catch((err) => {
        toast.error("Invalid Credentials", {
          position: toast.POSITION.TOP_LEFT,
        });
        console.log(err);
      });
  };

  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/image.webp"
        alt="Background Image"
        layout="fill"
        className="object-cover blur-sm"
      />

      <div className=" h-3/4 w-2/3 m-auto absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-3xl font-bold">Sign in</p>
        <p>Enter credentials for Signin</p>

        <form
          onSubmit={Submit}
          className="mt-8 mb-2  w-80 max-w-screen-lg sm:w-96"
        >
          <div className="text-black mb-4 flex flex-col gap-6">
            <input
              className="bg-transparent border-2 border-gray-400 py-2 px-4 rounded-md"
              placeholder="Email"
              label="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              className="bg-transparent border-2 border-gray-400 py-2 px-4 rounded-md"
              placeholder="Password"
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

            <button className="uppercase font-semibold text-white w-full py-2 px-4 rounded-md bg-amber-800 hover:bg-amber-900 transition duration-300">
              Sign In
            </button>

            <p className="font-semibold text-center">
              Don t have an account
              <Link href={`/signup`}>
                <span className="font-bold"> Sign Up Now</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
