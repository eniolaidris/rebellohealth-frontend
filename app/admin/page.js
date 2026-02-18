"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const router = useRouter();

  const fetchAppointments = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("https://rebellohealth-backend.onrender.com/api/appointments/all", {
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        if (res.status === 403) {
          alert("Admin access only");
          router.push("/dashboard");
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setAppointments(data);
        }
      });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {appointments.map((appt) => (
        <div key={appt._id} className="border p-4 mb-3 rounded">
          <p><strong>Patient:</strong> {appt.patient.name}</p>
          <p><strong>Email:</strong> {appt.patient.email}</p>
          <p><strong>Date:</strong> {appt.date}</p>
          <p><strong>Time:</strong> {appt.time}</p>
          <p><strong>Service:</strong> {appt.serviceType}</p>
          <p><strong>Status:</strong> {appt.status}</p>
        </div>
      ))}
    </div>
  );
}
