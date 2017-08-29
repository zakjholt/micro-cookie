const { parse } = require("cookie");

module.exports = handler => (req, res) => {
  const cookies = parse((req.headers && req.headers.cookie) || "");

  const newReq = Object.assign({}, req, { cookies });

  return handler(newReq, res);
};
