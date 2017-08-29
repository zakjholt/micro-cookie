const { parse } = require('cookie')

module.exports = handler => (req, res) => {
  // Passes through req.cookies if there are already parsed cookies
  const cookies = parse((req.headers && req.headers.cookie) || '')

  const newReq = Object.assign(req, { cookies })

  return handler(newReq, res)
}
