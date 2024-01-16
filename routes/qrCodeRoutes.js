const express = require("express");
const router = express.Router();
const QrGenerator = require("../controllers/qrCodeController");

// Create an instance of the QrGenerator controller
const qrCodeController = new QrGenerator();

// Route to generate and save a QR code
router.post("/generate", qrCodeController.generateAndSaveQrCode);

// Route to get and serve a QR code image by its ID
router.get("/getQrCodeImage/:id", qrCodeController.getQrCodeImage);

// Export the router for use in your application
module.exports = router;
