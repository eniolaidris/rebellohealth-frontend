"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5050/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/img1.JPG')" }}
    >
      <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg shadow-lg w-96">
        <form onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
  
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 text-black rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 text-black rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
  
          <button className="w-full bg-blue-600 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}