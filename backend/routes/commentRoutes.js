// // Optional if you want separate comment routes.
// // You can skip this because we handled comments in videoRoutes.
// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/authMiddleware");
// const { addComment, getComments, deleteComment } = require("../controllers/commentController");

// // Get comments of a video
// router.get("/:videoId", getComments);

// // Add a comment (protected)
// router.post("/:videoId", auth, addComment);

// // Delete a comment (only owner can)
// router.delete("/:id", auth, deleteComment);

// module.exports = router;























const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  addComment,
  getComments,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

// get all comments for video
router.get("/:id", getComments);

// add new comment (protected)
router.post("/:id", auth, addComment);

// update comment (protected)
router.put("/:commentId", auth, updateComment);

// delete comment (protected)
router.delete("/:commentId", auth, deleteComment);

module.exports = router;
