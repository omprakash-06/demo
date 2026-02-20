const bcrypt = require("bcrypt");
const AdminModel = require("../models/adminModel");
const { generateToken } = require("../utils/generateToken");

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const token = generateToken(admin);

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Login successful",
        admin: { id: admin._id, fullname: admin.fullname, email: admin.email },
      });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

exports.getAdminProfile = async (req, res) => {
  try {
    const admin = await AdminModel.findById(req.admin.id).select("-password");
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ user: admin });

  } catch (error) {
    console.error("Admin profile error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.logoutAdmin = async (req, res) => {
  res
    .clearCookie("token", { httpOnly: true, sameSite: "none", secure: true })
    .status(200)
    .json({ message: "Logout successful" });
};
