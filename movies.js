'use strict';

const axios = require('axios');

const moviekey = process.env.MOVIE_API_KEY;

class Movies {
    constructor(item) {
        this.title = item.original_title;
        this.overview = item.overview;
        this.avgVotes = item.vote_average;
        this.totalVotes= item.vote_count;
        this.imagePath =`https://image.tmdb.org/t/p/w500${item.poster_path}`;
        this.popularity = item.popularity;
        this.releaseDate = item.release_date;

    }
}

let arr={}
function movieHandler(req, res) {
    let city = req.query.searchQuery;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${moviekey}&query=${city}`;
    // let url = 'https://api.themoviedb.org/3/search/movie?api_key=3fcd0d73c8ceb0f12a3b8581e0675f15&query=paris';
    if(arr[city]!==undefined){
        console.log('data from array');
        res.send(arr[city]);
    }else{
        console.log('data from API')
        axios.get(url).then(result => {
            let movieArr = result.data.results.map(element => {
                return new Movies(element);
            })
            arr[city]=movieArr;
            res.send(movieArr);
        })
            .catch(error => {
                console.log(error.response.status);
                let e=error.response.status;
                res.status(e).send(`data not found.${error}`);
            })
    }
}

module.exports = movieHandler;