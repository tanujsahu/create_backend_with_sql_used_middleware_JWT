"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // config=

var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});
//# sourceMappingURL=server.js.map