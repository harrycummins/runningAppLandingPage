//ignore for now 

const express = require('express'); 
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public', 'index.html');  // /index.html'
  });

  app.get('/googleForm', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'googleForm.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/public', 'index.html');  // /index.html'
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));