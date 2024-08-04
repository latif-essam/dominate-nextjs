import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const RoomId = ({ ...slug }) => {
  console.log(slug.params.id);
  return (
    <div>
      <h2>RoomId {slug.params.id.join(", ")}</h2>

      <Link href={"/"}>Go Back</Link>
    </div>
  );
};

export default RoomId;
