const popup1 = document.querySelector('.popup1');
const openPopup1 = document.querySelector('.header__content3');
const closePopup1 = document.querySelector('.popup1__close');

openPopup1.addEventListener('click', openPopup1function)
function openPopup1function(e) {
	e.preventDefault();
	popup1.classList.add('active')
}

closePopup1.addEventListener('click', closePopup1function)
function closePopup1function() {
	popup1.classList.remove('active')
}


const popup2 = document.querySelector('.popup2');
const openPopup2 = document.querySelector('.popup2__activator');
const closePopup2 = document.querySelector('.popup2__close');

openPopup2.addEventListener('click', openPopup2function)
function openPopup2function(e) {
	e.preventDefault();
	popup2.classList.add('active')
}

closePopup2.addEventListener('click', closePopup2function)
function closePopup2function() {
	popup2.classList.remove('active')
}