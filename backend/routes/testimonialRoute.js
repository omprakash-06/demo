const express = require("express");
const upload = require("../middleware/upload"); // your multer memoryStorage file
const {
  allTestimonials,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");

const router = express.Router();

router.get("/all", allTestimonials);
router.post("/create", upload.single("image"), createTestimonial);
router.put("/update/:id", upload.single("image"), updateTestimonial);
router.delete("/delete/:id", deleteTestimonial);

module.exports = router;
