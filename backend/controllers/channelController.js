

// // // // // // ==================================================
// // // // const Channel = require("../models/Channel");
// // // // const Video = require("../models/Video");
// // // // const User = require("../models/User");

// // // // // ➝ Create Channel
// // // // exports.createChannel = async (req, res, next) => {
// // // //   try {
// // // //     const { channelName, description, banner } = req.body;

// // // //     // check if user already has channel
// // // //     const existing = await Channel.findOne({ owner: req.userId });
// // // //     if (existing) {
// // // //       return res.status(400).json({ message: "Channel already exists for this user" });
// // // //     }

// // // //     if (!channelName) {
// // // //       return res.status(400).json({ message: "Channel name is required" });
// // // //     }

// // // //     // ✅ Fetch logged-in user details to auto-fill fullName
// // // //     const user = await User.findById(req.userId);
// // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // //     const channel = new Channel({
// // // //       channelName,
// // // //       description,
// // // //       banner: banner || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop",
// // // //       owner: req.userId,
// // // //       ownerFullName: user.fullName || user.username || "", // ✅ auto insert
// // // //       subscribers: 0,
// // // //     });

// // // //     await channel.save();
// // // //     res.status(201).json(channel);
// // // //   } catch (e) {
// // // //     next(e);
// // // //   }
// // // // };

// // // // // ➝ Get Channel by channelId (with videos)
// // // // exports.getChannel = async (req, res, next) => {
// // // //   try {
// // // //     const ch = await Channel.findById(req.params.id)
// // // //       .populate("owner", "fullName username");

// // // //     if (!ch) return res.status(404).json({ message: "Channel not found" });

// // // //     const videos = await Video.find({ channel: ch._id }).sort({ createdAt: -1 });

// // // //     res.json({
// // // //       channel: {
// // // //         ...ch.toObject(),
// // // //         ownerFullName: ch.owner?.fullName || ch.owner?.username || "",
// // // //       },
// // // //       videos,
// // // //     });
// // // //   } catch (e) {
// // // //     next(e);
// // // //   }
// // // // };

// // // // // ➝ Get Channel by userId (for checking "View Your Channel")
// // // // exports.getChannelByUser = async (req, res, next) => {
// // // //   try {
// // // //     const ch = await Channel.findOne({ owner: req.params.userId })
// // // //       .populate("owner", "fullName username");

// // // //     if (!ch) return res.status(404).json({ message: "No channel found" });

// // // //     res.json({
// // // //       ...ch.toObject(),
// // // //       ownerFullName: ch.owner?.fullName || ch.owner?.username || "",
// // // //     });
// // // //   } catch (e) {
// // // //     next(e);
// // // //   }
// // // // };

// // // // // ➝ Subscribe
// // // // exports.subscribe = async (req, res, next) => {
// // // //   try {
// // // //     const user = await User.findById(req.userId);
// // // //     const ch = await Channel.findById(req.params.id);
// // // //     if (!user || !ch) return res.status(404).json({ message: "Not found" });

// // // //     const already = user.subscribedChannels.some((id) => id.equals(ch._id));
// // // //     if (already) return res.status(400).json({ message: "Already subscribed" });

// // // //     user.subscribedChannels.addToSet(ch._id);
// // // //     ch.subscribers += 1;
// // // //     await user.save();
// // // //     await ch.save();

// // // //     res.json({ subscribers: ch.subscribers });
// // // //   } catch (e) {
// // // //     next(e);
// // // //   }
// // // // };

// // // // // ➝ Unsubscribe
// // // // exports.unsubscribe = async (req, res, next) => {
// // // //   try {
// // // //     const user = await User.findById(req.userId);
// // // //     const ch = await Channel.findById(req.params.id);
// // // //     if (!user || !ch) return res.status(404).json({ message: "Not found" });

// // // //     const had = user.subscribedChannels.some((id) => id.equals(ch._id));
// // // //     if (!had) return res.status(400).json({ message: "Not subscribed" });

// // // //     user.subscribedChannels.pull(ch._id);
// // // //     ch.subscribers = Math.max(0, ch.subscribers - 1);
// // // //     await user.save();
// // // //     await ch.save();

// // // //     res.json({ subscribers: ch.subscribers });
// // // //   } catch (e) {
// // // //     next(e);
// // // //   }
// // // // };

// // // // // ➝ Update Channel
// // // // exports.updateChannel = async (req, res, next) => {
// // // //   try {
// // // //     const { id } = req.params;
// // // //     const updates = req.body;

// // // //     // find channel
// // // //     const ch = await Channel.findById(id);
// // // //     if (!ch) return res.status(404).json({ message: "Channel not found" });

// // // //     // check ownership
// // // //     if (ch.owner.toString() !== req.userId) {
// // // //       return res.status(403).json({ message: "Not allowed" });
// // // //     }

// // // //     // only allow safe fields to update
// // // //     const allowed = ["channelName", "description", "banner"];
// // // //     allowed.forEach((field) => {
// // // //       if (updates[field] !== undefined) {
// // // //         ch[field] = updates[field];
// // // //       }
// // // //     });

// // // //     await ch.save();
// // // //     res.json(ch);
// // // //   } catch (e) {
// // // //     next(e);
// // // //   }
// // // // };

































// // // // =========================================================
const Channel = require("../models/Channel");
const Video = require("../models/Video");
const User = require("../models/User");

// ➝ Create Channel
exports.createChannel = async (req, res, next) => {
  try {
    const { channelName, description, banner } = req.body;

    // check if user already has channel
    const existing = await Channel.findOne({ owner: req.userId });
    if (existing) {
      return res.status(400).json({ message: "Channel already exists for this user" });
    }

    if (!channelName) {
      return res.status(400).json({ message: "Channel name is required" });
    }

    // ✅ Fetch logged-in user details to auto-fill fullName
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const channel = new Channel({
      channelName,
      description,
      banner: banner || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop",
      owner: req.userId,
      ownerFullName: user.fullName || user.username || "",
      subscribers: 0,
    });

    await channel.save();

    // ✅ Update user with channelId
    user.channelId = channel._id;
    await user.save();

    res.status(201).json({ channel });
  } catch (e) {
    next(e);
  }
};

// ➝ Get Channel by channelId
exports.getChannel = async (req, res, next) => {
  try {
    const ch = await Channel.findById(req.params.id).populate("owner", "fullName username");

    if (!ch) return res.status(404).json({ message: "Channel not found" });

    const videos = await Video.find({ channel: ch._id }).sort({ createdAt: -1 });

    res.json({
      channel: {
        ...ch.toObject(),
        ownerFullName: ch.owner?.fullName || ch.owner?.username || "",
      },
      videos,
    });
  } catch (e) {
    next(e);
  }
};

// ➝ Get Channel by userId
exports.getChannelByUser = async (req, res, next) => {
  try {
    const ch = await Channel.findOne({ owner: req.params.userId }).populate("owner", "fullName username");

    if (!ch) return res.status(404).json({ message: "No channel found" });

    res.json({
      ...ch.toObject(),
      ownerFullName: ch.owner?.fullName || ch.owner?.username || "",
    });
  } catch (e) {
    next(e);
  }
};

// Subscribe
exports.subscribe = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const ch = await Channel.findById(req.params.id);
    if (!user || !ch) return res.status(404).json({ message: "Not found" });

    const already = user.subscribedChannels.some((id) => id.equals(ch._id));
    if (already) return res.status(400).json({ message: "Already subscribed" });

    user.subscribedChannels.addToSet(ch._id);
    ch.subscribers += 1;
    await user.save();
    await ch.save();

    res.json({ subscribers: ch.subscribers });
  } catch (e) {
    next(e);
  }
};

// Unsubscribe
exports.unsubscribe = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const ch = await Channel.findById(req.params.id);
    if (!user || !ch) return res.status(404).json({ message: "Not found" });

    const had = user.subscribedChannels.some((id) => id.equals(ch._id));
    if (!had) return res.status(400).json({ message: "Not subscribed" });

    user.subscribedChannels.pull(ch._id);
    ch.subscribers = Math.max(0, ch.subscribers - 1);
    await user.save();
    await ch.save();

    res.json({ subscribers: ch.subscribers });
  } catch (e) {
    next(e);
  }
};

// Update Channel
exports.updateChannel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const ch = await Channel.findById(id);
    if (!ch) return res.status(404).json({ message: "Channel not found" });

    if (ch.owner.toString() !== req.userId) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const allowed = ["channelName", "description", "banner"];
    allowed.forEach((field) => {
      if (updates[field] !== undefined) {
        ch[field] = updates[field];
      }
    });

    await ch.save();
    res.json(ch);
  } catch (e) {
    next(e);
  }
};

// =============================












