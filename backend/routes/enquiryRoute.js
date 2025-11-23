const express = require("express");
const {
  allEnquiry,
  createEnquiry,
} = require("../controllers/EnquiryController");

const { verifyAdmin } = require("../middleware/verifyAdmin");

const router = express.Router();

router.get("/all",verifyAdmin, allEnquiry);
router.post("/create", createEnquiry);

module.exports = router;
