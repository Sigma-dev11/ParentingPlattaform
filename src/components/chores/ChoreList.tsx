import React, { useState } from "react";

const initialChores = [
  { id: 1, task: "Wash dishes", done: false },
  { id: 2, task: "Vacuum living room", done: false },
  { id: 3, task: "Take out trash", done: false },
];

export default function ChoreList() {
  const [chores, setChores] = useState(initialChores);

  const toggleChore = (id: number) => {
    setChores(chores =>
      chores.map(chore =>
        chore.id === id ? { ...chore, done: !chore.done } : chore
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Chore List</h2>
      <ul>
        {chores.map(chore => (
          <li key={chore.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={chore.done}
              onChange={() => toggleChore(chore.id)}
              className="mr-2"
            />
            <span className={chore.done ? "line-through text-gray-500" : ""}>
              {chore.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}