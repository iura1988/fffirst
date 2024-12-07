"use strict";

let numberOfFilms;


function start() {
    numberOfFilms = +prompt('skolko filmov vi uje prosmotreli?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('skolko filmov vi uje prosmotreli?', '');
    }
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
// const a = prompt('odin iz poslednih prosmotrennih filmov?', ''),
//     b = prompt('na skolko ocenite ego?', ''),
//     c = prompt('odin iz poslednih prosmotrennih filmov?', ''),
//     d = prompt('na skolko ocenite ego?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('odin iz poslednih prosmotrennih filmov?', ''),
            b = prompt('na skolko ocenite ego?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("prosmotrenno malo filmov");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("vi klassiceskiy zriteli");
    } else if (personalMovieDB.count >= 30) {
        console.log("vi kinoman");
    } else {
        console.log("osibka");
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`vas liubimiy janr pod nomerom ${i}`);;
    }
}

writeYourGenres();