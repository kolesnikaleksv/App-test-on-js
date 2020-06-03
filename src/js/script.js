"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let advertising = document.querySelectorAll('.promo__adv img'),
    bg = document.querySelector('.promo__bg'),
    genre = bg.querySelector('.promo__genre'),
    moveList = document.querySelector('.promo__interactive-list'),
    btn = document.querySelector('button'),
    input = document.querySelector('.adding__input'),
    trash = document.querySelectorAll('.delete'),
    checkbox = document.querySelectorAll('input')[2];
    
console.log(checkbox.value);
//console.log(input.value);
genre.textContent = "Драма";
bg.style.backgroundImage = 'url("img/bg.jpg")';
let check = checkbox.value;

checkbox.addEventListener('click', () => {
    (!checkbox.checked) ? null : console.log('Добавляем любимый фильм') ;
//     if(checkbox.checked) {
//         console.log('Добавляем любимый фильм');
//     } else {
//         console.log('выва');
//     } 
});


trash.forEach(trash => {
    trash.addEventListener('click', () => {
        //e.preventDefault();
        //trash.forEach();
        console.log('ok');
    });
});


    
    

function toggleBtn() {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
       
        let a = input.value;
        movieDB.movies.push(a);
        
        restart();
    });
}
toggleBtn();
advertising.forEach(item => {
    item.remove();
});

function restart() {
    moveList.innerHTML = '';
    
    movieDB.movies.sort();
   
    movieDB.movies.forEach((x, y) => {
        if(movieDB.movies[y].length > 3) {
            
            moveList.innerHTML += `
            <li class="promo__interactive-item">${y + 1}.  ${x.substring(0, 3) + "..."}
                <div class="delete"></div>
            </li>
        `;
        } else {
            moveList.innerHTML += `
                <li class="promo__interactive-item">${y + 1}.  ${x}
                    <div class="delete"></div>
                </li>
            `;
        }
    });
}
restart();

    // moveList.innerHTML = '';
    
    // movieDB.movies.sort();
   
    //     movieDB.movies.forEach((x, y) => {
    //         if(movieDB.movies[y].length > 7) {
                
    //             moveList.innerHTML += `
    //             <li class="promo__interactive-item">${y + 1}.  ${x.substring(0, 3) + "..."}
    //                 <div class="delete"></div>
    //             </li>
    //         `;
    //         } else {
    //             moveList.innerHTML += `
    //                 <li class="promo__interactive-item">${y + 1}.  ${x}
    //                     <div class="delete"></div>
    //                 </li>
    //             `;
    //         }
            
    //     });

        

    

// Represent

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i=0; i<2; i++) {
//             let a = prompt("Oдин из последних просмотренных фильмов?", ''),
//                 c = prompt("На сколько оцените его?", "");
                    
//             (a.length && c.length && a.length < 5 && c.length < 5) ? personalMovieDB.movies[a] = c : i--;     
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count <= 10) {
//             alert('Просмотренно мало фильмов');
//         } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//             alert("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             alert("Вы киноман");
//         } else {
//             alert("Произошла ошибкa");
//         }
//     },
//     showMyBD: function(hidden) {
//         if(!hidden) {
//             console.log(personalMovieDB);
//         }
//         // (hidden) ? null : console.log(hidden);
//     },
//     writeYourGenres: function() {
//         for(let i=0; i < 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
//             if (genre == '' || genre == null) {
               
//             } else {
//                 personalMovieDB.genres[i] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         }); 
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
// };





