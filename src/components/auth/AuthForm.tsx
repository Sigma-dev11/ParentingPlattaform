import React, { useState } from "react";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: Handle authentication logic
    alert(`Logging in with ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xs mx-auto mt-8 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold text-gray-800">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="border px-3 py-2 rounded"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border px-3 py-2 rounded"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Sign In
      </button>
    </form>
  );
}