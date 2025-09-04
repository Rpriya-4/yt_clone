const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  listVideos,
  getVideo,
  createVideo,
  likeVideo,
  dislikeVideo,
  addComment,
  getComments,
  updateVideo,
  deleteVideo,
  updateComment,
  deleteComment,
   getChannelVideos
  
} = require("../controllers/videoController");



// Home (dusre users ke videos sirf)
router.get("/", auth, listVideos);







// Channel videos
router.get("/channel/:channelId", getChannelVideos);


// public
router.get("/", listVideos);
router.get("/:id", getVideo);
router.get("/:id/comments", getComments);

// protected
router.post("/", auth, createVideo);
router.post("/:id/like", auth, likeVideo);
router.post("/:id/dislike", auth, dislikeVideo);
router.post("/:id/comments", auth, addComment);


// ✅ new routes
router.put("/:id", auth, updateVideo);
router.delete("/:id", auth, deleteVideo);


// routes/videoRoutes.js
router.put("/:videoId/comments/:commentId", auth, updateComment);


// DELETE comment
router.delete("/:videoId/comments/:commentId", auth, deleteComment);

module.exports = router;
