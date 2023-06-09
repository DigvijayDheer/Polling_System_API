const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    option: [{ type: mongoose.Schema.Types.ObjectId, ref: "Options" }],
    vote: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Poll", pollSchema);
