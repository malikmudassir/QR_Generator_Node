const mongoose = require("mongoose");

// Define a Mongoose schema for QR codes
const qrCodeSchema = new mongoose.Schema({
  // The data to be encoded in the QR code
  data: {
    type: String, // The data is expected to be a string
    required: true, // It is required, meaning it must be present
  },
  // The base64-encoded image of the QR code
  image: {
    type: String, // The image is expected to be a string (base64 encoded)
    required: true, // It is required, meaning it must be present
  },
});

// Create a Mongoose model named "QrCode" using the defined schema
module.exports = mongoose.model("QrCode", qrCodeSchema);
