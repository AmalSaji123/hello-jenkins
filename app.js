const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Jenkins CI/CD!');
});

app.get('/hello', (req, res) => {
  res.send('Hello from Jenkins CI/CD!');
});

app.get('/hii', (req, res) => {
  res.send('Hello from Jenkins CI/CD!');
});

app.get('/hi', (req, res) => {
  res.send('Hello from Jenkins CI/CD!');
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
