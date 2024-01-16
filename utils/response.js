class Response {
  // Helper method for sending a success response
  static success(res, message, statusCode, result) {
    return res.status(statusCode).json({
      status: true,
      statusCode: statusCode,
      message: message,
      payload: result,
    });
  }

  // Helper method for sending an error response
  static error(res, message, statusCode = 500) {
    return res.status(statusCode).json({
      status: false,
      statusCode: statusCode,
      message: message,
      payload: null,
    });
  }
}

// Export the Response class to be used in other parts of the application
exports.Response = Response;
