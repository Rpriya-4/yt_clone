
import React, { useState } from "react";
import api from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function CreateChannel() {
  const [form, setForm] = useState({ channelName: "", description: "" });
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/channels", {
        channelName: form.channelName,
        description: form.description,
      });

      // ✅ Safely update user with channel info
      if (res.data && res.data.channel && res.data.channel._id) {
        const updatedUser = { ...user, channelId: res.data.channel._id };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);

        // ✅ Navigate immediately to the new channel page
        navigate(`/channel/${res.data.channel._id}`);
      } else {
        console.warn("Channel created but response missing _id");
        navigate("/"); // fallback if response malformed
      }
    } catch (err) {
      console.error("Channel create error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Error creating channel");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded p-6 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Your Channel
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="channelName"
            placeholder="Channel Name"
            value={form.channelName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <textarea
            name="description"
            placeholder="Channel Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Create Channel
          </button>
        </form>
      </div>
    </div>
  );
}
