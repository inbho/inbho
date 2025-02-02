// components/FlightTracker.js
import { useState, useEffect } from 'react';

export default function FlightTracker() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // API integration here
  }, []);

  return (
    <div className="p-6 bg-gray-800 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Live Flight Tracking</h2>
      <div className="grid gap-4">
        {/* Flight cards with real-time data */}
      </div>
    </div>
  );
}