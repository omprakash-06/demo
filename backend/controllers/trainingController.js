const Training = require("../models/trainingModel");

// 📌 Get all training
exports.allTraining = async (req, res) => {
  try {
    const data = await Training.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching training",
      error: err.message,
    });
  }
};

// 📌 Create training (multiple images)
exports.createTraining = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const images = req.files
      ? req.files.map((file) => ({
          data: file.buffer,
          contentType: file.mimetype,
        }))
      : [];


    if (images.length > 5) {
      return res.status(400).json({ message: "Max 5 images allowed" });
    }

    const training = new Training({
      title,
      subtitle,
      description,
      images,
    });

    await training.save();
    res.status(201).json({ message: "Training created", data: training });
  } catch (err) {
    res.status(500).json({
      message: "Error creating training",
      error: err,
    });
  }
};

// 📌 Update training
exports.updateTraining = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;

    const updateData = { title, subtitle, description };

    if (req.files && req.files.length > 0) {
      if (req.files.length > 5) {
        return res.status(400).json({ message: "Max 5 images allowed" });
      }

      updateData.images = req.files.map((file) => ({
        data: file.buffer,
        contentType: file.mimetype,
      }));
    }

    const updated = await Training.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Training not found" });
    }

    res.status(200).json({ message: "Training updated", data: updated });
  } catch (err) {
    res.status(500).json({
      message: "Error updating training",
      error: err.message,
    });
  }
};

// 📌 Delete training
exports.deleteTraining = async (req, res) => {
  try {
    const deleted = await Training.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Training not found" });

    res.status(200).json({ message: "Training deleted" });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting training",
      error: err.message,
    });
  }
};