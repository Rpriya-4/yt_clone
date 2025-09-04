// src/pages/EditChannel.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/axios";

export default function EditChannel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ channelName: "", description: "" });

  useEffect(() => {
    async function fetchChannel() {
      try {
        const res = await api.get(`/channels/${id}`);
        setForm({
          channelName: res.data.channel.channelName,
          description: res.data.channel.description,
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchChannel();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/channels/${id}`, form);
      alert("Channel updated!");
      navigate(`/channel/${id}`);
    } catch (err) {
      alert("Error updating channel");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Edit Channel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="channelName"
          value={form.channelName}
          onChange={handleChange}
          placeholder="Channel Name"
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
