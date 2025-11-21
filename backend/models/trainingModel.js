const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    description: String,
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Training", trainingSchema);
