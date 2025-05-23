const express = require('express');
const app = express();

const PORT = process.env.PORT || 2699;

app.get('/', (req, res) => {
  res.send('Hello from Node.js in Docker!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
