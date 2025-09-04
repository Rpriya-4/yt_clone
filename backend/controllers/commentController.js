const Comment = require("../models/Comment");

// ➝ Add a new comment to a video
exports.addComment = async (req, res, next) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Comment text required" });

    const comment = await Comment.create({
      video: req.params.videoId,
      user: req.userId,
      text,
    });

    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};

// ➝ Get all comments of a video
exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ video: req.params.videoId })
      .populate("user", "username")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (err) {
    next(err);
  }
};



exports.updateComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user.toString() !== req.userId) {
      return res.status(403).json({ message: "Not allowed" });
    }

    comment.text = req.body.text;
    await comment.save();
    res.json(comment);
  } catch (err) {
    next(err);
  }
};



// ➝ Delete comment 
exports.deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user.toString() !== req.userId) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await comment.deleteOne();
    res.json({ message: "Comment deleted" });
  } catch (err) {
    next(err);
  }
};

