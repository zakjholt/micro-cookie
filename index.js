const { parse } = require("cookie");

module.exports = handler => (req, res) => {
  if (req.headers && req.headers.cookie) {
    try {
      req.cookies = parse(req.headers.cookie);
    } catch (err) {
      console.warn("Could not parse cookie", req.headers.cookie);
      console.error(err);
    }
  }

  return handler(req, res);
};
