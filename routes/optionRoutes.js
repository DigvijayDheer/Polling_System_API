const express = require("express");
const router = express.Router();
const { addVote, deleteOption } = require("../controllers/optionsController");

// Add a vote to an option or delete it
router.put("/:id", addVote).delete("/:id", deleteOption);

module.exports = router;
