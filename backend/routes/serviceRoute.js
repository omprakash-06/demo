const express = require("express");
const upload = require("../middleware/upload");   // Multer setup
const {
  allServices,
  getService,
  createService,
  updateService,
  deleteService,
} = require("../controllers/ServiceController");

const { verifyAdmin } = require("../middleware/verifyAdmin");

const router = express.Router();

router.get("/all", allServices);
router.post("/create", verifyAdmin,upload.single("image"), createService);
router.put("/update/:id",verifyAdmin, upload.single("image"), updateService);
router.delete("/delete/:id",verifyAdmin, deleteService);

module.exports = router;
