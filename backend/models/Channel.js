

const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema(
  {
    channelName: { type: String, required: true, trim: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ownerFullName: { type: String, default: "" },
    description: { type: String, default: "" },
    banner: { type: String, default: "" },
    subscribers: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Channel", channelSchema);
