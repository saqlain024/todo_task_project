const express = require('express');
const app = express();
const port = 8000;

const bodyParser = require('body-parser');

// setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extend:false}));

app.use(express.static('assets'));  //static files

//use express router
app.use('/', require('./routes'));



app.listen( port, function(err) {
   if(err) {
       console.log(`Error in running the Server ${err}`);
   }
   
   console.log(`Server is running on port ${port}`);
});