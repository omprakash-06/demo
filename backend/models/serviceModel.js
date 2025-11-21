const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Service", serviceSchema);
