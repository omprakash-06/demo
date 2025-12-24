const express = require("express");
const upload = require("../middleware/upload");
const { allTraining, createTraining, updateTraining, deleteTraining,} = require("../controllers/trainingController");
const { verifyAdmin } = require("../middleware/verifyAdmin");

const router = express.Router();

// 🔥 image → images (max 5)
router.get("/all", allTraining);
router.post("/create",upload.array("images", 5),verifyAdmin,createTraining);
router.put("/update/:id",upload.array("images",5),verifyAdmin,updateTraining);
router.delete("/delete/:id", verifyAdmin, deleteTraining);

module.exports = router;