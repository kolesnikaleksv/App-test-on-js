"use strict";

// console.log(`привет ${answers[1]} ${answers[0]} ${answers[2]}`);
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
    count: `${numberOfFilms}`,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyBD(hidden) {
    if(!hidden) {
        console.log(hidden);
    }
    // (hidden) ? null : console.log(hidden);
}

showMyBD(personalMovieDB.privat);


function writeYourGenres(item) {
    for(let i=0; i < 3; i++) {
        item[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
        while (item == '' || item == false) {
            item[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
        }
    }
    item.forEach(function callback(x, y, item) {
        console.log(`Любимый жанр ${y + 1} - это ${x}`);
    });
        
    
}

writeYourGenres(personalMovieDB.genres);

console.log(personalMovieDB);

function rememberMyFilms() {
    for (let i=0; i<2; i++) {
        let a = prompt("Oдин из последних просмотренных фильмов?", ''),
            c = prompt("На сколько оцените его?", "");
                
        (a.length && c.length && a.length < 5 && c.length < 5) ? personalMovieDB.movies[a] = c : i--;     
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms <= 10) {
        alert('Просмотренно мало фильмов');
    } else if (numberOfFilms > 10 && numberOfFilms < 30) {
        alert("Вы классический зритель");
    } else if (numberOfFilms >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибкa");
    }
}

//detectPersonalLevel();

function toggleVisibleMyDB(a) {
    if (!a) {
        a = true;
        console.log(a);
    }
}

//toggleVisibleMyDB(personalMovieDB.privat);

// console.log(personalMovieDB);

// const str = "test";

// let up = str.slice( 1, 2);
// let low = str.toLowerCase();

// console.log(up);
// console.log(str);
// console.log(low);



