import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import { Logout, NewTask, Profile, Todo, TodoItem } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="inset-0 absolute top-0 right-0 p-4">
        <Logout />
      </div>

      <Image
        src="/images/image.webp"
        alt="Background Image"
        layout="fill"
        className="object-cover blur-sm"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Profile />
        <NewTask />
        <Todo />
      </div>
    </div>
  );
}
