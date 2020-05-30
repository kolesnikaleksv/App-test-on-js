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


//  let a = prompt("Oдин из последних просмотренных фильмов?", ''),
//      b = prompt("Oдин из последних просмотренных фильмов?", ''),
    //  c = prompt("На сколько оцените его?", "");
//      d = prompt("На сколько оцените его?", "");



const personalMovieDB = {
    count: `${numberOfFilms}`,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    let i = 0;



    do {
        let a = prompt("Oдин из последних просмотренных фильмов?", ''),
        c = prompt("На сколько оцените его?", "");
        i++;
        personalMovieDB.movies[a] = c;
    }
    while( i < 2);


    // for (let i=0; i<2; i++) {
    //     let a = prompt("Oдин из последних просмотренных фильмов?", ''),
    //         c = prompt("На сколько оцените его?", "");
            
            
    //     (a.length && c.length && a.length < 5 && c.length < 5) ? personalMovieDB.movies[a] = c : i-- ;
            
    // }
 

    
    // if (numberOfFilms <= 10) {
    //     alert('Просмотренно мало фильмов');
    // } else if (numberOfFilms.length > 10 && numberOfFilms.length < 30) {
    //     alert("Вы классический зритель");
    // } else if (numberOfFilms.length >= 30) {
    //     alert("Вы киноман");
    // } else {
    //     alert("Произошла ошибкa");
    // }

// personalMovieDB.movies[a] = c;
// personalMovieDB.movies[b] = d;

console.log(personalMovieDB);