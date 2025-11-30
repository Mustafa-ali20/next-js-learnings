import Card from "@/src/components/card";
import React from "react";

function Login() {
  return (
    <Card>
      <div className="items-center text-center p-20">
        {" "}
        <h1 className="text-5xl mb-3">Welcome to the Login Page</h1>
        <p className="text-2xl">Please log in to continue.</p>
      </div>
    </Card>
  );
}

export default Login;
