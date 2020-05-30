"use strict";

//alert('Hello');

// let name = confirm('how are you?');
// console.log(name);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('как ваше имя?', '');
// answers[1] = prompt('как ваше фамилия?', '');
// answers[2] = prompt('как ваше отчество?', '');


// console.log(`привет ${answers[1]} ${answers[0]} ${answers[2]}`);

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


 let a = prompt("Oдин из последних просмотренных фильмов?", ''),
     b = prompt("Oдин из последних просмотренных фильмов?", ''),
     c = prompt("На сколько оцените его?", ""),
     d = prompt("На сколько оцените его?", "");
 
const personalMovieDB = {
    count: `${numberOfFilms}`,
    movies: {
        // lastFilma: `${lastFilma}`,
        // lastFilm: `${lastFilm}`,
        // valueIta: `${valueIta}`,
        // valueIt: `${valueIt}`
        
    },
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[a] = c;
personalMovieDB.movies[b] = d;
console.log(personalMovieDB);