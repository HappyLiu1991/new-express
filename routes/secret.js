var express = require('express')
var router = express.Router()

// middleware that is specific to this router



var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}
router.use(requestTime)
// define the home page route
router.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About secret')
})

module.exports = router