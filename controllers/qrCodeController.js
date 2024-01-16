const QRCode = require("qrcode");
const QrCodeModel = require("../models/qrCodeSchema");
const { Response } = require("../utils/Response");
const validateUrl = require("../utils/validateUrl");

class QrGenerator {
  // Generate and save a QR code
  async generateAndSaveQrCode(req, res) {
    const { data } = req.body;
    try {
      // Validate if the input is a valid URL
      if (validateUrl(data)) {
        // Generate QR code
        const qrCodeBuffer = await QRCode.toBuffer(data, {
          type: "png",
          errorCorrectionLevel: "H",
        });

        // Save QR code data to the database
        const qrCode = new QrCodeModel({
          data,
          image: qrCodeBuffer.toString("base64"),
        });

        // Save the QR code to the database
        const result = await qrCode.save();

        // Respond with a success message and the ID of the saved QR code
        return Response.success(
          res,
          "QR code generated and saved successfully",
          201,
          result.id
        );
      }

      // If the input is not a valid URL, respond with an error
      return Response.error(res, "Invalid Url", 403);
    } catch (error) {
      // Handle any unexpected errors and respond with an error message
      return Response.error(res, error.message, 500);
    }
  }

  // Get and serve a QR code image
  async getQrCodeImage(req, res) {
    try {
      const { id } = req.params;
      const qrCode = await QrCodeModel.findById(id);

      if (!qrCode) {
        // If the QR code is not found in the database, respond with an error
        return Response.error(res, "QR code not found", 403);
      }

      // Convert the base64 image data to a buffer
      const qrCodeBuffer = Buffer.from(qrCode.image, "base64");

      // Send the QR code image as a response
      res.end(qrCodeBuffer);

      // You can also set the content type and content length headers if needed
      // res.writeHead(200, {
      //   "Content-Type": "image/png",
      //   "Content-Length": qrCodeBuffer.length,
      // });

      // Respond with a success message and the QR code image (if needed)
      // return Response.success(res, "QR Code", 200, qrCodeBuffer);
    } catch (error) {
      // Handle any unexpected errors and respond with an error message
      return Response.error(res, error.message, 500);
    }
  }
}

module.exports = QrGenerator;
