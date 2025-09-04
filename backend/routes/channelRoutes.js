


// // // // // // =============================================
// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const auth = require("../middleware/authMiddleware");
// // // // const Channel = require("../models/Channel");

// // // // const {
// // // //   getChannel,
// // // //   getChannelByUser,
// // // //   subscribe,
// // // //   unsubscribe,
// // // //   createChannel,
// // // //    updateChannel  
// // // // } = require("../controllers/channelController");

// // // // // ➝ Create channel
// // // // router.post("/", auth, createChannel);


// // // // // ------=====----
// // // // // ✅ Get current user's channel
// // // // router.get("/me", auth, async (req, res) => {
// // // //   try {
// // // //     const channel = await Channel.findOne({ owner: req.userId });
// // // //     if (!channel) return res.json(null);
// // // //     res.json(channel);
// // // //   } catch (err) {
// // // //     res.status(500).json({ message: "Server error" });
// // // //   }
// // // // });

// // // // // ➝ Get channel by userId
// // // // router.get("/user/:userId", getChannelByUser);

// // // // // ➝ Get channel by channelId
// // // // router.get("/:id", getChannel);


// // // // // update channel
// // // // router.put("/:id", auth, updateChannel);


// // // // // ➝ Subscribe / Unsubscribe
// // // // router.post("/:id/subscribe", auth, subscribe);
// // // // router.post("/:id/unsubscribe", auth, unsubscribe);

// // // // module.exports = router;























// // =====================
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Channel = require("../models/Channel");
const {
  getChannel,
  getChannelByUser,
  subscribe,
  unsubscribe,
  createChannel,
  updateChannel
} = require("../controllers/channelController");

// Create channel
router.post("/", auth, createChannel);

// Get current user's channel
router.get("/me", auth, async (req, res) => {
  try {
    const channel = await Channel.findOne({ owner: req.userId });
    if (!channel) return res.json(null);
    res.json({ channel }); // ✅ wrap
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get channel by userId
router.get("/user/:userId", getChannelByUser);

// Get channel by channelId
router.get("/:id", getChannel);

// Update channel
router.put("/:id", auth, updateChannel);

// Subscribe / Unsubscribe
router.post("/:id/subscribe", auth, subscribe);
router.post("/:id/unsubscribe", auth, unsubscribe);

module.exports = router;


















// // ========================
