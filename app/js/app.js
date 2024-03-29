document.addEventListener("DOMContentLoaded", function () {

	// let quiz = [{
	// 		question: 'Как звали почтовую сову Гарри Поттера?',
	// 		type: 'radio',
	// 		image: '../images/answer1.jpg',
	// 		answers: [
	// 			'Белуха',
	// 			'Букля',
	// 			'Шикля',
	// 		],
	// 		correct: 1
	// 	},
	// 	{
	// 		question: 'Как зовут этого актера?',
	// 		type: 'radio',
	// 		image: '../images/answer2.jpg',
	// 		answers: [
	// 			'Джон Траволта',
	// 			'Джим Керри',
	// 			'Брюс Уиллис',
	// 		],
	// 		correct: 1
	// 	},
	// 	{
	// 		question: 'Это кадр из мультфильма «Снеговик-почтовик», вспомните или угадайте, что написано на конверте?',
	// 		type: 'radio',
	// 		image: '../images/answer3.jpg',
	// 		answers: [
	// 			'Дедушке Морозу от ребят',
	// 			'На Северный Полюс пингвину Ермолке',
	// 			'Снеговику-почтовику на меховую шапку и теплый тулуп',
	// 		],
	// 		correct: 0
	// 	},
	// 	{
	// 		question: 'Рождество, Джон Макклейн, небоскреб, орех –  к какому фильму относятся эти слова-подсказки?',
	// 		type: 'radio',
	// 		answers: [
	// 			'Тертый калач',
	// 			'Деловая колбаса',
	// 			'Крепкий орешек'
	// 		],
	// 		correct: 2
	// 	},
	// 	{
	// 		question: 'Из-за чего поссорились Матроскин и Шарик в мультфильме «Зима в Простоквашино»?',
	// 		type: 'radio',
	// 		image: '',
	// 		answers: [
	// 			'Шарик нарисовал на печке рисунок, а Матроскин его раскритиковал, и Шарик обиделся',
	// 			'Матроскин хотел съесть сосиску, а оказалось, что Шарик её уже съел сам, хоть она ему не принадлежала',
	// 			'Шарик купил вместо валенок кеды, Матроскин назвал его балбесом, и тот обиделся',
	// 		],
	// 		correct: 2
	// 	},
	// 	{
	// 		question: 'Откуда эта песня – «Ждёт твоих подарочков ребятня. И тебе достанется от меня!»?',
	// 		type: 'radio',
	// 		image: '',
	// 		answers: [
	// 			'Снеговик-Почтовик',
	// 			'Гринч, похититель Рождества',
	// 			'Ну, погоди!',
	// 		],
	// 		correct: 2
	// 	},
	// 	{
	// 		question: 'В фильме «Гринч, похититель Рождества» главный положительный персонаж – девочка по имени Синди Лу. Вспомните или угадайте, кем работал её отец?',
	// 		type: 'radio',
	// 		image: '',
	// 		answers: [
	// 			'Мэром города',
	// 			'Почтовым работником',
	// 			'Он был безработным богачом',
	// 		],
	// 		correct: 1
	// 	},
	// 	{
	// 		question: '«Рождественская история» – это экранизация повести Чарльза Диккенса «Рождественская песнь». Вспомните или угадайте, как звали этого персонажа?',
	// 		type: 'radio',
	// 		image: '../images/answer8.jpg',
	// 		answers: [
	// 			'Скрудж',
	// 			'Крэтчит',
	// 			'Шварц',
	// 		],
	// 		correct: 0
	// 	},
	// ];

	// console.log(JSON.stringify(quiz));

});

let openInnerHide = document.querySelectorAll('.open-inner-hide');
openInnerHide.forEach(el => {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		let block = document.querySelector('.inner__hide');
		if (block.classList.contains("open")) {
			block.style.maxHeight = "0";
			block.classList.remove("open");
		} else {
			block.style.maxHeight = 160 + block.scrollHeight + "px";
			block.classList.add("open");

		}
	});
});


function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
	setCookie(name, "", {
		'max-age': -1
	})
}

function setCookie(name, value, options = {}) {

	options = {
		path: '/',
		// при необходимости добавьте другие значения по умолчанию
		...options
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
}

function num_word(value, words) {
	value = Math.abs(value) % 100;
	var num = value % 10;
	if (value > 10 && value < 20) return words[2];
	if (num > 1 && num < 5) return words[1];
	if (num == 1) return words[0];
	return words[2];
}

(function () {
	// Add event listener
	document.addEventListener("mousemove", parallax);
	const elem = document.querySelector("#parallax");
	// Magic happens here
	function parallax(e) {
		if (elem) {
			let _w = window.innerWidth / 2;
			let _h = window.innerHeight / 2;
			let _mouseX = e.clientX;
			let _mouseY = e.clientY;
			let _depth1 = `${90 - (_mouseX - _w) * 10}% ${90 - (_mouseY - _h) * 10}%`;
			let _depth2 = `${0 - (_mouseX - _w) * 0.001}% ${0 - (_mouseY - _h) * 0.001}%`;
			let _depth3 = `${0 - (_mouseX - _w) * 0.004}% ${0 - (_mouseY - _h) * 0.004}%`;
			let x = `${_depth3}, ${_depth2}, ${_depth1}`;
			// console.log(x);
			elem.style.backgroundPosition = x;
		}
	}

})();

function fadeIn(el, timeout, display) {
	el.style.opacity = 0;
	el.style.display = display || 'block';
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
}

function fadeOut(el, timeout) {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;

	setTimeout(() => {
		el.style.display = 'none';
	}, timeout);
}