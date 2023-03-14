import api from '../services/api';
import divisorDesktop from '../images/pattern-divider-desktop.svg';
import divisorMobile from '../images/pattern-divider-mobile.svg';

interface Advice {
	id: number;
	advice: string;
}
// Card variables
const card = document.createElement('div');
const cardId = document.createElement('p');
const cardAdvice = document.createElement('p');
const cardImage = document.createElement('img');

card.classList.add('card');
cardId.classList.add('id');
cardAdvice.classList.add('advice');
cardImage.classList.add('image');

// Button
function button() {
	let button = document.createElement('button');
	button.classList.add('button');
	button.addEventListener('click', changeContent);
	return button;
}

// Card component
async function Card(): Promise<Element> {
	let { id, advice }: Advice = await apiData();

	cardId.textContent = `ADVICE #${id}`;
	cardAdvice.textContent = `"${advice}"`;
	cardImage.src = divisorImage();

	card.appendChild(cardId);
	card.appendChild(cardAdvice);
	card.appendChild(cardImage);
	card.appendChild(button());

	return card;
}

/* Utilities */
// Consulta los datos a la API y retorna los datos que necesitan ser mostrados
async function apiData(): Promise<Advice> {
	let apiMessage = await api();
	let { id, advice } = apiMessage.slip;
	return { id, advice };
}
// Comprobacion de la resolucion
function divisorImage() {
	return screen.width > 375 ? divisorDesktop : divisorMobile;
}
// Remplaza el consejo, por uno nuevo
async function changeContent() {
	let { id, advice }: Advice = await apiData();
	cardId.textContent = `ADVICE #${id}`;
	cardAdvice.textContent = `"${advice}"`;
}

export default Card;
