const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index', {image:"/images/beer.png", imageText:"Picture of a beer." });
});

app.get('/beers', async(req, res) => {
  const resultBeers = await punkAPI.getBeers();
  res.render('beers', {beers: resultBeers});
});

app.get('/random-beer', async(req, res) => {
  const randomBeer = await punkAPI.getRandom();
  res.render('random-beer', {beer: randomBeer[0]});
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
