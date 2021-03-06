'use strict';

//const fs = global.fs || require('fs');

const fs = require('fs');

// Вывод из глобального контекста модуля
console.log(' From application global context');

// Объявляем функцию для события таймера
function timerEvent() {
	console.log(' From application timer event');
}

// Устанавливаем функцию на таймер
//setTimeout(timerEvent, 1500);


let readme = './README.md';
let sequental = './sequental.js';

/*
fs.readFile(readme, 'utf8', (err, src) => {
	if (err) {
		console.error(err);

		return;
	}

	console.log(' File "%s" Size "%d"', readme, src.length);
});
*/

//console.log(fs.constants);
/*
fs.readFile(sequental, 'utf8', (err, src) => {
    if (err) {
        console.error(err);

        return;
    }

    console.log(' File "%s" Size "%d"', sequental, src.length);
});
*/

const fourtyTwo = 42;

function getParams(data, callback) {
	callback(data);
}

module.exports = {
	getParams,
	fourtyTwo
};

