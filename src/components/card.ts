import api from '../services/api';
import divisorDesktop from '../images/pattern-divider-desktop.svg';
import divisorMobile from '../images/pattern-divider-mobile.svg';

let apiMessage = await api();
let message = apiMessage.slip.advice;
let id = apiMessage.slip.id;

const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = `
    <p class="id">ADVICE #${id}</p>
    <p>${message}</p>
    <img src="${divisorImage()}" class="image">
    <button class="button"></button>
`;

/* Comprobacion de la resolucion */
function divisorImage() {
	if (screen.width > 375) {
		return divisorDesktop;
	} else {
		return divisorMobile;
	}
}

export default card;
