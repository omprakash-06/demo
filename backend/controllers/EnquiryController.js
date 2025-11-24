const EnquiryModel = require("../models/enquiryModel");
const axios = require("axios");
// ------------------ CREATE ENQUIRY ------------------
exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, contact, msg, type } = req.body;

    if (!name || !email || !contact || !msg || !type) {
      return res
        .status(400)
        .json({ message: "All fields (name, email, contact, msg, type) required" });
    }

    const enquiry = await EnquiryModel.create({
      name,
      email,
      contact,
      msg,
      type,
    });

    res.status(201).json({
      message: "Enquiry created successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Create Enquiry error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------ GET ALL ENQUIRIES ------------------
exports.allEnquiry = async (req, res) => {
  try {
    const enquiries = await EnquiryModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: enquiries.length,
      enquiries,
    });
  } catch (error) {
    console.error("Fetch All Enquiry error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------ GET SINGLE ENQUIRY ------------------
exports.getEnquiry = async (req, res) => {
  try {
    const id = req.params.id;
    const enquiry = await EnquiryModel.findById(id);

    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.status(200).json(enquiry);
  } catch (error) {
    console.error("Get Enquiry error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

