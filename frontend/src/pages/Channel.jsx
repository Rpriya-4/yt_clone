
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../utils/axios";
import { useAuth } from "../context/AuthContext";

export default function Channel() {
  const { id } = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [openMenu, setOpenMenu] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    async function fetchChannel() {
      try {
        setLoading(true);
        const res = await api.get(`/channels/${id}`);
        if (!mounted) return;
        setChannel(res.data.channel);
        setVideos(res.data.videos || []);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    if (id) fetchChannel();
    return () => {
      mounted = false;
    };
  }, [id]);

  const initials = (channel?.channelName || "U")
    .split(" ")
    .map((w) => w[0]?.toUpperCase())
    .slice(0, 2)
    .join("");

  const isOwner = user?.id && channel?.owner?._id === user.id;

  const handleDeleteChannel = async () => {
    if (!window.confirm("Are you sure you want to delete this channel?")) return;
    try {
      await api.delete(`/channels/${channel._id}`);
      alert("Channel deleted successfully!");
      navigate("/");
    } catch (e) {
      console.error(e);
      alert("Failed to delete channel.");
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="w-full h-56 sm:h-64 md:h-72 bg-gray-200" />
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="h-16 bg-gray-200 rounded-xl mb-4" />
          <div className="h-6 bg-gray-200 rounded w-48 mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="w-full aspect-video bg-gray-200 rounded-xl" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!channel) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold mb-2">Channel not found</h2>
        <p className="text-gray-600 mb-6">The channel you’re looking for doesn’t exist.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  const bannerSrc =
    channel.banner ||
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop";

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Banner */}
      <div className="relative w-full h-36 sm:h-40 md:h-44 lg:h-48 bg-gray-100 overflow-hidden rounded-xl">
        <img
          src={bannerSrc}
          alt="Channel banner"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = bannerSrc;
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl md:text-2xl font-bold select-none">
            {initials}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">{channel.owner?.fullName}</h1>
            <p className="text-gray-900 text-sm">{channel.channelName}</p>
            <p className="text-gray-600 text-sm">
              {videos.length} videos • {channel.subscribers?.length || 0} subscribers
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isOwner ? (
            <>
              <Link
                to={`/channel/${channel._id}/edit`}
                className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition"
              >
                Edit Channel
              </Link>
              <Link
                to={`/upload`}
                className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                + Upload Video
              </Link>
              <button
                onClick={handleDeleteChannel}
                className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
              >
                Delete Channel
              </button>
            </>
          ) : (
            <button
              className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition"
              title="Subscribe"
            >
              Subscribe
            </button>
          )}
        </div>
      </div>

      {/* Description */}
      {channel.description && <p className="text-gray-800 mb-8 leading-relaxed">{channel.description}</p>}

      {/* Videos */}
      <h2 className="text-xl font-semibold mb-4">Videos</h2>
      {videos.length === 0 ? (
        <div className="text-gray-600">
          No videos yet.
          {isOwner && (
            <Link to="/" className="text-blue-600 hover:underline">
              {" "}
              Upload from admin (demo)
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {videos.map((v) => (
            <Link
              to={`/watch/${v._id}`}
              key={v._id}
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-300"
              title={v.title}
            >
              {/* Video Thumbnail */}
              <div className="w-full relative pt-[56.25%] bg-gray-100">
                <img
                  src={v.thumbnailUrl}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/300x200.png?text=No+Thumbnail";
                  }}
                />
              </div>

             {/* video info */}
              <div className="p-3 flex items-center justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold line-clamp-2 text-gray-900">{v.title}</h3>
                  <p className="text-xs font-medium text-gray-600">{v.views?.toLocaleString() || 0} views</p>
                </div>

                {isOwner && (
                  <div className="flex items-center relative">
                    <button
                      className="p-1 rounded hover:bg-gray-100"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenMenu(openMenu === v._id ? null : v._id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="5" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="12" cy="19" r="2" />
                      </svg>
                    </button>

                    {openMenu === v._id && (
                      <span
                        onClick={async (e) => {
                          e.preventDefault();
                          if (!window.confirm("Are you sure you want to delete this video?")) return;
                          try {
                            await api.delete(`/videos/${v._id}`);
                            setVideos(videos.filter(video => video._id !== v._id));
                            alert("Video deleted successfully!");
                          } catch (err) {
                            console.error(err);
                            alert("Failed to delete video");
                          }
                          setOpenMenu(null);
                        }}
                        className="ml-2 font-bold text-red-600 cursor-pointer"
                      >
                        Delete Video
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

































