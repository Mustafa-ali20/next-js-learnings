import Link from "next/link";
import React from "react";

function F2() {
  return (
    <div>
      <h1>F2 page here </h1>
      <Link href={"/f4"}>F4</Link>
    </div>
  );
}

export default F2;
