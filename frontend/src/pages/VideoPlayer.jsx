// // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // // // // // import { sampleVideos } from "../utils/mockData";
// // // // // // // // // // // // import Comment from "../components/Comment";
// // // // // // // // // // // // import { useAuth } from "../context/AuthContext";

// // // // // // // // // // // // function VideoPlayer() {
// // // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // // //   const { user } = useAuth();
// // // // // // // // // // // //   const video = sampleVideos.find((v) => v.videoId === id);

// // // // // // // // // // // //   const [comments, setComments] = useState(video?.comments || []);
// // // // // // // // // // // //   const [newComment, setNewComment] = useState("");

// // // // // // // // // // // //   if (!video) return <p className="p-4">Video not found!</p>;

// // // // // // // // // // // //   const handleAddComment = () => {
// // // // // // // // // // // //     if (!user) return alert("Please sign in to comment");
// // // // // // // // // // // //     if (!newComment.trim()) return;

// // // // // // // // // // // //     const comment = {
// // // // // // // // // // // //       commentId: Date.now().toString(),
// // // // // // // // // // // //       username: user.username,
// // // // // // // // // // // //       text: newComment,
// // // // // // // // // // // //     };
// // // // // // // // // // // //     setComments([comment, ...comments]);
// // // // // // // // // // // //     setNewComment("");
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="p-4">
// // // // // // // // // // // //       <video src={video.videoUrl} controls className="w-full rounded" />

// // // // // // // // // // // //       <h2 className="text-xl font-bold mt-2">{video.title}</h2>
// // // // // // // // // // // //       <p className="text-gray-700">{video.description}</p>
// // // // // // // // // // // //       <p className="text-sm text-gray-500">{video.views} views</p>

// // // // // // // // // // // //       {/* Like / Dislike */}
// // // // // // // // // // // //       <div className="flex gap-3 my-2">
// // // // // // // // // // // //         <button className="px-3 py-1 bg-gray-200 rounded">👍 {video.likes}</button>
// // // // // // // // // // // //         <button className="px-3 py-1 bg-gray-200 rounded">👎 {video.dislikes}</button>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Comments */}
// // // // // // // // // // // //       <div className="mt-4">
// // // // // // // // // // // //         <h3 className="font-semibold mb-2">Comments</h3>
// // // // // // // // // // // //         {user && (
// // // // // // // // // // // //           <div className="flex gap-2 mb-3">
// // // // // // // // // // // //             <input
// // // // // // // // // // // //               type="text"
// // // // // // // // // // // //               placeholder="Add a comment"
// // // // // // // // // // // //               value={newComment}
// // // // // // // // // // // //               onChange={(e) => setNewComment(e.target.value)}
// // // // // // // // // // // //               className="flex-1 border rounded px-3 py-1"
// // // // // // // // // // // //             />
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={handleAddComment}
// // // // // // // // // // // //               className="px-3 py-1 bg-blue-500 text-white rounded"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Post
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //         {comments.map((c) => (
// // // // // // // // // // // //           <Comment key={c.commentId} comment={c} />
// // // // // // // // // // // //         ))}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // // export default VideoPlayer;


// // // // // // // // // // // // ------------------------------
// // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // // // // // // import { sampleVideos } from "../utils/mockData.js";
// // // // // // // // // // // import { ThumbsUp, ThumbsDown } from "lucide-react";

// // // // // // // // // // // function VideoPlayer() {
// // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // //   const video = sampleVideos.find((v) => v.videoId === id);

// // // // // // // // // // //   const [likes, setLikes] = useState(video?.likes || 0);
// // // // // // // // // // //   const [dislikes, setDislikes] = useState(video?.dislikes || 0);
// // // // // // // // // // //   const [comments, setComments] = useState(video?.comments || []);
// // // // // // // // // // //   const [newComment, setNewComment] = useState("");
// // // // // // // // // // //   const [subscribed, setSubscribed] = useState(false);

// // // // // // // // // // //   if (!video) return <p className="p-4">Video not found.</p>;

// // // // // // // // // // //   const handleComment = () => {
// // // // // // // // // // //     if (newComment.trim()) {
// // // // // // // // // // //       const comment = {
// // // // // // // // // // //         commentId: Date.now().toString(),
// // // // // // // // // // //         username: "Guest",
// // // // // // // // // // //         text: newComment,
// // // // // // // // // // //       };
// // // // // // // // // // //       setComments([...comments, comment]);
// // // // // // // // // // //       setNewComment("");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="flex flex-col md:flex-row p-4 gap-4">
// // // // // // // // // // //       {/* Main Video */}
// // // // // // // // // // //       <div className="flex-1">
// // // // // // // // // // //         <div className="relative w-full pb-[56.25%] bg-black">
// // // // // // // // // // //           <video
// // // // // // // // // // //             src={video.videoUrl}
// // // // // // // // // // //             controls
// // // // // // // // // // //             className="absolute top-0 left-0 w-full h-full"
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Title + views */}
// // // // // // // // // // //         <h1 className="mt-2 text-lg font-bold">{video.title}</h1>
// // // // // // // // // // //         <p className="text-sm text-gray-600">
// // // // // // // // // // //           {video.views} views • {video.channelName}
// // // // // // // // // // //         </p>

// // // // // // // // // // //         {/* Like/Dislike */}
// // // // // // // // // // //         <div className="flex items-center gap-4 my-2">
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={() => setLikes(likes + 1)}
// // // // // // // // // // //             className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
// // // // // // // // // // //           >
// // // // // // // // // // //             <ThumbsUp size={18} /> {likes}
// // // // // // // // // // //           </button>
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={() => setDislikes(dislikes + 1)}
// // // // // // // // // // //             className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
// // // // // // // // // // //           >
// // // // // // // // // // //             <ThumbsDown size={18} /> {dislikes}
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Channel info + Subscribe */}
// // // // // // // // // // //         <div className="flex items-center justify-between mt-3 border-t border-b py-2">
// // // // // // // // // // //           <div className="flex items-center gap-2">
// // // // // // // // // // //             <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
// // // // // // // // // // //               {video.channelName.charAt(0)}
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <div>
// // // // // // // // // // //               <h3 className="font-semibold">{video.channelName}</h3>
// // // // // // // // // // //               <p className="text-sm text-gray-500">5200 subscribers</p>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={() => setSubscribed(!subscribed)}
// // // // // // // // // // //             className={`px-4 py-1 rounded ${
// // // // // // // // // // //               subscribed
// // // // // // // // // // //                 ? "bg-gray-200 text-black hover:bg-gray-300"
// // // // // // // // // // //                 : "bg-red-600 text-white hover:bg-red-700"
// // // // // // // // // // //             }`}
// // // // // // // // // // //           >
// // // // // // // // // // //             {subscribed ? "Subscribed" : "Subscribe"}
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Description */}
// // // // // // // // // // //         <p className="my-2">{video.description}</p>

// // // // // // // // // // //         {/* Comments */}
// // // // // // // // // // //         <div className="mt-4">
// // // // // // // // // // //           <h2 className="font-semibold mb-2">Comments ({comments.length})</h2>
// // // // // // // // // // //           <div className="flex gap-2 mb-2">
// // // // // // // // // // //             <input
// // // // // // // // // // //               value={newComment}
// // // // // // // // // // //               onChange={(e) => setNewComment(e.target.value)}
// // // // // // // // // // //               placeholder="Add a comment..."
// // // // // // // // // // //               className="border px-2 py-1 flex-1 rounded"
// // // // // // // // // // //             />
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={handleComment}
// // // // // // // // // // //               className="px-3 py-1 bg-blue-500 text-white rounded"
// // // // // // // // // // //             >
// // // // // // // // // // //               Post
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           {comments.map((c) => (
// // // // // // // // // // //             <p key={c.commentId} className="mb-1">
// // // // // // // // // // //               <span className="font-semibold">{c.username}: </span>
// // // // // // // // // // //               {c.text}
// // // // // // // // // // //             </p>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Suggested Videos */}
// // // // // // // // // // //       <div className="w-full md:w-1/3">
// // // // // // // // // // //         <h2 className="font-semibold mb-2">Suggested Videos</h2>
// // // // // // // // // // //         {sampleVideos
// // // // // // // // // // //           .filter((v) => v.videoId !== video.videoId)
// // // // // // // // // // //           .map((v) => (
// // // // // // // // // // //             <Link
// // // // // // // // // // //               to={`/watch/${v.videoId}`}
// // // // // // // // // // //               key={v.videoId}
// // // // // // // // // // //               className="flex gap-2 mb-3"
// // // // // // // // // // //             >
// // // // // // // // // // //               <img
// // // // // // // // // // //                 src={v.thumbnailUrl}
// // // // // // // // // // //                 alt={v.title}
// // // // // // // // // // //                 className="w-32 h-20 object-cover rounded"
// // // // // // // // // // //               />
// // // // // // // // // // //               <div>
// // // // // // // // // // //                 <h3 className="text-sm font-semibold line-clamp-2">
// // // // // // // // // // //                   {v.title}
// // // // // // // // // // //                 </h3>
// // // // // // // // // // //                 <p className="text-xs text-gray-500">{v.channelName}</p>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </Link>
// // // // // // // // // // //           ))}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default VideoPlayer;
// // // // // // // // // // // // ---------------------------



// // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // import { useParams } from "react-router-dom";

// // // // // // // // // // export default function VideoPlayer() {
// // // // // // // // // //   const { id } = useParams();
// // // // // // // // // //   const [video, setVideo] = useState(null);
// // // // // // // // // //   const [comments, setComments] = useState([]);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchVideo = async () => {
// // // // // // // // // //       const res = await fetch(`http://localhost:5000/api/videos/${id}`);
// // // // // // // // // //       const data = await res.json();
// // // // // // // // // //       setVideo(data);
// // // // // // // // // //     };
// // // // // // // // // //     const fetchComments = async () => {
// // // // // // // // // //       const res = await fetch(`http://localhost:5000/api/videos/${id}/comments`);
// // // // // // // // // //       const data = await res.json();
// // // // // // // // // //       setComments(data);
// // // // // // // // // //     };
// // // // // // // // // //     fetchVideo();
// // // // // // // // // //     fetchComments();
// // // // // // // // // //   }, [id]);

// // // // // // // // // //   if (!video) return <p>Loading...</p>;

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="p-4">
// // // // // // // // // //       <video controls src={video.videoUrl} className="w-full h-[400px] bg-black" />
// // // // // // // // // //       <h2 className="mt-2 text-xl font-bold">{video.title}</h2>
// // // // // // // // // //       <p className="text-gray-600">{video.description}</p>

// // // // // // // // // //       <h3 className="mt-4 font-semibold">Comments</h3>
// // // // // // // // // //       {comments.map((c) => (
// // // // // // // // // //         <div key={c._id} className="border-b py-2">
// // // // // // // // // //           <strong>{c.user.username}:</strong> {c.text}
// // // // // // // // // //         </div>
// // // // // // // // // //       ))}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // // // -----------------------@------






// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // // import api from "../utils/axios";
// // // // // // // // // import { useAuth } from "../context/AuthContext";

// // // // // // // // // export default function VideoPlayer() {
// // // // // // // // //   const { id } = useParams(); // video id from URL
// // // // // // // // //   const { user, token } = useAuth();

// // // // // // // // //   const [video, setVideo] = useState(null);
// // // // // // // // //   const [comments, setComments] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // //   const [newComment, setNewComment] = useState("");

// // // // // // // // //   // fetch video + comments
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchVideoData = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const res = await api.get(`/videos/${id}`);
// // // // // // // // //         setVideo(res.data);

// // // // // // // // //         const commentsRes = await api.get(`/videos/${id}/comments`);
// // // // // // // // //         setComments(commentsRes.data);
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error("Error fetching video:", err);
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //     fetchVideoData();
// // // // // // // // //   }, [id]);

// // // // // // // // //   // add comment
// // // // // // // // //   const handleAddComment = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (!newComment.trim()) return;

// // // // // // // // //     try {
// // // // // // // // //       const res = await api.post(
// // // // // // // // //         `/videos/${id}/comments`,
// // // // // // // // //         { text: newComment },
// // // // // // // // //         {
// // // // // // // // //           headers: {
// // // // // // // // //             Authorization: `Bearer ${token}`,
// // // // // // // // //           },
// // // // // // // // //         }
// // // // // // // // //       );

// // // // // // // // //       setComments([...comments, res.data]); // append new comment
// // // // // // // // //       setNewComment("");
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error("Error adding comment:", err);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   if (loading) return <p className="p-4">Loading video...</p>;
// // // // // // // // //   if (!video) return <p className="p-4">Video not found</p>;

// // // // // // // // //   return (
// // // // // // // // //     <div className="p-4 max-w-4xl mx-auto">
// // // // // // // // //       {/* Video Player */}
// // // // // // // // //       <video controls className="w-full rounded-lg shadow">
// // // // // // // // //         <source src={video.videoUrl} type="video/mp4" />
// // // // // // // // //         Your browser does not support the video tag.
// // // // // // // // //       </video>

// // // // // // // // //       {/* Video Info */}
// // // // // // // // //       <h2 className="text-2xl font-bold mt-3">{video.title}</h2>
// // // // // // // // //       <p className="text-gray-600">{video.description}</p>
// // // // // // // // //       <p className="text-sm text-gray-500 mt-1">
// // // // // // // // //         {video.views} views • {video.channel?.channelName}
// // // // // // // // //       </p>

// // // // // // // // //       {/* Comments Section */}
// // // // // // // // //       <div className="mt-6">
// // // // // // // // //         <h3 className="text-lg font-semibold mb-2">
// // // // // // // // //           Comments ({comments.length})
// // // // // // // // //         </h3>

// // // // // // // // //         {/* Add Comment */}
// // // // // // // // //         {user ? (
// // // // // // // // //           <form onSubmit={handleAddComment} className="flex gap-2 mb-4">
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               value={newComment}
// // // // // // // // //               onChange={(e) => setNewComment(e.target.value)}
// // // // // // // // //               placeholder="Add a comment..."
// // // // // // // // //               className="flex-1 border p-2 rounded"
// // // // // // // // //             />
// // // // // // // // //             <button
// // // // // // // // //               type="submit"
// // // // // // // // //               className="bg-red-600 text-white px-4 py-2 rounded"
// // // // // // // // //             >
// // // // // // // // //               Post
// // // // // // // // //             </button>
// // // // // // // // //           </form>
// // // // // // // // //         ) : (
// // // // // // // // //           <p className="text-gray-500">Sign in to add a comment</p>
// // // // // // // // //         )}

// // // // // // // // //         {/* Comments List */}
// // // // // // // // //         <div className="space-y-3">
// // // // // // // // //           {comments.map((c) => (
// // // // // // // // //             <div key={c._id} className="border-b pb-2">
// // // // // // // // //               <p className="font-semibold">{c.user?.username || "Anonymous"}</p>
// // // // // // // // //               <p>{c.text}</p>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // // // ------------------#-------------



// // // // // // // // import React from "react";
// // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // import { mockVideos } from "../utils/mockVideos";
// // // // // // // // import { mockChannels } from "../utils/mockChannels";

// // // // // // // // export default function VideoPlayer() {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const video = mockVideos.find((v) => v.id === id);

// // // // // // // //   if (!video) return <p className="p-4">Video not found</p>;

// // // // // // // //   return (
// // // // // // // //     <div className="p-4 max-w-4xl mx-auto">
// // // // // // // //       {/* Video Player */}
// // // // // // // //       <video controls className="w-full rounded-lg shadow">
// // // // // // // //         <source src={video.videoUrl} type="video/mp4" />
// // // // // // // //         Your browser does not support the video tag.
// // // // // // // //       </video>

// // // // // // // //       {/* Video Info */}
// // // // // // // //       <h2 className="text-2xl font-bold mt-3">{video.title}</h2>
// // // // // // // //       <p className="text-gray-600">{video.description}</p>
// // // // // // // //       <p className="text-sm text-gray-500 mt-1">
// // // // // // // //         {video.views} views • {video.channelName}
// // // // // // // //       </p>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // // // ------------#-----






// // // // // // // // import React from "react";
// // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // import { mockVideos } from "../utils/mockVideos";

// // // // // // // // export default function VideoPlayer() {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const video = mockVideos.find((v) => v.id === id);

// // // // // // // //   if (!video) return <p className="p-4">Video not found</p>;

// // // // // // // //   return (
// // // // // // // //     <div className="p-4 max-w-4xl mx-auto">
// // // // // // // //       <video controls className="w-full rounded-lg shadow">
// // // // // // // //         <source src={video.videoUrl} type="video/mp4" />
// // // // // // // //       </video>

// // // // // // // //       <h2 className="text-2xl font-bold mt-3">{video.title}</h2>
// // // // // // // //       <p className="text-gray-600">{video.description}</p>
// // // // // // // //       <p className="text-sm text-gray-500 mt-1">
// // // // // // // //         {video.views} views • {video.channelName}
// // // // // // // //       </p>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // -------------------+-----




































// // // // // // // // ----------------------------------------

// // // // // // // // // src/pages/VideoPlayer.jsx
// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // // // import { useAuth } from "../context/AuthContext";
// // // // // // // // import api from "../utils/axios";
// // // // // // // // import { mockVideos } from "../utils/mockVideos";
// // // // // // // // import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

// // // // // // // // export default function VideoPlayer() {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const { user } = useAuth();
// // // // // // // //   const [video, setVideo] = useState(null);
// // // // // // // //   const [comments, setComments] = useState([]);
// // // // // // // //   const [newComment, setNewComment] = useState("");

// // // // // // // //   // fetch video + comments
// // // // // // // //   // useEffect(() => {
// // // // // // // //   //   async function fetchVideo() {
// // // // // // // //   //     try {
// // // // // // // //   //       const res = await api.get(`/videos/${id}`);
// // // // // // // //   //       setVideo(res.data);
// // // // // // // //   //     } catch (err) {
// // // // // // // //   //       console.error(err);
// // // // // // // //   //     }
// // // // // // // //   //   }
// // // // // // // //   //   async function fetchComments() {
// // // // // // // //   //     try {
// // // // // // // //   //       const res = await api.get(`/videos/${id}/comments`);
// // // // // // // //   //       setComments(res.data);
// // // // // // // //   //     } catch (err) {
// // // // // // // //   //       console.error(err);
// // // // // // // //   //     }
// // // // // // // //   //   }
// // // // // // // //   //   fetchVideo();
// // // // // // // //   //   fetchComments();
// // // // // // // //   // }, [id]);









// // // // // // // // useEffect(() => {
// // // // // // // //   const found = mockVideos.find((v) => v.id === id);
// // // // // // // //   setVideo(found);
// // // // // // // // }, [id]);









// // // // // // // //   const handleLike = async () => {
// // // // // // // //     try {
// // // // // // // //       await api.post(`/videos/${id}/like`);
// // // // // // // //       const res = await api.get(`/videos/${id}`);
// // // // // // // //       setVideo(res.data);
// // // // // // // //     } catch {}
// // // // // // // //   };

// // // // // // // //   const handleDislike = async () => {
// // // // // // // //     try {
// // // // // // // //       await api.post(`/videos/${id}/dislike`);
// // // // // // // //       const res = await api.get(`/videos/${id}`);
// // // // // // // //       setVideo(res.data);
// // // // // // // //     } catch {}
// // // // // // // //   };

// // // // // // // //   const handleAddComment = async () => {
// // // // // // // //     if (!newComment.trim()) return;
// // // // // // // //     try {
// // // // // // // //       const res = await api.post(`/videos/${id}/comments`, { text: newComment });
// // // // // // // //       setComments((prev) => [...prev, res.data]);
// // // // // // // //       setNewComment("");
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error(err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   if (!video) return <div className="p-6">Loading...</div>;

// // // // // // // //   // Suggested videos (dummy data)
// // // // // // // //   const suggested = mockVideos.filter((v) => v.id !== id).slice(0, 5);

// // // // // // // //   return (
// // // // // // // //     <div className="flex flex-col lg:flex-row gap-6 p-4">
// // // // // // // //       {/* Left side: Video */}
// // // // // // // //       <div className="flex-1">
// // // // // // // //         <div className="aspect-video bg-black rounded-lg overflow-hidden">
// // // // // // // //           <video src={video.videoUrl} controls autoPlay className="w-full h-full" />
// // // // // // // //         </div>

// // // // // // // //         <h1 className="text-xl font-bold mt-4">{video.title}</h1>

// // // // // // // //         {/* Channel + Subscribe */}
// // // // // // // //         <div className="flex justify-between items-center mt-4">
// // // // // // // //           <div className="flex items-center gap-3">
// // // // // // // //             <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
// // // // // // // //               {video.channel?.channelName[0]}
// // // // // // // //             </div>
// // // // // // // //             <div>
// // // // // // // //               <p className="font-semibold">{video.channel?.channelName}</p>
// // // // // // // //               <p className="text-sm text-gray-500">{video.views} views</p>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //           <button className="px-4 py-2 bg-red-600 text-white rounded-full">
// // // // // // // //             Subscribe
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //         {/* Actions */}
// // // // // // // //         <div className="flex gap-4 mt-3">
// // // // // // // //           <button onClick={handleLike} className="flex items-center gap-1">
// // // // // // // //             <ThumbsUp size={20} /> {video.likes?.length || 0}
// // // // // // // //           </button>
// // // // // // // //           <button onClick={handleDislike} className="flex items-center gap-1">
// // // // // // // //             <ThumbsDown size={20} /> {video.dislikes?.length || 0}
// // // // // // // //           </button>
// // // // // // // //           <button className="flex items-center gap-1">
// // // // // // // //             <Share2 size={20} /> Share
// // // // // // // //           </button>
// // // // // // // //           <button className="flex items-center gap-1">
// // // // // // // //             <Download size={20} /> Download
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //         {/* Description */}
// // // // // // // //         <p className="mt-4 text-gray-700">{video.description}</p>

// // // // // // // //         {/* Comments */}
// // // // // // // //         <div className="mt-6">
// // // // // // // //           <h2 className="text-lg font-semibold mb-3">
// // // // // // // //             Comments ({comments.length})
// // // // // // // //           </h2>

// // // // // // // //           {user && (
// // // // // // // //             <div className="flex gap-2 mb-4">
// // // // // // // //               <input
// // // // // // // //                 value={newComment}
// // // // // // // //                 onChange={(e) => setNewComment(e.target.value)}
// // // // // // // //                 className="flex-1 border rounded px-3 py-2"
// // // // // // // //                 placeholder="Add a comment..."
// // // // // // // //               />
// // // // // // // //               <button
// // // // // // // //                 onClick={handleAddComment}
// // // // // // // //                 className="px-4 py-2 bg-blue-600 text-white rounded"
// // // // // // // //               >
// // // // // // // //                 Comment
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           )}

// // // // // // // //           <div className="space-y-3">
// // // // // // // //             {comments.map((c) => (
// // // // // // // //               <div key={c._id} className="flex justify-between items-start">
// // // // // // // //                 <div>
// // // // // // // //                   <p className="font-semibold">{c.user?.username}</p>
// // // // // // // //                   <p className="text-gray-700">{c.text}</p>
// // // // // // // //                 </div>
// // // // // // // //                 {/* 3-dot menu for edit/delete (only if owner) */}
// // // // // // // //                 {user?.id === c.user?._id && (
// // // // // // // //                   <button className="text-gray-500">⋮</button>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Right side: Suggested Videos */}
// // // // // // // //       <div className="w-full lg:w-80">
// // // // // // // //         <h3 className="font-semibold mb-3">Suggested Videos</h3>
// // // // // // // //         <div className="space-y-4">
// // // // // // // //           {suggested.map((v) => (
// // // // // // // //             <Link key={v.id} to={`/watch/${v.id}`} className="flex gap-3">
// // // // // // // //               <img
// // // // // // // //                 src={v.thumbnailUrl}
// // // // // // // //                 alt={v.title}
// // // // // // // //                 className="w-36 h-20 object-cover rounded"
// // // // // // // //               />
// // // // // // // //               <div>
// // // // // // // //                 <h4 className="font-semibold text-sm line-clamp-2">{v.title}</h4>
// // // // // // // //                 <p className="text-xs text-gray-600">{v.channelName}</p>
// // // // // // // //               </div>
// // // // // // // //             </Link>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // // ------------------------------
















// // // // // // // // // src/pages/VideoPlayer.jsx
// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // // // import { useAuth } from "../context/AuthContext";
// // // // // // // // import api from "../utils/axios";
// // // // // // // // import { mockVideos } from "../utils/mockVideos";
// // // // // // // // import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

// // // // // // // // export default function VideoPlayer() {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const { user } = useAuth();

// // // // // // // //   const [video, setVideo] = useState(null);
// // // // // // // //   const [comments, setComments] = useState([]);
// // // // // // // //   const [newComment, setNewComment] = useState("");
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   // ✅ fetch video + comments
// // // // // // // //   useEffect(() => {
// // // // // // // //     async function fetchData() {
// // // // // // // //       setLoading(true);

// // // // // // // //       // ---- Case 1: Mock video ----
// // // // // // // //       if (id.startsWith("v")) {
// // // // // // // //         const found = mockVideos.find((v) => v.id === id);
// // // // // // // //         setVideo(found || null);
// // // // // // // //         setComments([]); // mock ke liye empty comments
// // // // // // // //         setLoading(false);
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       // ---- Case 2: Real DB video ----
// // // // // // // //       try {
// // // // // // // //         const res = await api.get(`/videos/${id}`);
// // // // // // // //         setVideo(res.data);

// // // // // // // //         const cRes = await api.get(`/videos/${id}/comments`);
// // // // // // // //         setComments(cRes.data || []);
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Error fetching video:", err);
// // // // // // // //         setVideo(null);
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //     fetchData();
// // // // // // // //   }, [id]);

// // // // // // // //   // ✅ Like / Dislike (only for real DB videos)
// // // // // // // //   const handleLike = async () => {
// // // // // // // //     if (id.startsWith("v")) return; // ignore for mock
// // // // // // // //     try {
// // // // // // // //       await api.post(`/videos/${id}/like`);
// // // // // // // //       const res = await api.get(`/videos/${id}`);
// // // // // // // //       setVideo(res.data);
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error(err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleDislike = async () => {
// // // // // // // //     if (id.startsWith("v")) return; // ignore for mock
// // // // // // // //     try {
// // // // // // // //       await api.post(`/videos/${id}/dislike`);
// // // // // // // //       const res = await api.get(`/videos/${id}`);
// // // // // // // //       setVideo(res.data);
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error(err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // ✅ Add comment (only for real DB videos)
// // // // // // // //   const handleAddComment = async () => {
// // // // // // // //     if (!newComment.trim() || id.startsWith("v")) return;
// // // // // // // //     try {
// // // // // // // //       const res = await api.post(`/videos/${id}/comments`, { text: newComment });
// // // // // // // //       setComments((prev) => [res.data, ...prev]);
// // // // // // // //       setNewComment("");
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error(err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   if (loading) return <div className="p-6 text-center">Loading...</div>;
// // // // // // // //   if (!video) return <div className="p-6 text-center">Video not found</div>;

// // // // // // // //   // ✅ Suggested videos (always mock)
// // // // // // // //   const suggested = mockVideos.filter((v) => v.id !== id).slice(0, 5);

// // // // // // // //   return (
// // // // // // // //     <div className="flex flex-col lg:flex-row gap-6 p-4">
// // // // // // // //       {/* Left side: Video */}
// // // // // // // //       <div className="flex-1">
// // // // // // // //         <div className="aspect-video bg-black rounded-lg overflow-hidden">
// // // // // // // //           <video
// // // // // // // //             src={video.videoUrl}
// // // // // // // //             controls
// // // // // // // //             autoPlay
// // // // // // // //             className="w-full h-full"
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //         <h1 className="text-xl font-bold mt-4">{video.title}</h1>

// // // // // // // //         {/* Channel + Subscribe */}
// // // // // // // //         <div className="flex justify-between items-center mt-4">
// // // // // // // //           <div className="flex items-center gap-3">
// // // // // // // //             <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
// // // // // // // //               {video.channel?.channelName
// // // // // // // //                 ? video.channel.channelName[0].toUpperCase()
// // // // // // // //                 : video.channelName[0].toUpperCase()}
// // // // // // // //             </div>
// // // // // // // //             <div>
// // // // // // // //               <p className="font-semibold">
// // // // // // // //                 {video.channel?.channelName || video.channelName}
// // // // // // // //               </p>
// // // // // // // //               <p className="text-sm text-gray-500">
// // // // // // // //                 {video.views} views
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //           <button className="px-4 py-2 bg-red-600 text-white rounded-full">
// // // // // // // //             Subscribe
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //         {/* Actions */}
// // // // // // // //         <div className="flex gap-4 mt-3">
// // // // // // // //           <button onClick={handleLike} className="flex items-center gap-1">
// // // // // // // //             <ThumbsUp size={20} /> {video.likes?.length || 0}
// // // // // // // //           </button>
// // // // // // // //           <button onClick={handleDislike} className="flex items-center gap-1">
// // // // // // // //             <ThumbsDown size={20} /> {video.dislikes?.length || 0}
// // // // // // // //           </button>
// // // // // // // //           <button className="flex items-center gap-1">
// // // // // // // //             <Share2 size={20} /> Share
// // // // // // // //           </button>
// // // // // // // //           <button className="flex items-center gap-1">
// // // // // // // //             <Download size={20} /> Download
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //         {/* Description */}
// // // // // // // //         <p className="mt-4 text-gray-700">{video.description}</p>

// // // // // // // //         {/* Comments */}
// // // // // // // //         {!id.startsWith("v") && (
// // // // // // // //           <div className="mt-6">
// // // // // // // //             <h2 className="text-lg font-semibold mb-3">
// // // // // // // //               Comments ({comments.length})
// // // // // // // //             </h2>

// // // // // // // //             {user && (
// // // // // // // //               <div className="flex gap-2 mb-4">
// // // // // // // //                 <input
// // // // // // // //                   value={newComment}
// // // // // // // //                   onChange={(e) => setNewComment(e.target.value)}
// // // // // // // //                   className="flex-1 border rounded px-3 py-2"
// // // // // // // //                   placeholder="Add a comment..."
// // // // // // // //                 />
// // // // // // // //                 <button
// // // // // // // //                   onClick={handleAddComment}
// // // // // // // //                   className="px-4 py-2 bg-blue-600 text-white rounded"
// // // // // // // //                 >
// // // // // // // //                   Comment
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             )}

// // // // // // // //             <div className="space-y-3">
// // // // // // // //               {comments.map((c) => (
// // // // // // // //                 <div key={c._id} className="flex justify-between items-start">
// // // // // // // //                   <div>
// // // // // // // //                     <p className="font-semibold">{c.user?.username}</p>
// // // // // // // //                     <p className="text-gray-700">{c.text}</p>
// // // // // // // //                   </div>
// // // // // // // //                   {user?.id === c.user?._id && (
// // // // // // // //                     <button className="text-gray-500">⋮</button>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>

// // // // // // // //       {/* Right side: Suggested Videos */}
// // // // // // // //       <div className="w-full lg:w-80">
// // // // // // // //         <h3 className="font-semibold mb-3">Suggested Videos</h3>
// // // // // // // //         <div className="space-y-4">
// // // // // // // //           {suggested.map((v) => (
// // // // // // // //             <Link key={v.id} to={`/watch/${v.id}`} className="flex gap-3">
// // // // // // // //               <img
// // // // // // // //                 src={v.thumbnailUrl}
// // // // // // // //                 alt={v.title}
// // // // // // // //                 className="w-36 h-20 object-cover rounded"
// // // // // // // //               />
// // // // // // // //               <div>
// // // // // // // //                 <h4 className="font-semibold text-sm line-clamp-2">
// // // // // // // //                   {v.title}
// // // // // // // //                 </h4>
// // // // // // // //                 <p className="text-xs text-gray-600">{v.channelName}</p>
// // // // // // // //               </div>
// // // // // // // //             </Link>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // // -------























































// // // // // // // // agian-------
// // // // // // // // src/pages/VideoPlayer.jsx
// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // // import { useAuth } from "../context/AuthContext";
// // // // // // // import api from "../utils/axios";
// // // // // // // import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

// // // // // // // export default function VideoPlayer() {
// // // // // // //   const { id } = useParams();
// // // // // // //   const { user } = useAuth();
// // // // // // //   const [video, setVideo] = useState(null);
// // // // // // //   const [comments, setComments] = useState([]);
// // // // // // //   const [newComment, setNewComment] = useState("");
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   // ✅ fetch video + comments from backend
// // // // // // //   useEffect(() => {
// // // // // // //     async function fetchData() {
// // // // // // //       try {
// // // // // // //         setLoading(true);
// // // // // // //         const res = await api.get(`/videos/${id}`);
// // // // // // //         setVideo(res.data);

// // // // // // //         const cRes = await api.get(`/videos/${id}/comments`);
// // // // // // //         setComments(cRes.data || []);
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Error fetching video:", err);
// // // // // // //         setVideo(null);
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     }
// // // // // // //     if (id) fetchData();
// // // // // // //   }, [id]);

// // // // // // //   // ✅ Like / Dislike
// // // // // // //   const handleLike = async () => {
// // // // // // //     try {
// // // // // // //       await api.post(`/videos/${id}/like`);
// // // // // // //       const res = await api.get(`/videos/${id}`);
// // // // // // //       setVideo(res.data);
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleDislike = async () => {
// // // // // // //     try {
// // // // // // //       await api.post(`/videos/${id}/dislike`);
// // // // // // //       const res = await api.get(`/videos/${id}`);
// // // // // // //       setVideo(res.data);
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // ✅ Add comment
// // // // // // //   const handleAddComment = async () => {
// // // // // // //     if (!newComment.trim()) return;
// // // // // // //     try {
// // // // // // //       const res = await api.post(`/videos/${id}/comments`, { text: newComment });
// // // // // // //       setComments((prev) => [res.data, ...prev]);
// // // // // // //       setNewComment("");
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   if (loading) return <div className="p-6 text-center">Loading...</div>;
// // // // // // //   if (!video) return <div className="p-6 text-center">Video not found</div>;

// // // // // // //   return (
// // // // // // //     <div className="flex flex-col lg:flex-row gap-6 p-4">
// // // // // // //       {/* Left side: Video */}
// // // // // // //       <div className="flex-1">
// // // // // // //         <div className="aspect-video bg-black rounded-lg overflow-hidden">
// // // // // // //           <video src={video.videoUrl} controls autoPlay className="w-full h-full" />
// // // // // // //         </div>

// // // // // // //         <h1 className="text-xl font-bold mt-4">{video.title}</h1>

// // // // // // //         {/* Channel + Subscribe */}
// // // // // // //         <div className="flex justify-between items-center mt-4 border-b pb-3">
// // // // // // //           <div className="flex items-center gap-3">
// // // // // // //             <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
// // // // // // //               {video.channel?.channelName?.[0]?.toUpperCase() || "C"}
// // // // // // //             </div>
// // // // // // //             <div>
// // // // // // //               <p className="font-semibold">{video.channel?.channelName}</p>
// // // // // // //               <p className="text-sm text-gray-500">{video.views} views</p>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //           <button className="px-4 py-2 bg-red-600 text-white rounded-full">
// // // // // // //             Subscribe
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //         {/* Actions */}
// // // // // // //         <div className="flex gap-4 mt-3">
// // // // // // //           <button onClick={handleLike} className="flex items-center gap-1">
// // // // // // //             <ThumbsUp size={20} /> {video.likes?.length || 0}
// // // // // // //           </button>
// // // // // // //           <button onClick={handleDislike} className="flex items-center gap-1">
// // // // // // //             <ThumbsDown size={20} /> {video.dislikes?.length || 0}
// // // // // // //           </button>
// // // // // // //           <button className="flex items-center gap-1">
// // // // // // //             <Share2 size={20} /> Share
// // // // // // //           </button>
// // // // // // //           <button className="flex items-center gap-1">
// // // // // // //             <Download size={20} /> Download
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //         {/* Description */}
// // // // // // //         <p className="mt-4 text-gray-700">{video.description}</p>

// // // // // // //         {/* Comments */}
// // // // // // //         <div className="mt-6">
// // // // // // //           <h2 className="text-lg font-semibold mb-3">
// // // // // // //             Comments ({comments.length})
// // // // // // //           </h2>

// // // // // // //           {user && (
// // // // // // //             <div className="flex gap-2 mb-4">
// // // // // // //               <input
// // // // // // //                 value={newComment}
// // // // // // //                 onChange={(e) => setNewComment(e.target.value)}
// // // // // // //                 className="flex-1 border rounded px-3 py-2"
// // // // // // //                 placeholder="Add a comment..."
// // // // // // //               />
// // // // // // //               <button
// // // // // // //                 onClick={handleAddComment}
// // // // // // //                 className="px-4 py-2 bg-blue-600 text-white rounded"
// // // // // // //               >
// // // // // // //                 Comment
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           <div className="space-y-3">
// // // // // // //             {comments.map((c) => (
// // // // // // //               <div key={c._id} className="flex justify-between items-start">
// // // // // // //                 <div>
// // // // // // //                   <p className="font-semibold">{c.user?.username}</p>
// // // // // // //                   <p className="text-gray-700">{c.text}</p>
// // // // // // //                 </div>
// // // // // // //                 {user?.id === c.user?._id && (
// // // // // // //                   <button className="text-gray-500">⋮</button>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Right side: Suggested Videos */}
// // // // // // //       <div className="w-full lg:w-80">
// // // // // // //         <h3 className="font-semibold mb-3">Suggested Videos</h3>
// // // // // // //         <p className="text-gray-600">Dummy suggested list abhi ke liye...</p>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // // // ----again










// // // // // // // abhi ek hi bs
// // // // // // // src/pages/VideoPlayer.jsx
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // import { useAuth } from "../context/AuthContext";
// // // // // // import api from "../utils/axios";
// // // // // // import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

// // // // // // export default function VideoPlayer() {
// // // // // //   const { id } = useParams();
// // // // // //   const { user } = useAuth();
// // // // // //   const [video, setVideo] = useState(null);
// // // // // //   const [comments, setComments] = useState([]);
// // // // // //   const [newComment, setNewComment] = useState("");
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   // ✅ fetch video + comments from backend
// // // // // //   useEffect(() => {
// // // // // //     async function fetchData() {
// // // // // //       try {
// // // // // //         setLoading(true);
// // // // // //         const res = await api.get(`/videos/${id}`);
// // // // // //         console.log("Fetched video:", res.data);
// // // // // //         setVideo(res.data);

// // // // // //         const cRes = await api.get(`/videos/${id}/comments`);
// // // // // //         setComments(cRes.data || []);
// // // // // //       } catch (err) {
// // // // // //         console.error("Error fetching video:", err);
// // // // // //         setVideo(null);
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     }
// // // // // //     if (id) fetchData();
// // // // // //   }, [id]);

// // // // // //   // ✅ Like / Dislike
// // // // // //   const handleLike = async () => {
// // // // // //     try {
// // // // // //       await api.post(`/videos/${id}/like`);
// // // // // //       const res = await api.get(`/videos/${id}`);
// // // // // //       setVideo(res.data);
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDislike = async () => {
// // // // // //     try {
// // // // // //       await api.post(`/videos/${id}/dislike`);
// // // // // //       const res = await api.get(`/videos/${id}`);
// // // // // //       setVideo(res.data);
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   // ✅ Add comment
// // // // // //   const handleAddComment = async () => {
// // // // // //     if (!newComment.trim()) return;
// // // // // //     try {
// // // // // //       const res = await api.post(`/videos/${id}/comments`, { text: newComment });
// // // // // //       setComments((prev) => [res.data, ...prev]);
// // // // // //       setNewComment("");
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   if (loading) return <div className="p-6 text-center">Loading...</div>;
// // // // // //   if (!video) return <div className="p-6 text-center">Video not found</div>;

// // // // // //   // ✅ Dummy suggested videos
// // // // // //   const suggested = [
// // // // // //     {
// // // // // //       id: "s1",
// // // // // //       title: "Mastering JavaScript in 2025",
// // // // // //       thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
// // // // // //       channel: "JS Guru",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "s2",
// // // // // //       title: "Travel Vlog – Paris 2025 🇫🇷",
// // // // // //       thumbnail: "https://i.ytimg.com/vi/HVwGO4Lq4W4/hqdefault.jpg",
// // // // // //       channel: "TravelWithMia",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "s3",
// // // // // //       title: "Top 10 Coding Tips 💻",
// // // // // //       thumbnail: "https://i.ytimg.com/vi/OEV8gMkCHXQ/hqdefault.jpg",
// // // // // //       channel: "Code with John",
// // // // // //     },
// // // // // //   ];


// // // // // // // ------
// // // // // //   return (
// // // // // //     <div className="flex flex-col lg:flex-row gap-6 p-4">
// // // // // //       {/* Left side: Video */}
// // // // // //       <div className="flex-1">
// // // // // //         <div className="aspect-video bg-black rounded-lg overflow-hidden">
// // // // // //           {video?.videoUrl ? (
// // // // // //             <video
// // // // // //               key={video._id} // 🔑 force reload on video change
// // // // // //               src={video.videoUrl}
// // // // // //               controls
// // // // // //               autoPlay
// // // // // //               className="w-full h-full"
// // // // // //               onError={(e) => {
// // // // // //                 console.error("Video load error:", e);
// // // // // //                 e.currentTarget.poster =
// // // // // //                   "https://via.placeholder.com/640x360.png?text=Video+Not+Available";
// // // // // //               }}
// // // // // //             />
// // // // // //           ) : (
// // // // // //             <p className="text-center text-white p-6">No video available</p>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <h1 className="text-xl font-bold mt-4">{video.title}</h1>

// // // // // //         {/* Channel + Subscribe */}
// // // // // //         <div className="flex justify-between items-center mt-4 border-b pb-3">
// // // // // //           <div className="flex items-center gap-3">
// // // // // //             <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
// // // // // //               {video.channel?.channelName?.[0]?.toUpperCase() || "C"}
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <p className="font-semibold">{video.channel?.channelName}</p>
// // // // // //               <p className="text-sm text-gray-500">{video.views} views</p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <button className="px-4 py-2 bg-red-600 text-white rounded-full">
// // // // // //             Subscribe
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {/* Actions */}
// // // // // //         <div className="flex gap-4 mt-3">
// // // // // //           <button onClick={handleLike} className="flex items-center gap-1">
// // // // // //             <ThumbsUp size={20} /> {video.likes?.length || 0}
// // // // // //           </button>
// // // // // //           <button onClick={handleDislike} className="flex items-center gap-1">
// // // // // //             <ThumbsDown size={20} /> {video.dislikes?.length || 0}
// // // // // //           </button>
// // // // // //           <button className="flex items-center gap-1">
// // // // // //             <Share2 size={20} /> Share
// // // // // //           </button>
// // // // // //           <button className="flex items-center gap-1">
// // // // // //             <Download size={20} /> Download
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {/* Description */}
// // // // // //         <p className="mt-4 text-gray-700">{video.description}</p>

// // // // // //         {/* Comments */}
// // // // // //         <div className="mt-6">
// // // // // //           <h2 className="text-lg font-semibold mb-3">
// // // // // //             Comments ({comments.length})
// // // // // //           </h2>

// // // // // //           {user && (
// // // // // //             <div className="flex gap-2 mb-4">
// // // // // //               <input
// // // // // //                 value={newComment}
// // // // // //                 onChange={(e) => setNewComment(e.target.value)}
// // // // // //                 className="flex-1 border rounded px-3 py-2"
// // // // // //                 placeholder="Add a comment..."
// // // // // //               />
// // // // // //               <button
// // // // // //                 onClick={handleAddComment}
// // // // // //                 className="px-4 py-2 bg-blue-600 text-white rounded"
// // // // // //               >
// // // // // //                 Comment
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <div className="space-y-3">
// // // // // //             {comments.map((c) => (
// // // // // //               <div key={c._id} className="flex justify-between items-start">
// // // // // //                 <div>
// // // // // //                   <p className="font-semibold">{c.user?.username}</p>
// // // // // //                   <p className="text-gray-700">{c.text}</p>
// // // // // //                 </div>
// // // // // //                 {user?.id === c.user?._id && (
// // // // // //                   <button className="text-gray-500">⋮</button>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Right side: Suggested Videos */}
// // // // // //       <div className="w-full lg:w-80">
// // // // // //         <h3 className="font-semibold mb-3">Suggested Videos</h3>
// // // // // //         <div className="space-y-4">
// // // // // //           {suggested.map((s) => (
// // // // // //             <Link key={s.id} to={`/watch/${s.id}`} className="flex gap-3">
// // // // // //               <img
// // // // // //                 src={s.thumbnail}
// // // // // //                 alt={s.title}
// // // // // //                 className="w-36 h-20 object-cover rounded"
// // // // // //               />
// // // // // //               <div>
// // // // // //                 <h4 className="font-semibold text-sm line-clamp-2">
// // // // // //                   {s.title}
// // // // // //                 </h4>
// // // // // //                 <p className="text-xs text-gray-600">{s.channel}</p>
// // // // // //               </div>
// // // // // //             </Link>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }






// // // // // // // ------












// // // // // // src/pages/VideoPlayer.jsx
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useParams, Link } from "react-router-dom";
// // // // // import { useAuth } from "../context/AuthContext";
// // // // // import api from "../utils/axios";
// // // // // import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

// // // // // export default function VideoPlayer() {
// // // // //   const { id } = useParams();
// // // // //   const { user } = useAuth();
// // // // //   const [video, setVideo] = useState(null);
// // // // //   const [comments, setComments] = useState([]);
// // // // //   const [newComment, setNewComment] = useState("");
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   // ✅ fetch video + comments from backend
// // // // //   useEffect(() => {
// // // // //     async function fetchData() {
// // // // //       try {
// // // // //         setLoading(true);
// // // // //         const res = await api.get(`/videos/${id}`);
// // // // //         console.log("Fetched video:", res.data);
// // // // //         setVideo(res.data);

// // // // //         const cRes = await api.get(`/videos/${id}/comments`);
// // // // //         setComments(cRes.data || []);
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching video:", err);
// // // // //         setVideo(null);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     }
// // // // //     if (id) fetchData();
// // // // //   }, [id]);

// // // // //   // ✅ Like / Dislike
// // // // //   const handleLike = async () => {
// // // // //     try {
// // // // //       await api.post(`/videos/${id}/like`);
// // // // //       const res = await api.get(`/videos/${id}`);
// // // // //       setVideo(res.data);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   const handleDislike = async () => {
// // // // //     try {
// // // // //       await api.post(`/videos/${id}/dislike`);
// // // // //       const res = await api.get(`/videos/${id}`);
// // // // //       setVideo(res.data);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   // ✅ Add comment
// // // // //   const handleAddComment = async () => {
// // // // //     if (!newComment.trim()) return;
// // // // //     try {
// // // // //       const res = await api.post(`/videos/${id}/comments`, { text: newComment });
// // // // //       setComments((prev) => [res.data, ...prev]);
// // // // //       setNewComment("");
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   if (loading) return <div className="p-6 text-center">Loading...</div>;
// // // // //   if (!video) return <div className="p-6 text-center">Video not found</div>;

// // // // //   // ✅ Dummy suggested videos (8 items)
// // // // //   const suggested = [
// // // // //     {
// // // // //       id: "s1",
// // // // //       title: "Mastering JavaScript in 2025",
// // // // //       thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
// // // // //       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
// // // // //       channel: "JS Guru",
// // // // //     },
// // // // //     {
// // // // //       id: "s2",
// // // // //       title: "Travel Vlog – Paris 2025 🇫🇷",
// // // // //       thumbnail: "https://i.ytimg.com/vi/HVwGO4Lq4W4/hqdefault.jpg",
// // // // //       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
// // // // //       channel: "TravelWithMia",
// // // // //     },
// // // // //     {
// // // // //       id: "s3",
// // // // //       title: "Top 10 Coding Tips 💻",
// // // // //       thumbnail: "https://i.ytimg.com/vi/OEV8gMkCHXQ/hqdefault.jpg",
// // // // //       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
// // // // //       channel: "Code with John",
// // // // //     },
// // // // //     {
// // // // //       id: "s4",
// // // // //       title: "LoFi Beats to Relax 🎵",
// // // // //       thumbnail: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
// // // // //       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
// // // // //       channel: "Chill Vibes",
// // // // //     },
// // // // //     {
// // // // //       id: "s5",
// // // // //       title: "Messi vs Ronaldo – Epic Moments ⚽",
// // // // //       thumbnail: "https://i.ytimg.com/vi/kxopViU98Xo/hqdefault.jpg",
// // // // //       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
// // // // //       channel: "Sports Central",
// // // // //     },
// // // // //     {
// // // // //       id: "s6",
// // // // //       title: "Cricket World Cup Final 2025 🏏",
// // // // //       thumbnail: "https://i.ytimg.com/vi/q6EoRBvdVPQ/hqdefault.jpg",
// // // // //       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
// // // // //       channel: "Sports Central",
// // // // //     },
// // // // //     {
// // // // //       id: "s7",
// // // // //       title: "Top Netflix Shows to Watch 📺",
// // // // //       thumbnail: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
// // // // //       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
// // // // //       channel: "MovieMania",
// // // // //     },
// // // // //     {
// // // // //       id: "s8",
// // // // //       title: "React Crash Course 🔥",
// // // // //       thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
// // // // //       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
// // // // //       channel: "Code with John",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="flex flex-col lg:flex-row gap-6 p-4">
// // // // //       {/* Left side: Video */}
// // // // //       <div className="flex-1">
// // // // //         <div className="aspect-video bg-black rounded-lg overflow-hidden">
// // // // //           {video?.videoUrl ? (
// // // // //             <video
// // // // //               key={video._id}
// // // // //               src={video.videoUrl}
// // // // //               controls
// // // // //               autoPlay
// // // // //               className="w-full h-full"
// // // // //               onError={(e) => {
// // // // //                 console.error("Video load error:", e);
// // // // //                 e.currentTarget.poster =
// // // // //                   "https://via.placeholder.com/640x360.png?text=Video+Not+Available";
// // // // //               }}
// // // // //             />
// // // // //           ) : (
// // // // //             <p className="text-center text-white p-6">No video available</p>
// // // // //           )}
// // // // //         </div>

// // // // //         <h1 className="text-xl font-bold mt-4">{video.title}</h1>

// // // // //         {/* Channel + Subscribe */}
// // // // //         <div className="flex justify-between items-center mt-4 border-b pb-3">
// // // // //           <div className="flex items-center gap-3">
// // // // //             <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
// // // // //               {video.channel?.channelName?.[0]?.toUpperCase() || "C"}
// // // // //             </div>
// // // // //             <div>
// // // // //               <p className="font-semibold">{video.channel?.channelName}</p>
// // // // //               <p className="text-sm text-gray-500">{video.views} views</p>
// // // // //             </div>
// // // // //           </div>
// // // // //           <button className="px-4 py-2 bg-red-600 text-white rounded-full">
// // // // //             Subscribe
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Actions */}
// // // // //         <div className="flex gap-4 mt-3">
// // // // //           <button onClick={handleLike} className="flex items-center gap-1">
// // // // //             <ThumbsUp size={20} /> {video.likes?.length || 0}
// // // // //           </button>
// // // // //           <button onClick={handleDislike} className="flex items-center gap-1">
// // // // //             <ThumbsDown size={20} /> {video.dislikes?.length || 0}
// // // // //           </button>
// // // // //           <button className="flex items-center gap-1">
// // // // //             <Share2 size={20} /> Share
// // // // //           </button>
// // // // //           <button className="flex items-center gap-1">
// // // // //             <Download size={20} /> Download
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Description */}
// // // // //         <p className="mt-4 text-gray-700">{video.description}</p>

// // // // //         {/* Comments */}
// // // // //         <div className="mt-6">
// // // // //           <h2 className="text-lg font-semibold mb-3">
// // // // //             Comments ({comments.length})
// // // // //           </h2>

// // // // //           {user && (
// // // // //             <div className="flex gap-2 mb-4">
// // // // //               <input
// // // // //                 value={newComment}
// // // // //                 onChange={(e) => setNewComment(e.target.value)}
// // // // //                 className="flex-1 border rounded px-3 py-2"
// // // // //                 placeholder="Add a comment..."
// // // // //               />
// // // // //               <button
// // // // //                 onClick={handleAddComment}
// // // // //                 className="px-4 py-2 bg-blue-600 text-white rounded"
// // // // //               >
// // // // //                 Comment
// // // // //               </button>
// // // // //             </div>
// // // // //           )}

// // // // //           <div className="space-y-3">
// // // // //             {comments.map((c) => (
// // // // //               <div key={c._id} className="flex justify-between items-start">
// // // // //                 <div>
// // // // //                   <p className="font-semibold">{c.user?.username}</p>
// // // // //                   <p className="text-gray-700">{c.text}</p>
// // // // //                 </div>
// // // // //                 {user?.id === c.user?._id && (
// // // // //                   <button className="text-gray-500">⋮</button>
// // // // //                 )}
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Right side: Suggested Videos */}
// // // // //       <div className="w-full lg:w-80">
// // // // //         <h3 className="font-semibold mb-3">Suggested Videos</h3>
// // // // //         <div className="space-y-4">
// // // // //           {suggested.map((s) => (
// // // // //             <Link key={s.id} to={`/watch/${s.id}`} className="flex gap-3">
// // // // //               <img
// // // // //                 src={s.thumbnail}
// // // // //                 alt={s.title}
// // // // //                 className="w-36 h-20 object-cover rounded"
// // // // //               />
// // // // //               <div>
// // // // //                 <h4 className="font-semibold text-sm line-clamp-2">
// // // // //                   {s.title}
// // // // //                 </h4>
// // // // //                 <p className="text-xs text-gray-600">{s.channel}</p>
// // // // //               </div>
// // // // //             </Link>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }















// // // // // ##




// // // // // src/pages/VideoPlayer.jsx
// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, Link } from "react-router-dom";
// // // // import { useAuth } from "../context/AuthContext";
// // // // import api from "../utils/axios";
// // // // import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";
// // // // import { mockVideos } from "../utils/mockVideos"; // ✅ import dummy data

// // // // export default function VideoPlayer() {
// // // //   const { id } = useParams();
// // // //   const { user } = useAuth();
// // // //   const [video, setVideo] = useState(null);
// // // //   const [comments, setComments] = useState([]);
// // // //   const [newComment, setNewComment] = useState("");
// // // //   const [loading, setLoading] = useState(true);

// // // //   // ✅ fetch video + comments from backend
// // // //   useEffect(() => {
// // // //     async function fetchData() {
// // // //       try {
// // // //         setLoading(true);
// // // //         const res = await api.get(`/videos/${id}`);
// // // //         setVideo(res.data);

// // // //         const cRes = await api.get(`/videos/${id}/comments`);
// // // //         setComments(cRes.data || []);
// // // //       } catch (err) {
// // // //         console.error("Error fetching video:", err);
// // // //         setVideo(null);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     }
// // // //     if (id) fetchData();
// // // //   }, [id]);

// // // //   // ✅ Like / Dislike
// // // //   const handleLike = async () => {
// // // //     try {
// // // //       await api.post(`/videos/${id}/like`);
// // // //       const res = await api.get(`/videos/${id}`);
// // // //       setVideo(res.data);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const handleDislike = async () => {
// // // //     try {
// // // //       await api.post(`/videos/${id}/dislike`);
// // // //       const res = await api.get(`/videos/${id}`);
// // // //       setVideo(res.data);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   // ✅ Add comment
// // // //   const handleAddComment = async () => {
// // // //     if (!newComment.trim()) return;
// // // //     try {
// // // //       const res = await api.post(`/videos/${id}/comments`, { text: newComment });
// // // //       setComments((prev) => [res.data, ...prev]);
// // // //       setNewComment("");
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   if (loading) return <div className="p-6 text-center">Loading...</div>;
// // // //   if (!video) return <div className="p-6 text-center">Video not found</div>;

// // // //   // ✅ Suggested = mockVideos se le lo, aur current id exclude kar do
// // // //   const suggested = mockVideos.filter((v) => v.id !== id).slice(0, 8);

// // // //   return (
// // // //     <div className="flex flex-col lg:flex-row gap-6 p-4">
// // // //       {/* Left side: Video */}
// // // //       <div className="flex-1">
// // // //         <div className="aspect-video bg-black rounded-lg overflow-hidden">
// // // //           {video?.videoUrl ? (
// // // //             <video
// // // //               key={video._id || video.id}
// // // //               src={video.videoUrl}
// // // //               controls
// // // //               autoPlay
// // // //               className="w-full h-full"
// // // //               onError={(e) => {
// // // //                 console.error("Video load error:", e);
// // // //                 e.currentTarget.poster =
// // // //                   "https://via.placeholder.com/640x360.png?text=Video+Not+Available";
// // // //               }}
// // // //             />
// // // //           ) : (
// // // //             <p className="text-center text-white p-6">No video available</p>
// // // //           )}
// // // //         </div>

// // // //         <h1 className="text-xl font-bold mt-4">{video.title}</h1>

// // // //         {/* Channel + Subscribe */}
// // // //         <div className="flex justify-between items-center mt-4 border-b pb-3">
// // // //           <div className="flex items-center gap-3">
// // // //             <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
// // // //               {video.channel?.channelName?.[0]?.toUpperCase() ||
// // // //                 video.channelName?.[0]?.toUpperCase() ||
// // // //                 "C"}
// // // //             </div>
// // // //             <div>
// // // //               <p className="font-semibold">
// // // //                 {video.channel?.channelName || video.channelName}
// // // //               </p>
// // // //               <p className="text-sm text-gray-500">{video.views} views</p>
// // // //             </div>
// // // //           </div>
// // // //           <button className="px-4 py-2 bg-red-600 text-white rounded-full">
// // // //             Subscribe
// // // //           </button>
// // // //         </div>

// // // //         {/* Actions */}
// // // //         <div className="flex gap-4 mt-3">
// // // //           <button onClick={handleLike} className="flex items-center gap-1">
// // // //             <ThumbsUp size={20} /> {video.likes?.length || 0}
// // // //           </button>
// // // //           <button onClick={handleDislike} className="flex items-center gap-1">
// // // //             <ThumbsDown size={20} /> {video.dislikes?.length || 0}
// // // //           </button>
// // // //           <button className="flex items-center gap-1">
// // // //             <Share2 size={20} /> Share
// // // //           </button>
// // // //           <button className="flex items-center gap-1">
// // // //             <Download size={20} /> Download
// // // //           </button>
// // // //         </div>

// // // //         {/* Description */}
// // // //         <p className="mt-4 text-gray-700">{video.description}</p>

// // // //         {/* Comments */}
// // // //         <div className="mt-6">
// // // //           <h2 className="text-lg font-semibold mb-3">
// // // //             Comments ({comments.length})
// // // //           </h2>

// // // //           {user && (
// // // //             <div className="flex gap-2 mb-4">
// // // //               <input
// // // //                 value={newComment}
// // // //                 onChange={(e) => setNewComment(e.target.value)}
// // // //                 className="flex-1 border rounded px-3 py-2"
// // // //                 placeholder="Add a comment..."
// // // //               />
// // // //               <button
// // // //                 onClick={handleAddComment}
// // // //                 className="px-4 py-2 bg-blue-600 text-white rounded"
// // // //               >
// // // //                 Comment
// // // //               </button>
// // // //             </div>
// // // //           )}

// // // //           <div className="space-y-3">
// // // //             {comments.map((c) => (
// // // //               <div key={c._id} className="flex justify-between items-start">
// // // //                 <div>
// // // //                   <p className="font-semibold">{c.user?.username}</p>
// // // //                   <p className="text-gray-700">{c.text}</p>
// // // //                 </div>
// // // //                 {user?.id === c.user?._id && (
// // // //                   <button className="text-gray-500">⋮</button>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Right side: Suggested Videos */}
// // // //       <div className="w-full lg:w-80">
// // // //         <h3 className="font-semibold mb-3">Suggested Videos</h3>
// // // //         <div className="space-y-4">
// // // //           {suggested.map((s) => (
// // // //             <Link key={s.id} to={`/watch/${s.id}`} className="flex gap-3">
// // // //               <img
// // // //                 src={s.thumbnailUrl}
// // // //                 alt={s.title}
// // // //                 className="w-36 h-20 object-cover rounded"
// // // //               />
// // // //               <div>
// // // //                 <h4 className="font-semibold text-sm line-clamp-2">
// // // //                   {s.title}
// // // //                 </h4>
// // // //                 <p className="text-xs text-gray-600">{s.channelName}</p>
// // // //               </div>
// // // //             </Link>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // ----------------------------------------------------------------------------------------

// // // import React, { useEffect, useState } from "react";
// // // import { useParams, Link } from "react-router-dom";
// // // import { useAuth } from "../context/AuthContext";
// // // import api from "../utils/axios";
// // // import { mockVideos } from "../utils/mockVideos"; // ✅ import dummy data
// // // import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

// // // export default function VideoPlayer() {
// // //   const { id } = useParams();
// // //   const { user } = useAuth();
// // //   const [video, setVideo] = useState(null);
// // //   const [comments, setComments] = useState([]);
// // //   const [newComment, setNewComment] = useState("");
// // //   const [loading, setLoading] = useState(true);

// // //   // ✅ helper: check if ID is valid ObjectId (24 hex chars)
// // //   const isObjectId = (str) => /^[0-9a-fA-F]{24}$/.test(str);

// // //   useEffect(() => {
// // //     async function fetchData() {
// // //       try {
// // //         setLoading(true);

// // //         if (!isObjectId(id)) {
// // //           // 👉 Dummy video (mockVideos.js se)
// // //           const found = mockVideos.find((v) => v.id === id);
// // //           setVideo(found || null);
// // //           setComments([]);
// // //           setLoading(false);
// // //           return;
// // //         }

// // //         // 👉 Real video (backend se)
// // //         const res = await api.get(`/videos/${id}`);
// // //         setVideo(res.data);

// // //         const cRes = await api.get(`/videos/${id}/comments`);
// // //         setComments(cRes.data || []);
// // //       } catch (err) {
// // //         console.error("Error fetching video:", err);
// // //         setVideo(null);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     }
// // //     if (id) fetchData();
// // //   }, [id]);

// // //   // ✅ Like / Dislike (sirf backend ke liye)
// // //   const handleLike = async () => {
// // //     if (!isObjectId(id)) return; // dummy pe skip
// // //     try {
// // //       await api.post(`/videos/${id}/like`);
// // //       const res = await api.get(`/videos/${id}`);
// // //       setVideo(res.data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const handleDislike = async () => {
// // //     if (!isObjectId(id)) return;
// // //     try {
// // //       await api.post(`/videos/${id}/dislike`);
// // //       const res = await api.get(`/videos/${id}`);
// // //       setVideo(res.data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const handleAddComment = async () => {
// // //     if (!newComment.trim() || !isObjectId(id)) return;
// // //     try {
// // //       const res = await api.post(`/videos/${id}/comments`, { text: newComment });
// // //       setComments((prev) => [res.data, ...prev]);
// // //       setNewComment("");
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   if (loading) return <div className="p-6 text-center">Loading...</div>;
// // //   if (!video) return <div className="p-6 text-center">Video not found</div>;

// // //   // ✅ Suggested videos (dummy only, real + dummy mix karna ho to filter)
// // //   const suggested = mockVideos.filter((v) => v.id !== id).slice(0, 8);

// // //   return (
// // //     <div className="flex flex-col lg:flex-row gap-6 p-4">
// // //       {/* Left side: Video */}
// // //       <div className="flex-1">
// // //         <div className="aspect-video bg-black rounded-lg overflow-hidden">
// // //           {video?.videoUrl ? (
// // //             <video
// // //               key={video.id || video._id}
// // //               src={video.videoUrl}
// // //               controls
// // //               autoPlay
// // //               className="w-full h-full"
// // //             />
// // //           ) : (
// // //             <p className="text-center text-white p-6">No video available</p>
// // //           )}
// // //         </div>

// // //         <h1 className="text-xl font-bold mt-4">{video.title}</h1>

// // //         {/* Channel + Subscribe */}
// // //         <div className="flex justify-between items-center mt-4 border-b pb-3">
// // //           <div className="flex items-center gap-3">
// // //             <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
// // //               {(video.channel?.channelName?.[0] || video.channelName?.[0] || "U").toUpperCase()}
// // //             </div>
// // //             <div>
// // //               <p className="font-semibold">{video.channel?.channelName || video.channelName}</p>
// // //               <p className="text-sm text-gray-500">{video.views || "0"} views</p>
// // //             </div>
// // //           </div>
// // //           <button className="px-4 py-2 bg-red-600 text-white rounded-full">Subscribe</button>
// // //         </div>

// // //         {/* Actions */}
// // //         {isObjectId(id) && (
// // //           <div className="flex gap-4 mt-3">
// // //             <button onClick={handleLike} className="flex items-center gap-1">
// // //               <ThumbsUp size={20} /> {video.likes?.length || 0}
// // //             </button>
// // //             <button onClick={handleDislike} className="flex items-center gap-1">
// // //               <ThumbsDown size={20} /> {video.dislikes?.length || 0}
// // //             </button>
// // //           </div>
// // //         )}


// // //         {/* Description */}
// // //         <p className="mt-4 text-gray-700">{video.description}</p>

// // //         {/* Comments */}
// // //         {isObjectId(id) && (
// // //           <div className="mt-6">
// // //             <h2 className="text-lg font-semibold mb-3">Comments ({comments.length})</h2>
// // //             {user && (
// // //               <div className="flex gap-2 mb-4">
// // //                 <input
// // //                   value={newComment}
// // //                   onChange={(e) => setNewComment(e.target.value)}
// // //                   className="flex-1 border rounded px-3 py-2"
// // //                   placeholder="Add a comment..."
// // //                 />
// // //                 <button
// // //                   onClick={handleAddComment}
// // //                   className="px-4 py-2 bg-blue-600 text-white rounded"
// // //                 >
// // //                   Comment
// // //                 </button>
// // //               </div>
// // //             )}
// // //             <div className="space-y-3">
// // //               {comments.map((c) => (
// // //                 <div key={c._id} className="flex justify-between items-start">
// // //                   <div>
// // //                     <p className="font-semibold">{c.user?.username}</p>
// // //                     <p className="text-gray-700">{c.text}</p>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Right side: Suggested Videos */}
// // //       <div className="w-full lg:w-80">
// // //         <h3 className="font-semibold mb-3">Suggested Videos</h3>
// // //         <div className="space-y-4">
// // //           {suggested.map((s) => (
// // //             <Link key={s.id} to={`/watch/${s.id}`} className="flex gap-3">
// // //               <img
// // //                 src={s.thumbnailUrl}
// // //                 alt={s.title}
// // //                 className="w-36 h-20 object-cover rounded"
// // //               />
// // //               <div>
// // //                 <h4 className="font-semibold text-sm line-clamp-2">{s.title}</h4>
// // //                 <p className="text-xs text-gray-600">{s.channelName}</p>
// // //               </div>
// // //             </Link>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // // ab syd last 










// // // ................................
// // import React, { useEffect, useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";
// // import api from "../utils/axios";
// // import { mockVideos } from "../utils/mockVideos"; // ✅ import dummy data
// // import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

// // export default function VideoPlayer() {
// //   const { id } = useParams();
// //   const { user } = useAuth();
// //   const [video, setVideo] = useState(null);
// //   const [comments, setComments] = useState([]);
// //   const [newComment, setNewComment] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   // ✅ helper: check if ID is valid ObjectId (24 hex chars)
// //   const isObjectId = (str) => /^[0-9a-fA-F]{24}$/.test(str);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         setLoading(true);

// //         if (!isObjectId(id)) {
// //           // 👉 Dummy video (mockVideos.js se)
// //           const found = mockVideos.find((v) => v.id === id);
// //           setVideo(found || null);
// //           setComments([]);
// //           setLoading(false);
// //           return;
// //         }

// //         // 👉 Real video (backend se)
// //         const res = await api.get(`/videos/${id}`);
// //         setVideo(res.data);

// //         const cRes = await api.get(`/videos/${id}/comments`);
// //         setComments(cRes.data || []);
// //       } catch (err) {
// //         console.error("Error fetching video:", err);
// //         setVideo(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //     if (id) fetchData();
// //   }, [id]);

// //   // ✅ Like / Dislike (sirf backend ke liye)
// //   const handleLike = async () => {
// //     if (!isObjectId(id)) return; // dummy pe skip
// //     try {
// //       await api.post(`/videos/${id}/like`);
// //       const res = await api.get(`/videos/${id}`);
// //       setVideo(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleDislike = async () => {
// //     if (!isObjectId(id)) return;
// //     try {
// //       await api.post(`/videos/${id}/dislike`);
// //       const res = await api.get(`/videos/${id}`);
// //       setVideo(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleAddComment = async () => {
// //     if (!newComment.trim() || !isObjectId(id)) return;
// //     try {
// //       const res = await api.post(`/videos/${id}/comments`, { text: newComment });
// //       setComments((prev) => [res.data, ...prev]);
// //       setNewComment("");
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   if (loading) return <div className="p-6 text-center">Loading...</div>;
// //   if (!video) return <div className="p-6 text-center">Video not found</div>;

// //   // ✅ Suggested videos (dummy only, real + dummy mix karna ho to filter)
// //   const suggested = mockVideos.filter((v) => v.id !== id).slice(0, 8);

// //   return (
// //     <div className="flex flex-col lg:flex-row gap-6 p-4">
// //       {/* Left side: Video */}
// //       <div className="flex-1">
// //         <div className="aspect-video bg-black rounded-lg overflow-hidden">
// //           {video?.videoUrl ? (
// //             <video
// //               key={video.id || video._id}
// //               src={video.videoUrl}
// //               controls
// //               autoPlay
// //               className="w-full h-full"
// //             />
// //           ) : (
// //             <p className="text-center text-white p-6">No video available</p>
// //           )}
// //         </div>

// //         <h1 className="text-xl font-bold mt-4">{video.title}</h1>

// //         {/* Channel + Subscribe */}
// //         <div className="flex justify-between items-center mt-4 border-b pb-3">
// //           <div className="flex items-center gap-3">
// //             <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
// //               {(video.channel?.channelName?.[0] ||
// //                 video.channelName?.[0] ||
// //                 "U").toUpperCase()}
// //             </div>
// //             <div>
// //               <p className="font-semibold">
// //                 {video.channel?.channelName || video.channelName}
// //               </p>
// //               <p className="text-sm text-gray-500">{video.views || "0"} views</p>
// //             </div>
// //           </div>
// //           <button className="px-4 py-2 bg-red-600 text-white rounded-full">
// //             Subscribe
// //           </button>
// //         </div>

// //         {/* Actions */}
// //         <div className="flex gap-4 mt-3">
// //           {isObjectId(id) && (
// //             <>
// //               <button onClick={handleLike} className="flex items-center gap-1">
// //                 <ThumbsUp size={20} /> {video.likes?.length || 0}
// //               </button>
// //               <button onClick={handleDislike} className="flex items-center gap-1">
// //                 <ThumbsDown size={20} /> {video.dislikes?.length || 0}
// //               </button>
// //             </>
// //           )}

// //           {/* ✅ Always visible Share & Download */}
// //           <button className="flex items-center gap-1">
// //             <Share2 size={20} /> Share
// //           </button>
// //           <button className="flex items-center gap-1">
// //             <Download size={20} /> Download
// //           </button>
// //         </div>

// //         {/* Description */}
// //         <p className="mt-4 text-gray-700">{video.description}</p>

// //         {/* Comments */}
// //         {isObjectId(id) && (
// //           <div className="mt-6">
// //             <h2 className="text-lg font-semibold mb-3">
// //               Comments ({comments.length})
// //             </h2>
// //             {user && (
// //               <div className="flex gap-2 mb-4">
// //                 <input
// //                   value={newComment}
// //                   onChange={(e) => setNewComment(e.target.value)}
// //                   className="flex-1 border rounded px-3 py-2"
// //                   placeholder="Add a comment..."
// //                 />
// //                 <button
// //                   onClick={handleAddComment}
// //                   className="px-4 py-2 bg-blue-600 text-white rounded"
// //                 >
// //                   Comment
// //                 </button>
// //               </div>
// //             )}
// //             <div className="space-y-3">
// //               {comments.map((c) => (
// //                 <div key={c._id} className="flex items-start gap-3">
// //                   {/* ✅ Avatar with Initial */}
// //                   <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
// //                     {c.user?.username?.[0]?.toUpperCase() || "U"}
                    
// //                   </div>
// //                   <div className="flex-1">
// //                     <p className="font-semibold">{c.user?.username}</p>
// //                     <p className="text-gray-700">{c.text}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Right side: Suggested Videos */}
// //       <div className="w-full lg:w-80">
// //         <h3 className="font-semibold mb-3">Suggested Videos</h3>
// //         <div className="space-y-4">
// //           {suggested.map((s) => (
// //             <Link key={s.id} to={`/watch/${s.id}`} className="flex gap-3">
// //               <img
// //                 src={s.thumbnailUrl}
// //                 alt={s.title}
// //                 className="w-36 h-20 object-cover rounded"
// //               />
// //               <div>
// //                 <h4 className="font-semibold text-sm line-clamp-2">{s.title}</h4>
// //                 <p className="text-xs text-gray-600">{s.channelName}</p>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// // --------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import api from "../utils/axios";
// import { mockVideos } from "../utils/mockVideos";
// import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

// export default function VideoPlayer() {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const [video, setVideo] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [loading, setLoading] = useState(true);

//   const isObjectId = (str) => /^[0-9a-fA-F]{24}$/.test(str);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);

//         if (!isObjectId(id)) {
//           const found = mockVideos.find((v) => v.id === id);
//           setVideo(found || null);
//           setComments([]);
//           setLoading(false);
//           return;
//         }

//         const res = await api.get(`/videos/${id}`);
//         setVideo(res.data);

//         const cRes = await api.get(`/videos/${id}/comments`);
//         setComments(cRes.data || []);
//       } catch (err) {
//         console.error("Error fetching video:", err);
//         setVideo(null);
//       } finally {
//         setLoading(false);
//       }
//     }
//     if (id) fetchData();
//   }, [id]);

//   const handleLike = async () => {
//     if (!isObjectId(id)) return;
//     try {
//       await api.post(`/videos/${id}/like`);
//       const res = await api.get(`/videos/${id}`);
//       setVideo(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDislike = async () => {
//     if (!isObjectId(id)) return;
//     try {
//       await api.post(`/videos/${id}/dislike`);
//       const res = await api.get(`/videos/${id}`);
//       setVideo(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleAddComment = async () => {
//     if (!newComment.trim() || !isObjectId(id)) return;
//     try {
//       const res = await api.post(`/videos/${id}/comments`, { text: newComment });
//       setComments((prev) => [res.data, ...prev]);
//       setNewComment("");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (loading) return <div className="p-6 text-center">Loading...</div>;
//   if (!video) return <div className="p-6 text-center">Video not found</div>;

//   const suggested = mockVideos.filter((v) => v.id !== id).slice(0, 8);

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-4">
//       {/* Left side: Video */}
//       <div className="flex-1">
//         <div className="aspect-video bg-black rounded-lg overflow-hidden">
//           {video?.videoUrl ? (
//             <video
//               key={video.id || video._id}
//               src={video.videoUrl}
//               controls
//               autoPlay
//               className="w-full h-full"
//             />
//           ) : (
//             <p className="text-center text-white p-6">No video available</p>
//           )}
//         </div>

//         <h1 className="text-xl font-bold mt-4">{video.title}</h1>

//         {/* Channel + Subscribe */}
//         <div className="flex justify-between items-center mt-4 border-b pb-3">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
//               {(video.channel?.channelName?.[0] || video.channelName?.[0] || "U").toUpperCase()}
//             </div>
//             <div>
//               <p className="font-semibold">{video.channel?.channelName || video.channelName}</p>
//               <p className="text-sm text-gray-500">{video.views || "0"} views</p>
//             </div>
//           </div>
//           <button className="px-4 py-2 bg-red-600 text-white rounded-full">
//             Subscribe
//           </button>
//         </div>

//         {/* Actions */}
//         <div className="flex gap-4 mt-3">
//           {isObjectId(id) && (
//             <>
//               <button onClick={handleLike} className="flex items-center gap-1">
//                 <ThumbsUp size={20} /> {video.likes?.length || 0}
//               </button>
//               <button onClick={handleDislike} className="flex items-center gap-1">
//                 <ThumbsDown size={20} /> {video.dislikes?.length || 0}
//               </button>
//             </>
//           )}
//           <button className="flex items-center gap-1">
//             <Share2 size={20} /> Share
//           </button>
//           <button className="flex items-center gap-1">
//             <Download size={20} /> Download
//           </button>
//         </div>

//         {/* Description */}
//         <p className="mt-4 text-gray-700">{video.description}</p>

//         {/* Comments */}
//         {isObjectId(id) && (
//           <div className="mt-6">
//             <h2 className="text-lg font-semibold mb-3">Comments ({comments.length})</h2>
//             {user && (
//               <div className="flex gap-2 mb-4">
//                 <input
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   className="flex-1 border rounded px-3 py-2"
//                   placeholder="Add a comment..."
//                 />
//                 <button
//                   onClick={handleAddComment}
//                   className="px-4 py-2 bg-blue-600 text-white rounded"
//                 >
//                   Comment
//                 </button>
//               </div>
//             )}

//             <div className="space-y-3">
//               {comments.map((c) => (
//                 <Comment
//                   key={c._id}
//                   comment={c}
//                   user={user}
//                   videoId={id}
//                   comments={comments}
//                   setComments={setComments}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Right side: Suggested Videos */}
//       <div className="w-full lg:w-80">
//         <h3 className="font-semibold mb-3">Suggested Videos</h3>
//         <div className="space-y-4">
//           {suggested.map((s) => (
//             <Link key={s.id} to={`/watch/${s.id}`} className="flex gap-3">
//               <img
//                 src={s.thumbnailUrl}
//                 alt={s.title}
//                 className="w-36 h-20 object-cover rounded"
//               />
//               <div>
//                 <h4 className="font-semibold text-sm line-clamp-2">{s.title}</h4>
//                 <p className="text-xs text-gray-600">{s.channelName}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// function Comment({ comment, user, videoId, comments, setComments }) {
//   const [editing, setEditing] = useState(false);
//   const [editedText, setEditedText] = useState(comment.text);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleEditSave = async () => {
//     if (!editedText.trim()) return;
//     try {
//       const res = await api.put(`/videos/${videoId}/comments/${comment._id}`, {
//         text: editedText,
//       });
//       setComments((prev) =>
//         prev.map((c) => (c._id === comment._id ? res.data : c))
//       );
//       setEditing(false);
//       setMenuOpen(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await api.delete(`/videos/${videoId}/comments/${comment._id}`);
//       setComments((prev) => prev.filter((c) => c._id !== comment._id));
//       setMenuOpen(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex items-start gap-3 relative group">
//       {/* Avatar */}
//       <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
//         {comment.user?.username?.[0]?.toUpperCase() || "U"}
//       </div>

//       <div className="flex-1">
//         <p className="font-semibold">{comment.user?.username}</p>

//         {/* Comment text or edit input */}
//         {editing ? (
//           <div className="flex gap-2 mt-1">
//             <input
//               value={editedText}
//               onChange={(e) => setEditedText(e.target.value)}
//               className="flex-1 border rounded px-2 py-1"
//             />
//             <button
//               onClick={handleEditSave}
//               className="px-2 py-1 bg-green-600 text-white rounded"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setEditing(false)}
//               className="px-2 py-1 bg-gray-400 text-white rounded"
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <p className="text-gray-700 mt-1">{comment.text}</p>
//         )}
//       </div>

//       {/* 3-dot menu */}
//       {user?.id === comment.user?._id && !editing && (
//         <div className="relative ml-2">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 text-gray-600"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           </button>

//           {menuOpen && (
//             <div className="absolute right-0 mt-2 w-28 bg-white border shadow-lg rounded z-20">
//               <button
//                 onClick={() => setEditing(true)}
//                 className="block w-full px-3 py-1 text-left text-sm hover:bg-gray-100 font-bold"
//               >
//                  Edit
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="block w-full px-3 py-1 text-left text-sm text-red-600 hover:bg-gray-100 font-bold"
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }














// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import api from "../utils/axios";
// import { mockVideos } from "../utils/mockVideos";
// import { ThumbsUp, ThumbsDown, Share2, Download, MoreVertical } from "lucide-react";

// export default function VideoPlayer() {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const [video, setVideo] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [loading, setLoading] = useState(true);

//   const isObjectId = (str) => /^[0-9a-fA-F]{24}$/.test(str);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
//         if (!isObjectId(id)) {
//           const found = mockVideos.find((v) => v.id === id);
//           setVideo(found || null);
//           setComments([]);
//           setLoading(false);
//           return;
//         }
//         const res = await api.get(`/videos/${id}`);
//         setVideo(res.data);
//         const cRes = await api.get(`/videos/${id}/comments`);
//         setComments(cRes.data || []);
//       } catch (err) {
//         console.error("Error fetching video:", err);
//         setVideo(null);
//       } finally {
//         setLoading(false);
//       }
//     }
//     if (id) fetchData();
//   }, [id]);

//   const handleLike = async () => {
//     if (!isObjectId(id)) return;
//     try {
//       await api.post(`/videos/${id}/like`);
//       const res = await api.get(`/videos/${id}`);
//       setVideo(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDislike = async () => {
//     if (!isObjectId(id)) return;
//     try {
//       await api.post(`/videos/${id}/dislike`);
//       const res = await api.get(`/videos/${id}`);
//       setVideo(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleAddComment = async () => {
//     if (!newComment.trim() || !isObjectId(id)) return;
//     try {
//       const res = await api.post(`/videos/${id}/comments`, { text: newComment });
//       setComments((prev) => [res.data, ...prev]);
//       setNewComment("");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (loading) return <div className="p-6 text-center">Loading...</div>;
//   if (!video) return <div className="p-6 text-center">Video not found</div>;

//   const suggested = mockVideos.filter((v) => v.id !== id).slice(0, 8);

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-4">
//       {/* Left side: Video */}
//       <div className="flex-1">
//         <div className="aspect-video bg-black rounded-lg overflow-hidden">
//           {video?.videoUrl ? (
//             <video
//               key={video.id || video._id}
//               src={video.videoUrl}
//               controls
//               autoPlay
//               className="w-full h-full"
//             />
//           ) : (
//             <p className="text-center text-white p-6">No video available</p>
//           )}
//         </div>

//         {/* Title */}
//         <h1 className="text-xl font-semibold mt-3">{video.title}</h1>

//         {/* Channel + Actions */}
//         <div className="flex justify-between items-center mt-3">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
//               {(video.channel?.channelName?.[0] || video.channelName?.[0] || "U").toUpperCase()}
//             </div>
//             <div>
//               <p className="font-semibold">{video.channel?.channelName || video.channelName}</p>
//               <p className="text-sm text-gray-500">{video.views || "0"} views</p>
//             </div>
//             <button className="ml-4 px-4 py-1.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700">
//               Subscribe
//             </button>
//           </div>

//           {/* Like/Share Buttons */}
//           <div className="flex items-center gap-2">
//             <button
//               onClick={handleLike}
//               className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
//             >
//               <ThumbsUp size={18} /> {video.likes?.length || 0}
//             </button>
//             <button
//               onClick={handleDislike}
//               className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
//             >
//               <ThumbsDown size={18} /> {video.dislikes?.length || 0}
//             </button>
//             <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
//               <Share2 size={18} /> Share
//             </button>
//             <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
//               <Download size={18} /> Download
//             </button>
//           </div>
//         </div>

//         {/* Description */}
//         <p className="mt-3 text-gray-700 whitespace-pre-line">{video.description}</p>

//         {/* Comments */}
//         {isObjectId(id) && (
//           <div className="mt-6">
//             <h2 className="text-lg font-semibold mb-4">Comments ({comments.length})</h2>

//             {user && (
//               <div className="flex gap-2 mb-5">
//                 <div className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
//                   {user.username?.[0]?.toUpperCase() || "U"}
//                 </div>
//                 <input
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   className="flex-1 border rounded-full px-4 py-2"
//                   placeholder="Add a comment..."
//                 />
//                 <button
//                   onClick={handleAddComment}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-full"
//                 >
//                   Comment
//                 </button>
//               </div>
//             )}

//             <div className="space-y-5">
//               {comments.map((c) => (
//                 <Comment
//                   key={c._id}
//                   comment={c}
//                   user={user}
//                   videoId={id}
//                   comments={comments}
//                   setComments={setComments}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Right side: Suggested Videos */}
//       <div className="w-full lg:w-80">
//         <h3 className="font-semibold mb-3">Suggested Videos</h3>
//         <div className="space-y-3">
//           {suggested.map((s) => (
//             <Link key={s.id} to={`/watch/${s.id}`} className="flex gap-3 hover:bg-gray-50 rounded-lg p-1">
//               <img
//                 src={s.thumbnailUrl}
//                 alt={s.title}
//                 className="w-36 h-20 object-cover rounded-md"
//               />
//               <div>
//                 <h4 className="font-medium text-sm line-clamp-2">{s.title}</h4>
//                 <p className="text-xs text-gray-600">{s.channelName}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





// function Comment({ comment, user, videoId, comments, setComments }) {
//   const [editing, setEditing] = useState(false);
//   const [editedText, setEditedText] = useState(comment.text);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleEditSave = async () => {
//     if (!editedText.trim()) return;
//     try {
//       const res = await api.put(`/videos/${videoId}/comments/${comment._id}`, {
//         text: editedText,
//       });
//       setComments((prev) =>
//         prev.map((c) => (c._id === comment._id ? res.data : c))
//       );
//       setEditing(false);
//       setMenuOpen(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await api.delete(`/videos/${videoId}/comments/${comment._id}`);
//       setComments((prev) => prev.filter((c) => c._id !== comment._id));
//       setMenuOpen(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex items-start gap-3 relative group">
//       {/* Avatar */}
//       <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">
//         {comment.user?.username?.[0]?.toUpperCase() || "U"}
//       </div>

//       <div className="flex-1">
//         <p className="font-semibold">{comment.user?.username}</p>

//         {/* Comment text or edit input */}
//         {editing ? (
//           <div className="flex gap-2 mt-1">
//             <input
//               value={editedText}
//               onChange={(e) => setEditedText(e.target.value)}
//               className="flex-1 border rounded px-2 py-1"
//             />
//             <button
//               onClick={handleEditSave}
//               className="px-2 py-1 bg-green-600 text-white rounded"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setEditing(false)}
//               className="px-2 py-1 bg-gray-400 text-white rounded"
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <p className="text-gray-700 mt-1">{comment.text}</p>
//         )}
//       </div>

//       {/* 3-dot menu */}
//       {user?.id === comment.user?._id && !editing && (
//         <div className="relative ml-2">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 text-gray-600"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           </button>

//           {menuOpen && (
//             <div className="absolute right-0 top-8 bg-white shadow-lg rounded-md z-20">
//               <button
//                 onClick={() => setEditing(true)}
//                 className="block w-full px-3 py-1 text-left text-sm font-semibold hover:bg-gray-100"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="block w-full px-3 py-1 text-left text-sm font-semibold text-red-600 hover:bg-gray-100"
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
















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








