"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы  уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (10 <= personalMovieDB < 30) {
    console.log('Вы класический зритель');
} else if (personalMovieDB > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = prompt('На сколько оцените его?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    
}



console.log(personalMovieDB);