<p align="center"><img src='https://raw.githubusercontent.com/alexfreska/micro-cookie/master/cookie.png'></p>
<h2 align="center">micro-cookie</h2>
<p align="center">cookie parser for <a href="https://github.com/zeit/micro">zeit's</a> micro</p>

<p align="center"><i>Parses request cookies and puts the object in req.cookies</a></i></p>

## Installation
```sh
yarn add micro-cookie
```

## Usage
```javascript
const parseCookies = require('micro-cookie')

module.exports = parseCookies(async function(req, res) {
  return 'Hello World!'
})
```

## With other micro plugins

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
