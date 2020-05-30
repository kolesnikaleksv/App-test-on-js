"use strict";

// console.log(`привет ${answers[1]} ${answers[0]} ${answers[2]}`);

 const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    const personalMovieDB = {
        count: `${numberOfFilms}`,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
   
    function showMyBD() {
        if(!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
        // (personalMovieDB.privat) ? null : console.log(personalMovieDB);
    }

    showMyBD();

    function writeYourGenres() {
        let num;
        for(let i=0; i < 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i+1}`);
            personalMovieDB.genres[i] = a;
        }
    }

   //writeYourGenres();
    console.log(personalMovieDB);
//     for (let i=0; i<2; i++) {
//         let a = prompt("Oдин из последних просмотренных фильмов?", ''),
//             c = prompt("На сколько оцените его?", "");
             
//         (a.length && c.length && a.length < 5 && c.length < 5) ? personalMovieDB.movies[a] = c : i--;     
//     }
    
//     if (numberOfFilms <= 10) {
//         alert('Просмотренно мало фильмов');
//     } else if (numberOfFilms > 10 && numberOfFilms < 30) {
//         alert("Вы классический зритель");
//     } else if (numberOfFilms >= 30) {
//         alert("Вы киноман");
//     } else {
//         alert("Произошла ошибкa");
//     }


// console.log(personalMovieDB);

// const str = "test";

// let up = str.slice( 1, 2);
// let low = str.toLowerCase();

// console.log(up);
// console.log(str);
// console.log(low);



