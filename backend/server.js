const express = require('express');

const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json()); // Parse JSON bodies (as sent by API clients)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}   );