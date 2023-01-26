import React from "react";
import { useRouter } from "next/router";

function Project() {
  const router = useRouter();
  console.log(router);
  return <h1>{"Test Project"}</h1>;
}

export default Project;
