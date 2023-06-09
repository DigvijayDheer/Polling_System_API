const express = require("express");
const router = express.Router();
const {
  createPoll,
  addOption,
  getPoll,
  deletePoll,
  getAllPolls,
} = require("../controllers/pollController");

// Create a poll
router.post("/create", createPoll);

// Add an option to a specific question
router.post("/:id/options/create", addOption);

// View all polls
router.get("/", getAllPolls);

// View a specific poll
router.get("/:id", getPoll);

// Delete a poll
router.delete("/:id", deletePoll);

module.exports = router;
