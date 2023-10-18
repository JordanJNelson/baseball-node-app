const express = require('express');
const app = express();
const {} = require('./fans')
const fs = require('fs');

app.get('/', (req, res) =>{
  res.json({message:" Hello from my Home Route"})
});

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

// app.get('/letsgoteam/:team', (req, res) => {
//   let answer = letsGoTeam(String(req.params.team));
//   return res.json({
//     answer: answer
//   });
// });
// app.get('/teamsucks/:team', (req, res) => {
//   let answer = teamSucks(String(req.params.team));
//   return res.json({
//     answer: answer
//   });
// });
// // Third-Party Routes
// app.get('/', (req, res) => {
//   return res.json({
//     message: 'Welcome to the  Championship '
//   });
// })
// Port setup and listener
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server is running on PORT', PORT);
})