import React, { useState } from "react";

export default function ParentJournal() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (entry.trim()) {
      setEntries([entry, ...entries]);
      setEntry("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Parent Journal</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full border rounded p-2 mb-2"
          rows={3}
          placeholder="Write your thoughts..."
          value={entry}
          onChange={e => setEntry(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
        >
          Add Entry
        </button>
      </form>
      <ul>
        {entries.map((e, idx) => (
          <li key={idx} className="mb-2 bg-gray-100 p-2 rounded">{e}</li>
        ))}
      </ul>
    </div>
  );
}