const express = require("express");
const {
  allEnquiry,
  getEnquiry,
  createEnquiry,
} = require("../controllers/EnquiryController");

const router = express.Router();

router.get("/all", allEnquiry);
router.post("/create", createEnquiry);

module.exports = router;
