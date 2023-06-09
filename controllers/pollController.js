const asyncHandler = require("express-async-handler");
const Poll = require("../models/pollModel");
const Options = require("../models/optionModel");

// @desc      Create a poll
// @route     POST /api/polls/create
const createPoll = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ message: "Please add a title field" });
  }

  const poll = await Poll.create({ title: req.body.title, vote: false });

  res.status(200).json(poll);
});

// @desc      View all polls
// @route     GET /api/polls
const getAllPolls = asyncHandler(async (req, res) => {
  const polls = await Poll.find();

  res.status(200).json(polls);
});

// @desc      View a specific poll
// @route     GET /api/polls/:id
const getPoll = asyncHandler(async (req, res) => {
  // Find the poll by ID
  const poll = await Poll.findById(req.params.id).populate({
    path: "option",
  });

  if (!poll) {
    return res.status(400).json({
      message: "Poll not found!",
    });
  }

  res.status(200).json(poll);
});

// @desc      Delete a poll
// @route     DELETE /api/polls/:id
const deletePoll = asyncHandler(async (req, res) => {
  // Find the poll by ID
  const poll = await Poll.findById(req.params.id);

  if (!poll) {
    res.status(404).json({ message: "Poll not found" });
    return;
  }

  // Delete all options associated with the poll
  await Options.deleteMany({ poll: poll._id });

  // Delete the poll
  await poll.deleteOne();

  res
    .status(200)
    .json({ message: "Poll deleted Successfully", id: req.params.id });
});

// @desc      Add an option to poll
// @route     POST /api/polls/:id/options/create
const addOption = asyncHandler(async (req, res) => {
  // Find the question by ID
  const poll = await Poll.findById(req.params.id);

  if (!poll) {
    return res.status(404).json({ error: "Poll not found" });
  }

  // Create a new option
  const option = new Options({
    poll: req.params.id,
    text: req.body.text,
    votes: 0,
  });
  await option.save();

  // Add the option to the poll's options array
  poll.option.push(option);
  await poll.save();

  res.status(201).json(poll);
});

module.exports = {
  createPoll,
  getPoll,
  getAllPolls,
  deletePoll,
  addOption,
};
