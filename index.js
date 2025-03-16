//ignore for now 

const express = require('express'); 
const path = require('path');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public', 'index.html');  // /index.html'
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));