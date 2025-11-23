const express = require("express");
const multer = require("multer");
const {
  allTraining,
  getTraining,
  createTraining,
  updateTraining,
  deleteTraining,
} = require("../controllers/trainingController");
const { verifyAdmin } = require("../middleware/verifyAdmin");

const router = express.Router();

// Memory storage for buffer
const upload = multer({ storage: multer.memoryStorage() });

router.get("/all", allTraining);
router.post("/create", verifyAdmin , upload.single("image"), createTraining);
router.put("/update/:id", verifyAdmin, upload.single("image"), updateTraining);
router.delete("/delete/:id", verifyAdmin, deleteTraining);

module.exports = router;
