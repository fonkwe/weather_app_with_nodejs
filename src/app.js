const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const weatherData = require('../utils/weatherData');

const port = process.env.PORT || 3000;

const publicStaticDirPath = path.join(__dirname, '../public');

const viewsPath = path.join(__dirname, '../templates/views');

const partialsPath = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath)); //making express know our static directory

app.get('', (req, res, next) => {
    res.render('index', {
     title: "Weather App"
   })
})

app.get('/weather', (req, res) => { 
  const address = req.query.address

  if(!address) {
    return res.send({
      error: "Enter an address in the text box"
    })
  }


   weatherData(address, (error, {temperature, description, cityName} = {}) => {
       if (error) {
         return res.send({error})
       }
       console.log(temperature, description, cityName);
        res.send({
          temperature,
          description,
          cityName
        })
   })
});  

app.get('/about', (req, res)  => {
  res.render('404', {
     title: "Page Not Found"
   })
})



app.listen(port, () => {
     console.log("Server is running on:", port);
})