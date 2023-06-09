const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema(
  {
    poll: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Poll",
      required: true,
    },
    text: {
      type: String,
    },
    votes: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Options", optionSchema);
