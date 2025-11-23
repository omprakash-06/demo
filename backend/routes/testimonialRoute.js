const express = require("express");
const upload = require("../middleware/upload"); // your multer memoryStorage file
const {
  allTestimonials,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");

const { verifyAdmin } = require("../middleware/verifyAdmin");

const router = express.Router();

router.get("/all", allTestimonials);
router.post("/create",verifyAdmin, upload.single("image"), createTestimonial);
router.put("/update/:id", verifyAdmin, upload.single("image"), updateTestimonial);
router.delete("/delete/:id", verifyAdmin, deleteTestimonial);

module.exports = router;
