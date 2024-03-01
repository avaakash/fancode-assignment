const helper = require("./src/lib/helper");
const config = require('./config/config');
const express = require('express')
const app = express();
const port = config.server.port;

// Json Middleware
app.use(express.json())

//Register routes
helper
    .fileList('./src/routes')
    .forEach(filePath => require(`./${filePath.toString()}`)(app));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = {
  app: app
}