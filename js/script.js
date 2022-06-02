"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы  уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?'),
                  b = prompt('На сколько оцените его?');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
            } else {
                i--;
            } 
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы класический зритель');
        } else if (this.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (this.privat === false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        (this.privat) ? this.privat = false : this.privat = true;
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            const ganre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (ganre != null && ganre != '') {
                this.genres.push(ganre);
            } else {
                console.log('Вы ввели неправильные данные или не ввели их вовсе!');
                i--;
            }
        }
        this.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    }
};
