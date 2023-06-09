const asyncHandler = require("express-async-handler");
const Options = require("../models/optionModel");
const Poll = require("../models/pollModel");

// @desc      Add a vote
// @route     PUT /api/options/:id/addVote
const addVote = asyncHandler(async (req, res) => {
  // Find the option by ID
  const option = await Options.findById(req.params.id);

  if (!option) {
    res.status(400).json({ error: "Option not found!" });
  }

  // Increment the vote count
  option.votes += 1;
  await option.save();

  res.status(200).json(option);
});

// @desc      Delete an option
// @route     POST /api/options/:id/delete
const deleteOption = asyncHandler(async (req, res) => {
  // Find the option by ID
  const option = await Options.findById(req.params.id);

  if (!option) {
    res.status(400).json({ error: "Option not found!" });
  }

  const pollId = option.poll;

  // Remove the option from the poll's options array
  const poll = await Poll.findByIdAndUpdate(pollId, {
    $pull: { option: option._id },
  });

  // Delete the option
  await option.deleteOne();

  res
    .status(200)
    .json({ message: "Option deleted Successfully", id: req.params.id });
});

module.exports = {
  addVote,
  deleteOption,
};
