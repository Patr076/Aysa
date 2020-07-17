// Modules
const express = require('express');
const bodyParser = require('body-parser');
 
// Set port for server
const port = process.env.PORT || 3100;
 
// Express set up
let app = express();
app.use(bodyParser.json());
 
// Start server
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});
