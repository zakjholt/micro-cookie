# micro-cookie :cookie:

Parses request cookies and puts the object in req.cookies

---

## Installation
`yarn add micro-cookie`

## Import and Usage
```javascript
const parseCookies = require('micro-cookie')

module.exports = parseCookies(async function(req, res) {
  return 'Hello World!'
})

```

## With multiple micro-plugins

```javascript
const visualize = require('micro-visualize')
const cors = require('micro-cors')
const cookieParse = require('micro-cookie')
const { send } = require('micro')

module.exports = visualize(cors(cookieParse(async function(req, res) {
  const responseMessage = {
    message: 'hello world!',
    cookies: req.cookies
  }
  send(res, 200, responseMessage)
})))
```