const express = require("express");
const multer = require("multer");
const { allTraining, createTraining, updateTraining, deleteTraining,} = require("../controllers/trainingController");
const { verifyAdmin } = require("../middleware/verifyAdmin");

const router = express.Router();

// memory storage
const upload = multer({ storage: multer.memoryStorage() });

// 🔥 image → images (max 5)
router.get("/all", allTraining);
router.post("/create",verifyAdmin, upload.array("images", 5),createTraining);
router.put("/update/:id",verifyAdmin,upload.array("images", 5),updateTraining);
router.delete("/delete/:id", verifyAdmin, deleteTraining);

module.exports = router;