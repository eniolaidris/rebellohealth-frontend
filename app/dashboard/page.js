"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [serviceType, setServiceType] = useState("");
  const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};

  const fetchAppointments = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("https://rebellohealth-backend.onrender.com/api/appointments/my", {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAppointments(data);
        } else {
          setAppointments([]);
        }
      });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const res = await fetch("https://rebellohealth-backend.onrender.com/api/appointments/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ date, time, serviceType })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Appointment booked!");
      setDate("");
      setTime("");
      setServiceType("");
      fetchAppointments();
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Dashboard</h1>
<button
  onClick={handleLogout}
  className="mb-6 bg-red-500 text-white px-4 py-2 rounded"
>
  Logout
</button>

      {/* Booking Form */}
      <form onSubmit={handleBooking} className="bg-gray-500 p-6 rounded mb-8">
        <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>

        <input
          type="date"
          className="w-full p-2 border mb-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Time (e.g. 10:00 AM)"
          className="w-full p-2 border mb-3"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Service Type"
          className="w-full p-2 border mb-3"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Book Appointment
        </button>
      </form>

      {/* Appointment List */}
      <h2 className="text-xl font-semibold mb-4">My Appointments</h2>

      {appointments.length === 0 && (
        <p>No appointments yet.</p>
      )}

      {appointments.map((appt) => (
        <div key={appt._id} className="border p-4 mb-3 rounded">
          <p><strong>Date:</strong> {appt.date}</p>
          <p><strong>Time:</strong> {appt.time}</p>
          <p><strong>Service:</strong> {appt.serviceType}</p>
          <p><strong>Status:</strong> {appt.status}</p>

{appt.status === "booked" && (
  <button
    onClick={async () => {
      const token = localStorage.getItem("token");

      await fetch(`https://rebellohealth-backend.onrender.com/api/appointments/cancel/${appt._id}`, {
        method: "PATCH",
        headers: {
          Authorization: token
        }
      });

      fetchAppointments();
    }}
    className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
  >
    Cancel
  </button>
)}
        </div>
      ))}
    </div>
  );
}
