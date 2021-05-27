'use strict';
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
require('dotenv').config();


const weatherHandler = require('./weather');
const movieHandler = require('./movies');


const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(PORT);
})

server.get('/weather', weatherHandler);
server.get('/movie', movieHandler);












// const weatherData = require('./data/weather.json');
// const axios = require('axios');
// const weatherkey = process.env.WEATHER_API_KEY;
// const moviekey = process.env.MOVIE_API_KEY;
// class ForCast {
//     constructor(item) {
//         this.date = item.valid_date;
//         this.description = `low of ${item.min_temp}, hight of ${item.max_temp} with ${item.weather.description}`;
//     }
// }
// class Movies {
//     constructor(item) {
//         this.title = item.original_title;
//         this.overview = item.overview;
//         this.avgVotes = item.vote_average;
//         this.totalVotes= item.vote_count;
//         this.imagePath =`https://image.tmdb.org/t/p/w500${item.poster_path}`;
//         this.popularity = item.popularity;
//         this.releaseDate = item.release_date;

//     }
// }

// function weatherHandler(req, res) {
//     let city = req.query.searchQuery;
//     let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${weatherkey}`;
//     // let url = 'https://api.weatherbit.io/v2.0/forecast/daily?city=london&key=8c595fdcab9a4a9fa032d8c886271517';
//     axios.get(url).then(result => {
//         let forcastArr = result.data.data.map(element => {
//             return new ForCast(element);
//         })
//         res.send(forcastArr);
//     })
//         .catch(error => {
//             res.status(500).send('data not found');
//         })
// }
// function movieHandler(req, res) {
//     let city = req.query.searchQuery;
//     let url = `https://api.themoviedb.org/3/search/movie?api_key=${moviekey}&query=${city}`;
//     // let url = 'https://api.themoviedb.org/3/search/movie?api_key=3fcd0d73c8ceb0f12a3b8581e0675f15&query=paris';
//     axios.get(url).then(result => {
//         let movieArr = result.data.results.map(element => {
//             return new Movies(element);
//         })
//         res.send(movieArr);
//         console.log(movieArr);
//     })
//         .catch(error => {
//             res.status(500).send(`data not found.${error}`);
//         })
// }
// results[0].original_title