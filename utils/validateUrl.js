// Function to validate a URL using a regular expression
const validateUrl = function (value) {
  // Regular expression to match a URL (supports both http and https)
  return /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i.test(
    value
  );
};

// Export the validateUrl function to make it available for use in other parts of your application
module.exports = validateUrl;
