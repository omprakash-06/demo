const express = require("express");
const multer = require("multer");
const {
  allTraining,
  getTraining,
  createTraining,
  updateTraining,
  deleteTraining,
} = require("../controllers/TrainingController");

const router = express.Router();

// Memory storage for buffer
const upload = multer({ storage: multer.memoryStorage() });

router.get("/all", allTraining);
router.post("/create", upload.single("image"), createTraining);
router.put("/update/:id", upload.single("image"), updateTraining);
router.delete("/delete/:id", deleteTraining);

module.exports = router;
