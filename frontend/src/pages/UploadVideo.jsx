// src/pages/UploadVideo.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import { useAuth } from "../context/AuthContext";

export default function UploadVideo() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    videoUrl: "",
    thumbnailUrl: "",
    category: "All",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/videos", { ...form, channel: user.channelId });
      alert("Video uploaded!");
      navigate(`/channel/${user.channelId}`);
    } catch (err) {
      alert("Error uploading video");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Video Title"
          className="w-full border rounded px-3 py-2"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Video Description"
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="videoUrl"
          value={form.videoUrl}
          onChange={handleChange}
          placeholder="Video URL"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="thumbnailUrl"
          value={form.thumbnailUrl}
          onChange={handleChange}
          placeholder="Thumbnail URL"
          className="w-full border rounded px-3 py-2"
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option>All</option>
          <option>Education</option>
          <option>Music</option>
          <option>Sports</option>
          <option>Travel</option>
          <option>Movies</option>
        </select>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
