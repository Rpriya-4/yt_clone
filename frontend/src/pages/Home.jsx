


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockVideos } from "../utils/mockVideos";
import { useAuth } from "../context/AuthContext";
import api from "../utils/axios";

const categories = [
  "All",
  "Education",
  "Music",
  "Lifestyle",
  "Movies",
  "Gaming",
  "Trending",
  "Sports",
  "News",
  "Comedy",
  "Technology",
  "Travel",
];

export default function Home({ query }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchVideos() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const res = await api.get("/videos");
        setVideos(res.data);
      } catch (err) {
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, [user]);

  const videoList = user ? videos : mockVideos.slice(0, 3);

  // Category filter
  let filteredVideos =
    selectedCategory === "All"
      ? videoList
      : videoList.filter((v) => v.category === selectedCategory);

  // Search filter
  if (query?.trim()) {
    filteredVideos = filteredVideos.filter((v) =>
      v.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Categories */}
      {user && (
        <div className="flex gap-3 mb-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 whitespace-nowrap rounded-full font-medium text-sm ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Videos Grid */}
      <div
        className={`grid ${
          user
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        } gap-6`}
      >
        {filteredVideos.map((video) => (
          <Link
            key={video._id || video.id}
            to={`/watch/${video._id || video.id}`}
            className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Thumbnail */}
            <div className="w-full relative">
              <div className="pt-[56.25%] bg-gray-200 relative">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/300x200.png?text=No+Thumbnail";
                  }}
                />
              </div>
            </div>

            {/* Video Info */}
            <div className="p-3 flex flex-col gap-1">
              <h3 className="font-semibold line-clamp-2">{video.title}</h3>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs font-bold">
                  {video.channel?.channelName?.[0]?.toUpperCase() || "U"}
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  {video.channel?.channelName || video.channelName || "Unknown"}
                </p>
              </div>
              <p className="text-xs font-medium text-gray-700">
                {video.views?.toLocaleString()} views
              </p>
            </div>
          </Link>
        ))}
      </div>

      {!user && (
        <p className="text-center text-gray-600 mt-6">
          Please{" "}
          <Link to="/auth" className="text-red-600 font-semibold">
            sign in
          </Link>{" "}
          to watch more videos.
        </p>
      )}
    </div>
  );
}












