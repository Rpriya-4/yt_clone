

// // // // // const Video = require("../models/Video");
// // // // // const Comment = require("../models/Comment");
// // // // // const Channel = require("../models/Channel");

// // // // // // List videos
// // // // // exports.listVideos = async (req, res, next) => {
// // // // //   try {
// // // // //     const { q, category } = req.query;
// // // // //     const filter = {};
// // // // //     if (q) filter.title = { $regex: q, $options: "i" };
// // // // //     if (category && category !== "All") filter.category = category;

// // // // //     const videos = await Video.find(filter)
// // // // //       .populate("channel", "channelName")
// // // // //       .sort({ createdAt: -1 });

// // // // //     res.json(videos);
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };

// // // // // // Get video by ID
// // // // // exports.getVideo = async (req, res, next) => {
// // // // //   try {
// // // // //     const video = await Video.findById(req.params.id)
// // // // //       .populate("channel", "channelName")
// // // // //       .populate("likes", "username")
// // // // //       .populate("dislikes", "username");
// // // // //     if (!video) return res.status(404).json({ message: "Video not found" });
// // // // //     res.json(video);
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };

// // // // // // Create video
// // // // // exports.createVideo = async (req, res, next) => {
// // // // //   try {
// // // // //     const { title, description, videoUrl, thumbnailUrl, channel, category } = req.body;
// // // // //     const v = await Video.create({ title, description, videoUrl, thumbnailUrl, channel, category });
// // // // //     res.status(201).json(v);
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };

// // // // // // Like video
// // // // // exports.likeVideo = async (req, res, next) => {
// // // // //   try {
// // // // //     const userId = req.userId;
// // // // //     const video = await Video.findById(req.params.id);
// // // // //     if (!video) return res.status(404).json({ message: "Video not found" });

// // // // //     const liked = video.likes.includes(userId);
// // // // //     if (liked) {
// // // // //       video.likes.pull(userId);
// // // // //     } else {
// // // // //       video.likes.addToSet(userId);
// // // // //       video.dislikes.pull(userId);
// // // // //     }
// // // // //     await video.save();
// // // // //     res.json({ likes: video.likes.length, dislikes: video.dislikes.length });
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };

// // // // // // Dislike video
// // // // // exports.dislikeVideo = async (req, res, next) => {
// // // // //   try {
// // // // //     const userId = req.userId;
// // // // //     const video = await Video.findById(req.params.id);
// // // // //     if (!video) return res.status(404).json({ message: "Video not found" });

// // // // //     const disliked = video.dislikes.includes(userId);
// // // // //     if (disliked) {
// // // // //       video.dislikes.pull(userId);
// // // // //     } else {
// // // // //       video.dislikes.addToSet(userId);
// // // // //       video.likes.pull(userId);
// // // // //     }
// // // // //     await video.save();
// // // // //     res.json({ likes: video.likes.length, dislikes: video.dislikes.length });
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };

// // // // // // Add comment
// // // // // exports.addComment = async (req, res, next) => {
// // // // //   try {
// // // // //     const comment = await Comment.create({
// // // // //       video: req.params.id,
// // // // //       user: req.userId,
// // // // //       text: req.body.text,
// // // // //     });
// // // // //     res.status(201).json(comment);
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };

// // // // // // Get comments
// // // // // exports.getComments = async (req, res, next) => {
// // // // //   try {
// // // // //     const comments = await Comment.find({ video: req.params.id })
// // // // //       .populate("user", "username")
// // // // //       .sort({ createdAt: 1 });
// // // // //     res.json(comments);
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };
















// // // // // // controllers/videoController.js

// // // // // // UPDATE COMMENT
// // // // // exports.updateComment = async (req, res, next) => {
// // // // //   try {
// // // // //     const { videoId, commentId } = req.params;
// // // // //     const { text } = req.body;

// // // // //     const comment = await Comment.findById(commentId);
// // // // //     if (!comment) return res.status(404).json({ message: "Comment not found" });

// // // // //     if (comment.user.toString() !== req.userId) {
// // // // //       return res.status(403).json({ message: "Not allowed" });
// // // // //     }

// // // // //     comment.text = text;
// // // // //     await comment.save();
// // // // //     res.json(comment);
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };


// // // // // // Update video
// // // // // exports.updateVideo = async (req, res, next) => {
// // // // //   try {
// // // // //     const { id } = req.params;
// // // // //     const updates = req.body;

// // // // //     const video = await Video.findById(id);
// // // // //     if (!video) return res.status(404).json({ message: "Video not found" });

// // // // //     const channel = await Channel.findById(video.channel);
// // // // //     if (!channel || channel.owner.toString() !== req.userId) {
// // // // //       return res.status(403).json({ message: "Not allowed" });
// // // // //     }

// // // // //     const allowed = ["title", "description", "thumbnailUrl", "videoUrl", "category"];
// // // // //     allowed.forEach((field) => {
// // // // //       if (updates[field] !== undefined) video[field] = updates[field];
// // // // //     });

// // // // //     await video.save();
// // // // //     res.json(video);
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };

// // // // // // Delete video
// // // // // exports.deleteVideo = async (req, res, next) => {
// // // // //   try {
// // // // //     const { id } = req.params;

// // // // //     const video = await Video.findById(id);
// // // // //     if (!video) return res.status(404).json({ message: "Video not found" });

// // // // //     const channel = await Channel.findById(video.channel);
// // // // //     if (!channel || channel.owner.toString() !== req.userId) {
// // // // //       return res.status(403).json({ message: "Not allowed" });
// // // // //     }

// // // // //     await Comment.deleteMany({ video: video._id });
// // // // //     await video.deleteOne();
// // // // //     res.json({ message: "Video deleted successfully" });
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };

// // // // // // DELETE COMMENT
// // // // // exports.deleteComment = async (req, res, next) => {
// // // // //   try {
// // // // //     const { videoId, commentId } = req.params;

// // // // //     const comment = await Comment.findById(commentId);
// // // // //     if (!comment) return res.status(404).json({ message: "Comment not found" });

// // // // //     if (comment.user.toString() !== req.userId) {
// // // // //       return res.status(403).json({ message: "Not allowed" });
// // // // //     }

// // // // //     await comment.deleteOne();
// // // // //     res.json({ message: "Comment deleted successfully" });
// // // // //   } catch (e) {
// // // // //     next(e);
// // // // //   }
// // // // // };

// // // // // ------------------











// // // // // ---------------------
// // // const Video = require("../models/Video");
// // // const Comment = require("../models/Comment");
// // // const Channel = require("../models/Channel");

// // // // List videos
// // // exports.listVideos = async (req, res, next) => {
// // //   try {
// // //     const { q, category } = req.query;
// // //     const filter = {};
// // //     if (q) filter.title = { $regex: q, $options: "i" };
// // //     if (category && category !== "All") filter.category = category;

// // //     const videos = await Video.find(filter)
// // //       .populate("channel", "channelName")
// // //       .sort({ createdAt: -1 });

// // //     res.json(videos);
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };

// // // // Get video by ID
// // // exports.getVideo = async (req, res, next) => {
// // //   try {
// // //     const video = await Video.findById(req.params.id)
// // //       .populate("channel", "channelName")
// // //       .populate("likes", "username")
// // //       .populate("dislikes", "username");
// // //     if (!video) return res.status(404).json({ message: "Video not found" });
// // //     res.json(video);
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };

// // // // Create video
// // // exports.createVideo = async (req, res, next) => {
// // //   try {
// // //     const { title, description, videoUrl, thumbnailUrl, channel, category } = req.body;
// // //     const v = await Video.create({ title, description, videoUrl, thumbnailUrl, channel, category });
// // //     res.status(201).json(v);
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };

// // // // Like video
// // // exports.likeVideo = async (req, res, next) => {
// // //   try {
// // //     const userId = req.userId;
// // //     const video = await Video.findById(req.params.id);
// // //     if (!video) return res.status(404).json({ message: "Video not found" });

// // //     const liked = video.likes.includes(userId);
// // //     if (liked) {
// // //       video.likes.pull(userId);
// // //     } else {
// // //       video.likes.addToSet(userId);
// // //       video.dislikes.pull(userId);
// // //     }
// // //     await video.save();
// // //     res.json({ likes: video.likes.length, dislikes: video.dislikes.length });
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };

// // // // Dislike video
// // // exports.dislikeVideo = async (req, res, next) => {
// // //   try {
// // //     const userId = req.userId;
// // //     const video = await Video.findById(req.params.id);
// // //     if (!video) return res.status(404).json({ message: "Video not found" });

// // //     const disliked = video.dislikes.includes(userId);
// // //     if (disliked) {
// // //       video.dislikes.pull(userId);
// // //     } else {
// // //       video.dislikes.addToSet(userId);
// // //       video.likes.pull(userId);
// // //     }
// // //     await video.save();
// // //     res.json({ likes: video.likes.length, dislikes: video.dislikes.length });
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };

// // // // Add comment
// // // exports.addComment = async (req, res, next) => {
// // //   try {
// // //     const comment = await Comment.create({
// // //       video: req.params.id,
// // //       user: req.userId,
// // //       text: req.body.text,
// // //     });
// // //     const populatedComment = await comment.populate("user", "username");
// // //     res.status(201).json(populatedComment);
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };

// // // // Get comments
// // // exports.getComments = async (req, res, next) => {
// // //   try {
// // //     const comments = await Comment.find({ video: req.params.id })
// // //       .populate("user", "username")
// // //       .sort({ createdAt: 1 });
// // //     res.json(comments);
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };

// // // // Update comment
// // // exports.updateComment = async (req, res, next) => {
// // //   try {
// // //     const { videoId, commentId } = req.params;
// // //     const { text } = req.body;

// // //     const comment = await Comment.findById(commentId);
// // //     if (!comment) return res.status(404).json({ message: "Comment not found" });

// // //     if (comment.user.toString() !== req.userId) {
// // //       return res.status(403).json({ message: "Not allowed" });
// // //     }

// // //     comment.text = text;
// // //     await comment.save();
// // //     const updatedComment = await comment.populate("user", "username");
// // //     res.json(updatedComment);
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };

// // // // Update video
// // // exports.updateVideo = async (req, res, next) => {
// // //   try {
// // //     const { id } = req.params;
// // //     const updates = req.body;

// // //     const video = await Video.findById(id);
// // //     if (!video) return res.status(404).json({ message: "Video not found" });

// // //     const channel = await Channel.findById(video.channel);
// // //     if (!channel || channel.owner.toString() !== req.userId) {
// // //       return res.status(403).json({ message: "Not allowed" });
// // //     }

// // //     const allowed = ["title", "description", "thumbnailUrl", "videoUrl", "category"];
// // //     allowed.forEach((field) => {
// // //       if (updates[field] !== undefined) video[field] = updates[field];
// // //     });

// // //     await video.save();
// // //     res.json(video);
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };

// // // // Delete video
// // // exports.deleteVideo = async (req, res, next) => {
// // //   try {
// // //     const { id } = req.params;

// // //     const video = await Video.findById(id);
// // //     if (!video) return res.status(404).json({ message: "Video not found" });

// // //     const channel = await Channel.findById(video.channel);
// // //     if (!channel || channel.owner.toString() !== req.userId) {
// // //       return res.status(403).json({ message: "Not allowed" });
// // //     }

// // //     await Comment.deleteMany({ video: video._id });
// // //     await video.deleteOne();
// // //     res.json({ message: "Video deleted successfully" });
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };

// // // // Delete comment
// // // exports.deleteComment = async (req, res, next) => {
// // //   try {
// // //     const { videoId, commentId } = req.params;

// // //     const comment = await Comment.findById(commentId);
// // //     if (!comment) return res.status(404).json({ message: "Comment not found" });

// // //     if (comment.user.toString() !== req.userId) {
// // //       return res.status(403).json({ message: "Not allowed" });
// // //     }

// // //     await comment.deleteOne();
// // //     res.json({ message: "Comment deleted successfully" });
// // //   } catch (e) {
// // //     next(e);
// // //   }
// // // };
// // // -----------------------------






















// // const Video = require("../models/Video");
// // const Comment = require("../models/Comment");
// // const Channel = require("../models/Channel");

// // // List videos
// // exports.listVideos = async (req, res, next) => {
// //   try {
// //     const { q, category } = req.query;
// //     const filter = {};
// //     if (q) filter.title = { $regex: q, $options: "i" };
// //     if (category && category !== "All") filter.category = category;

// //     const videos = await Video.find(filter)
// //       .populate("channel", "channelName")
// //       .sort({ createdAt: -1 });

// //     res.json(videos);
// //   } catch (e) {
// //     next(e);
// //   }
// // };

// // // Get video by ID
// // exports.getVideo = async (req, res, next) => {
// //   try {
// //     const video = await Video.findById(req.params.id)
// //       .populate("channel", "channelName")
// //       .populate("likes", "username")
// //       .populate("dislikes", "username");
// //     if (!video) return res.status(404).json({ message: "Video not found" });
// //     res.json(video);
// //   } catch (e) {
// //     next(e);
// //   }
// // };

// // // Create video
// // exports.createVideo = async (req, res, next) => {
// //   try {
// //     const { title, description, videoUrl, thumbnailUrl, channel, category } = req.body;
// //     const v = await Video.create({ title, description, videoUrl, thumbnailUrl, channel, category });
// //     res.status(201).json(v);
// //   } catch (e) {
// //     next(e);
// //   }
// // };

// // // Like video
// // exports.likeVideo = async (req, res, next) => {
// //   try {
// //     const userId = req.userId;
// //     const video = await Video.findById(req.params.id);
// //     if (!video) return res.status(404).json({ message: "Video not found" });

// //     const liked = video.likes.includes(userId);
// //     if (liked) {
// //       video.likes.pull(userId);
// //     } else {
// //       video.likes.addToSet(userId);
// //       video.dislikes.pull(userId);
// //     }
// //     await video.save();
// //     res.json({ likes: video.likes.length, dislikes: video.dislikes.length });
// //   } catch (e) {
// //     next(e);
// //   }
// // };

// // // Dislike video
// // exports.dislikeVideo = async (req, res, next) => {
// //   try {
// //     const userId = req.userId;
// //     const video = await Video.findById(req.params.id);
// //     if (!video) return res.status(404).json({ message: "Video not found" });

// //     const disliked = video.dislikes.includes(userId);
// //     if (disliked) {
// //       video.dislikes.pull(userId);
// //     } else {
// //       video.dislikes.addToSet(userId);
// //       video.likes.pull(userId);
// //     }
// //     await video.save();
// //     res.json({ likes: video.likes.length, dislikes: video.dislikes.length });
// //   } catch (e) {
// //     next(e);
// //   }
// // };

// // // Add comment
// // exports.addComment = async (req, res, next) => {
// //   try {
// //     const comment = await Comment.create({
// //       video: req.params.id,
// //       user: req.userId,
// //       text: req.body.text,
// //     });
// //     const populatedComment = await comment.populate("user", "username");
// //     res.status(201).json(populatedComment);
// //   } catch (e) {
// //     next(e);
// //   }
// // };

// // // Get comments
// // exports.getComments = async (req, res, next) => {
// //   try {
// //     const comments = await Comment.find({ video: req.params.id })
// //       .populate("user", "username")
// //       .sort({ createdAt: 1 });
// //     res.json(comments);
// //   } catch (e) {
// //     next(e);
// //   }
// // };

// // // Update comment
// // exports.updateComment = async (req, res, next) => {
// //   try {
// //     const { videoId, commentId } = req.params;
// //     const { text } = req.body;

// //     const comment = await Comment.findById(commentId);
// //     if (!comment) return res.status(404).json({ message: "Comment not found" });

// //     if (comment.user.toString() !== req.userId) {
// //       return res.status(403).json({ message: "Not allowed" });
// //     }

// //     comment.text = text;
// //     await comment.save();
// //     const updatedComment = await comment.populate("user", "username");
// //     res.json(updatedComment);
// //   } catch (e) {
// //     next(e);
// //   }
// // };

// // // Update video
// // exports.updateVideo = async (req, res, next) => {
// //   try {
// //     const { id } = req.params;
// //     const updates = req.body;

// //     const video = await Video.findById(id);
// //     if (!video) return res.status(404).json({ message: "Video not found" });

// //     const channel = await Channel.findById(video.channel);
// //     if (!channel || channel.owner.toString() !== req.userId) {
// //       return res.status(403).json({ message: "Not allowed" });
// //     }

// //     const allowed = ["title", "description", "thumbnailUrl", "videoUrl", "category"];
// //     allowed.forEach((field) => {
// //       if (updates[field] !== undefined) video[field] = updates[field];
// //     });

// //     await video.save();
// //     res.json(video);
// //   } catch (e) {
// //     next(e);
// //   }
// // };

// // // Delete video
// // exports.deleteVideo = async (req, res, next) => {
// //   try {
// //     const { id } = req.params;

// //     const video = await Video.findById(id);
// //     if (!video) return res.status(404).json({ message: "Video not found" });

// //     const channel = await Channel.findById(video.channel);
// //     if (!channel || channel.owner.toString() !== req.userId) {
// //       return res.status(403).json({ message: "Not allowed" });
// //     }

// //     await Comment.deleteMany({ video: video._id });
// //     await video.deleteOne();
// //     res.json({ message: "Video deleted successfully" });
// //   } catch (e) {
// //     next(e);
// //   }
// // };

// // // Delete comment
// // exports.deleteComment = async (req, res, next) => {
// //   try {
// //     const { videoId, commentId } = req.params;

// //     const comment = await Comment.findById(commentId);
// //     if (!comment) return res.status(404).json({ message: "Comment not found" });

// //     if (comment.user.toString() !== req.userId) {
// //       return res.status(403).json({ message: "Not allowed" });
// //     }

// //     await comment.deleteOne();
// //     res.json({ message: "Comment deleted successfully" });
// //   } catch (e) {
// //     next(e);
// //   }
// // };






















// // ===========================================
// const Video = require("../models/Video");
// const Comment = require("../models/Comment");
// const Channel = require("../models/Channel");

// // List videos for Home (exclude current user's channel videos)
// exports.listVideos = async (req, res, next) => {
//   try {
//     const { q, category } = req.query;
//     const filter = {};
//     if (q) filter.title = { $regex: q, $options: "i" };
//     if (category && category !== "All") filter.category = category;

//     // Exclude logged-in user's videos from home
//     if (req.userId) {
//       const userChannels = await Channel.find({ owner: req.userId }).select("_id");
//       const userChannelIds = userChannels.map(c => c._id);
//       filter.channel = { $nin: userChannelIds };
//     }

//     const videos = await Video.find(filter)
//       .populate("channel", "channelName")
//       .sort({ createdAt: -1 });

//     res.json(videos);
//   } catch (e) {
//     next(e);
//   }
// };

// // Get videos for a specific channel
// exports.getChannelVideos = async (req, res, next) => {
//   try {
//     const videos = await Video.find({ channel: req.params.channelId })
//       .populate("channel", "channelName")
//       .sort({ createdAt: -1 });
//     res.json(videos);
//   } catch (e) {
//     next(e);
//   }
// };

// // Get video by ID
// exports.getVideo = async (req, res, next) => {
//   try {
//     const video = await Video.findById(req.params.id)
//       .populate("channel", "channelName")
//       .populate("likes", "username")
//       .populate("dislikes", "username");
//     if (!video) return res.status(404).json({ message: "Video not found" });
//     res.json(video);
//   } catch (e) {
//     next(e);
//   }
// };

// // Create video
// exports.createVideo = async (req, res, next) => {
//   try {
//     const { title, description, videoUrl, thumbnailUrl, channel, category } = req.body;
//     const v = await Video.create({ title, description, videoUrl, thumbnailUrl, channel, category });
//     res.status(201).json(v);
//   } catch (e) {
//     next(e);
//   }
// };

// // Like video
// exports.likeVideo = async (req, res, next) => {
//   try {
//     const userId = req.userId;
//     const video = await Video.findById(req.params.id);
//     if (!video) return res.status(404).json({ message: "Video not found" });

//     const liked = video.likes.includes(userId);
//     if (liked) video.likes.pull(userId);
//     else {
//       video.likes.addToSet(userId);
//       video.dislikes.pull(userId);
//     }

//     await video.save();
//     res.json({ likes: video.likes.length, dislikes: video.dislikes.length });
//   } catch (e) {
//     next(e);
//   }
// };

// // Dislike video
// exports.dislikeVideo = async (req, res, next) => {
//   try {
//     const userId = req.userId;
//     const video = await Video.findById(req.params.id);
//     if (!video) return res.status(404).json({ message: "Video not found" });

//     const disliked = video.dislikes.includes(userId);
//     if (disliked) video.dislikes.pull(userId);
//     else {
//       video.dislikes.addToSet(userId);
//       video.likes.pull(userId);
//     }

//     await video.save();
//     res.json({ likes: video.likes.length, dislikes: video.dislikes.length });
//   } catch (e) {
//     next(e);
//   }
// };

// // Add comment
// exports.addComment = async (req, res, next) => {
//   try {
//     const comment = await Comment.create({
//       video: req.params.id,
//       user: req.userId,
//       text: req.body.text,
//     });
//     const populatedComment = await comment.populate("user", "username");
//     res.status(201).json(populatedComment);
//   } catch (e) {
//     next(e);
//   }
// };

// // Get comments
// exports.getComments = async (req, res, next) => {
//   try {
//     const comments = await Comment.find({ video: req.params.id })
//       .populate("user", "username")
//       .sort({ createdAt: 1 });
//     res.json(comments);
//   } catch (e) {
//     next(e);
//   }
// };

// // Update comment
// exports.updateComment = async (req, res, next) => {
//   try {
//     const { videoId, commentId } = req.params;
//     const { text } = req.body;

//     const comment = await Comment.findById(commentId);
//     if (!comment) return res.status(404).json({ message: "Comment not found" });

//     if (comment.user.toString() !== req.userId)
//       return res.status(403).json({ message: "Not allowed" });

//     comment.text = text;
//     await comment.save();
//     const updatedComment = await comment.populate("user", "username");
//     res.json(updatedComment);
//   } catch (e) {
//     next(e);
//   }
// };

// // Update video
// exports.updateVideo = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;

//     const video = await Video.findById(id);
//     if (!video) return res.status(404).json({ message: "Video not found" });

//     const channel = await Channel.findById(video.channel);
//     if (!channel || channel.owner.toString() !== req.userId)
//       return res.status(403).json({ message: "Not allowed" });

//     const allowed = ["title", "description", "thumbnailUrl", "videoUrl", "category"];
//     allowed.forEach(field => {
//       if (updates[field] !== undefined) video[field] = updates[field];
//     });

//     await video.save();
//     res.json(video);
//   } catch (e) {
//     next(e);
//   }
// };

// // Delete video
// exports.deleteVideo = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const video = await Video.findById(id);
//     if (!video) return res.status(404).json({ message: "Video not found" });

//     const channel = await Channel.findById(video.channel);
//     if (!channel || channel.owner.toString() !== req.userId)
//       return res.status(403).json({ message: "Not allowed" });

//     await Comment.deleteMany({ video: video._id });
//     await video.deleteOne();
//     res.json({ message: "Video deleted successfully" });
//   } catch (e) {
//     next(e);
//   }
// };

// // Delete comment
// exports.deleteComment = async (req, res, next) => {
//   try {
//     const { videoId, commentId } = req.params;

//     const comment = await Comment.findById(commentId);
//     if (!comment) return res.status(404).json({ message: "Comment not found" });

//     if (comment.user.toString() !== req.userId)
//       return res.status(403).json({ message: "Not allowed" });

//     await comment.deleteOne();
//     res.json({ message: "Comment deleted successfully" });
//   } catch (e) {
//     next(e);
//   }
// };

















const Video = require("../models/Video");
const Comment = require("../models/Comment");
const Channel = require("../models/Channel");

// List videos for Home (exclude current user's channel videos)
exports.listVideos = async (req, res, next) => {
  try {
    const { q, category } = req.query;
    const filter = {};
    if (q) filter.title = { $regex: q, $options: "i" };
    if (category && category !== "All") filter.category = category;

    // Exclude logged-in user's videos from home
    if (req.userId) {
      const userChannels = await Channel.find({ owner: req.userId }).select("_id");
      const userChannelIds = userChannels.map(c => c._id);
      filter.channel = { $nin: userChannelIds };
    }

    const videos = await Video.find(filter)
      .populate("channel", "channelName")
      .sort({ createdAt: -1 });

    res.json(videos);
  } catch (e) {
    next(e);
  }
};

// Get videos for a specific channel
exports.getChannelVideos = async (req, res, next) => {
  try {
    const videos = await Video.find({ channel: req.params.channelId })
      .populate("channel", "channelName")
      .sort({ createdAt: -1 });
    res.json(videos);
  } catch (e) {
    next(e);
  }
};

// Get video by ID
exports.getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id)
      .populate("channel", "channelName")
      .populate("likes", "username")
      .populate("dislikes", "username");
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.json(video);
  } catch (e) {
    next(e);
  }
};

// Create video
exports.createVideo = async (req, res, next) => {
  try {
    const { title, description, videoUrl, thumbnailUrl, channel, category } = req.body;
    const v = await Video.create({ title, description, videoUrl, thumbnailUrl, channel, category });
    res.status(201).json(v);
  } catch (e) {
    next(e);
  }
};

// Like video
exports.likeVideo = async (req, res, next) => {
  try {
    const userId = req.userId;
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    const liked = video.likes.includes(userId);
    if (liked) video.likes.pull(userId);
    else {
      video.likes.addToSet(userId);
      video.dislikes.pull(userId);
    }

    await video.save();
    res.json({ likes: video.likes.length, dislikes: video.dislikes.length });
  } catch (e) {
    next(e);
  }
};

// Dislike video
exports.dislikeVideo = async (req, res, next) => {
  try {
    const userId = req.userId;
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    const disliked = video.dislikes.includes(userId);
    if (disliked) video.dislikes.pull(userId);
    else {
      video.dislikes.addToSet(userId);
      video.likes.pull(userId);
    }

    await video.save();
    res.json({ likes: video.likes.length, dislikes: video.dislikes.length });
  } catch (e) {
    next(e);
  }
};

// Add comment
exports.addComment = async (req, res, next) => {
  try {
    const comment = await Comment.create({
      video: req.params.id,
      user: req.userId,
      text: req.body.text,
    });
    const populatedComment = await comment.populate("user", "username");
    res.status(201).json(populatedComment);
  } catch (e) {
    next(e);
  }
};

// Get comments
exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ video: req.params.id })
      .populate("user", "username")
      .sort({ createdAt: 1 });
    res.json(comments);
  } catch (e) {
    next(e);
  }
};

// Update comment
exports.updateComment = async (req, res, next) => {
  try {
    const { videoId, commentId } = req.params;
    const { text } = req.body;

    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user.toString() !== req.userId)
      return res.status(403).json({ message: "Not allowed" });

    comment.text = text;
    await comment.save();
    const updatedComment = await comment.populate("user", "username");
    res.json(updatedComment);
  } catch (e) {
    next(e);
  }
};

// Update video
exports.updateVideo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const video = await Video.findById(id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    const channel = await Channel.findById(video.channel);
    if (!channel || channel.owner.toString() !== req.userId)
      return res.status(403).json({ message: "Not allowed" });

    const allowed = ["title", "description", "thumbnailUrl", "videoUrl", "category" , "views"];
    allowed.forEach(field => {
      if (updates[field] !== undefined) video[field] = updates[field];
    });

    await video.save();
    res.json(video);
  } catch (e) {
    next(e);
  }
};

// Delete video
exports.deleteVideo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const video = await Video.findById(id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    const channel = await Channel.findById(video.channel);
    if (!channel || channel.owner.toString() !== req.userId)
      return res.status(403).json({ message: "Not allowed" });

    await Comment.deleteMany({ video: video._id });
    await video.deleteOne();
    res.json({ message: "Video deleted successfully" });
  } catch (e) {
    next(e);
  }
};

// Delete comment
exports.deleteComment = async (req, res, next) => {
  try {
    const { videoId, commentId } = req.params;

    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user.toString() !== req.userId)
      return res.status(403).json({ message: "Not allowed" });

    await comment.deleteOne();
    res.json({ message: "Comment deleted successfully" });
  } catch (e) {
    next(e);
  }
};


















