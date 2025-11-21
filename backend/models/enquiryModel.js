const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    contact: {
      type: Number,
      required: true,
    },

    msg: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,     
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);
