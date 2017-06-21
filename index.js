const { parse } = require('cookie')

const microCookie = handler => (req, res) => {
  const cookies = parse(req.headers.cookie)

  const newReq = Object.assign(req, { cookies })

  return handler(newReq, res)
}

module.exports = microCookie
