const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // or any other port you prefer

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/madlib_form1.html');
});

// Handle form submission
app.post('/', (req, res) => {
  const { pluralNoun, adjective, verb, adverb, color } = req.body;

  // Your mad lib template
  const madLib = `The ${adjective} ${pluralNoun} ${verb} ${adverb} in the ${color} garden.`;

  // Send back the filled-in mad lib
  res.send(madLib);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
