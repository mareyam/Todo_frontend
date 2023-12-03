import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <Image
      className="h-24 w-24 rounded-full border-4 border-zinc-200 object-cover"
      src="/images/profile.jpg"
      alt="Profile"
    />
  );
};

export default Profile;
