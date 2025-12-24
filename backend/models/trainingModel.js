const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String,
});

const trainingSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    description: String,

    // 🔥 Multiple images (max 5 logic controller me)
    images: [imageSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Training", trainingSchema);