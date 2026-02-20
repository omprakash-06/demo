const Testimonial = require("../models/testimonialModel");

// Get all
exports.allTestimonials = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 12;
    const skip = (page - 1) * limit;

    const total = await Testimonial.countDocuments();

    const testimonials = await Testimonial.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(); // 👈 VERY IMPORTANT

    res.status(200).json(testimonials);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//  Create
exports.createTestimonial = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTestimonial = new Testimonial({
      title,
      description,
      image: req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype,
          }
        : null,
    });

    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Update
exports.updateTestimonial = async (req, res) => {
  try {
    const { title, description } = req.body;

    const updateData = { title, description };

    if (req.file) {
      updateData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Not found" });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Delete
exports.deleteTestimonial = async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
