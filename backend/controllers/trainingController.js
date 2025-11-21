const Training = require("../models/trainingModel");

// 📌 Get all training items
exports.allTraining = async (req, res) => {
  try {
    const data = await Training.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching training", error: err.message });
  }
};


// 📌 Create training item
exports.createTraining = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;

    const newTraining = new Training({
      title,
      subtitle,
      description,
      image: req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype,
          }
        : null,
    });

    await newTraining.save();
    res.status(201).json({ message: "Training created", data: newTraining });
  } catch (err) {
    res.status(500).json({ message: "Error creating training", error: err.message });
  }
};

// 📌 Update training item
exports.updateTraining = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;

    const updateData = { title, subtitle, description };

    if (req.file) {
      updateData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const updated = await Training.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Training not found" });

    res.status(200).json({ message: "Training updated", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating training", error: err.message });
  }
};

// 📌 Delete training
exports.deleteTraining = async (req, res) => {
  try {
    const deleted = await Training.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Training not found" });

    res.status(200).json({ message: "Training deleted", data: deleted });
  } catch (err) {
    res.status(500).json({ message: "Error deleting training", error: err.message });
  }
};
