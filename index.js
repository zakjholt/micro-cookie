const { parse } = require('cookie')

module.exports = handler => (req, res) => {
  // Passes through req.cookies if there are already parsed cookies
  const cookies = Object.assign(req.cookies || {}, parse(req.headers.cookie))

  const newReq = Object.assign(req, { cookies })

  return handler(newReq, res)
}
