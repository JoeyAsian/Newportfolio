const express = require('express')
const app = express()

// adding middleware
app.set("view engine", "ejs"); //setting up templating engine
 
app.get('/portfolio', function (req, res) {
  res.render('portfolio')
})
 
app.listen(3000, function(err){
    if (err){
        console.log(err)
    }
    console.log('server up on that 3000 type shit')
})