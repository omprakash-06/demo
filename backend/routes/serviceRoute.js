const express = require("express");
const upload = require("../middleware/upload");   // Multer setup
const {
  allServices,
  getService,
  createService,
  updateService,
  deleteService,
} = require("../controllers/ServiceController");

const router = express.Router();

router.get("/all", allServices);
router.post("/create", upload.single("image"), createService);
router.put("/update/:id", upload.single("image"), updateService);
router.delete("/delete/:id", deleteService);

module.exports = router;
