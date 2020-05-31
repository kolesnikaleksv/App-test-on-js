"use strict";

// Represent

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i=0; i<2; i++) {
            let a = prompt("Oдин из последних просмотренных фильмов?", ''),
                c = prompt("На сколько оцените его?", "");
                    
            (a.length && c.length && a.length < 5 && c.length < 5) ? personalMovieDB.movies[a] = c : i--;     
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            alert('Просмотренно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибкa");
        }
    },
    showMyBD: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
        // (hidden) ? null : console.log(hidden);
    },
    writeYourGenres: function() {
        for(let i=0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (genre == '' || genre == null) {
               
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        }); 
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

