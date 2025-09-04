

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../utils/axios";
import { mockVideos } from "../utils/mockVideos";
import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

export default function VideoPlayer() {
  const { id } = useParams();
  const { user } = useAuth();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);

  const isObjectId = (str) => /^[0-9a-fA-F]{24}$/.test(str);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        if (!isObjectId(id)) {
          const found = mockVideos.find((v) => v.id === id);
          setVideo(found || null);
          setComments([]);
          setLoading(false);
          return;
        }
        const res = await api.get(`/videos/${id}`);
        setVideo(res.data);
        const cRes = await api.get(`/videos/${id}/comments`);
        setComments(cRes.data || []);
      } catch (err) {
        console.error("Error fetching video:", err);
        setVideo(null);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchData();
  }, [id]);

  const handleLike = async () => {
    if (!isObjectId(id)) return;
    try {
      await api.post(`/videos/${id}/like`);
      const res = await api.get(`/videos/${id}`);
      setVideo(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDislike = async () => {
    if (!isObjectId(id)) return;
    try {
      await api.post(`/videos/${id}/dislike`);
      const res = await api.get(`/videos/${id}`);
      setVideo(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim() || !isObjectId(id)) return;
    try {
      const res = await api.post(`/videos/${id}/comments`, { text: newComment });

      // Add user info manually to show avatar/username immediately
      const newCmt = {
        ...res.data,
        user: {
          _id: user.id,
          username: user.username,
        },
      };

      setComments((prev) => [newCmt, ...prev]);
      setNewComment("");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!video) return <div className="p-6 text-center">Video not found</div>;

  const suggested = mockVideos.filter((v) => v.id !== id).slice(0, 8);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left side: Video */}
      <div className="flex-1">
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          {video?.videoUrl ? (
            <video
              key={video.id || video._id}
              src={video.videoUrl}
              controls
              autoPlay
              className="w-full h-full"
            />
          ) : (
            <p className="text-center text-white p-6">No video available</p>
          )}
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold mt-3">{video.title}</h1>

        {/* Channel + Actions */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
              {(video.channel?.channelName?.[0] || video.channelName?.[0] || "U").toUpperCase()}
            </div>
            <div>
              <p className="font-semibold">{video.channel?.channelName || video.channelName}</p>
              <p className="text-sm text-gray-500">{video.views || "0"} views</p>
            </div>
            <button className="ml-4 px-4 py-1.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700">
              Subscribe
            </button>
          </div>

          {/* Like/Share Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ThumbsUp size={18} /> {video.likes?.length || 0}
            </button>
            <button
              onClick={handleDislike}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ThumbsDown size={18} /> {video.dislikes?.length || 0}
            </button>
            <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
              <Share2 size={18} /> Share
            </button>
            <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
              <Download size={18} /> Download
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-gray-700 whitespace-pre-line">{video.description}</p>

        {/* Comments */}
        {isObjectId(id) && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Comments ({comments.length})</h2>

            {user && (
              <div className="flex gap-2 mb-5">
                <div className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
                  {user.username?.[0]?.toUpperCase() || "U"}
                </div>
                <input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 border rounded-full px-4 py-2"
                  placeholder="Add a comment..."
                />
                <button
                  onClick={handleAddComment}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full"
                >
                  Comment
                </button>
              </div>
            )}

            <div className="space-y-5">
              {comments.map((c) => (
                <Comment
                  key={c._id}
                  comment={c}
                  user={user}
                  videoId={id}
                  comments={comments}
                  setComments={setComments}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right side: Suggested Videos */}
      <div className="w-full lg:w-80">
        <h3 className="font-semibold mb-3">Suggested Videos</h3>
        <div className="space-y-3">
          {suggested.map((s) => (
            <Link key={s.id} to={`/watch/${s.id}`} className="flex gap-3 hover:bg-gray-50 rounded-lg p-1">
              <img
                src={s.thumbnailUrl}
                alt={s.title}
                className="w-36 h-20 object-cover rounded-md"
              />
              <div>
                <h4 className="font-medium text-sm line-clamp-2">{s.title}</h4>
                <p className="text-xs text-gray-600">{s.channelName}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Comment({ comment, user, videoId, comments, setComments }) {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEditSave = async () => {
    if (!editedText.trim()) return;
    try {
      const res = await api.put(`/videos/${videoId}/comments/${comment._id}`, {
        text: editedText,
      });
      setComments((prev) =>
        prev.map((c) => (c._id === comment._id ? res.data : c))
      );
      setEditing(false);
      setMenuOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/videos/${videoId}/comments/${comment._id}`);
      setComments((prev) => prev.filter((c) => c._id !== comment._id));
      setMenuOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-start gap-3 relative group">
      <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
        {comment.user?.username?.[0]?.toUpperCase() || "U"}
      </div>

      <div className="flex-1">
        <p className="font-semibold">{comment.user?.username}</p>

        {editing ? (
          <div className="flex gap-2 mt-1">
            <input
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="flex-1 border rounded px-2 py-1"
            />
            <button
              onClick={handleEditSave}
              className="px-2 py-1 bg-green-600 text-white rounded"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-2 py-1 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
          </div>
        ) : (
          <p className="text-gray-700 mt-1">{comment.text}</p>
        )}
      </div>

      {user?.id === comment.user?._id && !editing && (
        <div className="relative ml-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 text-gray-600"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-8 bg-white shadow-lg rounded-md z-20">
              <button
                onClick={() => setEditing(true)}
                className="block w-full px-3 py-1 text-left text-sm font-semibold hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="block w-full px-3 py-1 text-left text-sm font-semibold text-red-600 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}








