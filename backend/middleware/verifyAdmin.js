const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");

const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const admin = await Admin.findById(decoded.id).select("-password");
    if (!admin) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.admin = admin;
    next();
  } catch (err) {
    console.error("Admin auth error:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { verifyAdmin };
