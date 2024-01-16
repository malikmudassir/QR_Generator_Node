QRCode - A QR Code Generator in Node

This Node.js application allows you to generate QR codes from URLs and view the generated QR code images. It provides two main API endpoints, one for generating QR codes and another for retrieving QR code images.

Getting Started
Prerequisites
Before running this application, ensure you have the following prerequisites installed:

Node.js (version >= 12.x)
MongoDB (ensure it's running locally or provide a connection string)

Clone the repository:
https://github.com/malikmudassir/QR_Generator_Node.git
cd qr_code_generator_node

Install the required dependencies:
npm install

Start the application:
npm run dev

Usage
Generating QR Codes
To generate a QR code, send a POST request to the /api/generate endpoint with the URL you want to encode in the QR code as the request body. The API will respond with a success message and the generated QR code's ID.

Viewing QR Code Images
To view a QR code image, use a web browser or an HTTP client to access the /api/qrcodes/:id endpoint, where :id is the unique identifier of the QR code you want to view. The API will respond with the QR code image.

http://localhost:3000/api/v1/getQrCodeImage/12345

API Endpoints
POST /api/generate: Generate a QR code from a URL and save it. Returns the ID of the generated QR code.
GET /api/getQrCodeImage/:id: Retrieve and display a QR code image by its ID.

Contributing
Contributions to this project are welcome. Please follow the contributing guidelines for more information on how to contribute to the project.

License
This project is licensed under the MIT License.
