const express = require('express');
const app = express();
const { goTeam } = require('./fandom.js');
const fs = require('fs');

// Set Up Routes
// Core Routes
app.get('/read', (req, res) => {
  let element = req.query.something;
  fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
    if (error) {
      return res.json({
        message: 'There is an issue, try again later...'
      });
    } else {
      return res.json({
        message: data
      });
    }
  })
})

// Local Routes
app.get('/letsgoteam/:team', (req, res) => {
  let answer = letsGoTeam(String(req.params.team));
  return res.json({
    answer: answer
  });
});

app.get('/teamsucks/:team', (req, res) => {
  let answer = teamSucks(String(req.params.team));
  return res.json({
    answer: answer
  });
});

// Third-Party Routes
app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to the World Marbles Championship App'
  });
})

// Port setup and listener
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('Server is running on PORT', PORT);
})