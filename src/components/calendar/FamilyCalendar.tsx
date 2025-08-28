import React from "react";

export default function FamilyCalendar() {
  // Placeholder data
  const events = [
    { date: "2025-08-30", title: "Parent-Teacher Conference" },
    { date: "2025-09-02", title: "Family Dinner" },
  ];

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Family Calendar</h2>
      <ul>
        {events.map((event, idx) => (
          <li key={idx} className="mb-2 flex justify-between">
            <span className="font-medium">{event.title}</span>
            <span className="text-gray-500">{event.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}