const Service = require("../models/serviceModel");

// ------------------ CREATE SERVICE ------------------
exports.createService = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;

    if (!title || !subtitle || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let imgData = null;
    if (req.file) {
      imgData = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const service = await Service.create({
      title,
      subtitle,
      description,
      image: imgData, // ✅ use "image" to match schema
    });

    res.status(201).json({
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    console.error("Create Service Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------ GET ALL SERVICES ------------------
// GET ALL SERVICES
exports.allServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });

    const servicesWithImages = services.map((service) => ({
      _id: service._id,
      title: service.title,
      subtitle: service.subtitle,
      description: service.description,
      image: service.image
        ? `data:${service.image.contentType};base64,${service.image.data.toString("base64")}`
        : null,
    }));

    res.status(200).json({
      count: services.length,
      services: servicesWithImages,
    });
  } catch (error) {
    console.error("Get All Services Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------ UPDATE SERVICE ------------------
exports.updateService = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;

    const updateData = { title, subtitle, description };

    if (req.file) {
      updateData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const updated = await Service.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({
      message: "Service updated successfully",
      updated,
    });
  } catch (error) {
    console.error("Update Service Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------ DELETE SERVICE ------------------
exports.deleteService = async (req, res) => {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({
      message: "Service deleted successfully",
      deleted,
    });
  } catch (error) {
    console.error("Delete Service Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
