// backend/middleware/upload.js
const multer = require("multer");

// Using memory storage (stores file in req.file.buffer)
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
