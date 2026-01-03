const express = require("express");
const { registerAdmin, loginAdmin, getAdminProfile, logoutAdmin } = require("../controllers/AdminController");
const { verifyAdmin } = require("../middleware/verifyAdmin");

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// cookie-based protected route
router.get("/me", verifyAdmin, getAdminProfile);

// logout
router.post("/logout", logoutAdmin);
//ping 

app.get("/health", (req, res) => {
  res.send("OK");
});


module.exports = router;
