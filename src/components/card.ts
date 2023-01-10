import api from '../services/api';
import divisorDesktop from '../images/pattern-divider-desktop.svg';
import divisorMobile from '../images/pattern-divider-mobile.svg';

interface Advice {
	advice: string;
	id: number;
}

async function Card(): Promise<Element> {
	let service = await apiData();
	const card = document.createElement('div');
	childRemover(card);
	card.classList.add('card');
	card.innerHTML = `
    <p class="id">ADVICE #${service.id}</p>
    <p>"${service.advice}"</p>
    <img src="${divisorImage()}" class="image">
    <button class="button"></button>
`;
	return card;
}

/* Consulta los datos a la API y retorna los datos que necesitan ser mostrados */
async function apiData(): Promise<Advice> {
	let apiMessage = await api();
	let { advice, id } = apiMessage.slip;
	return { advice, id };
}

/* Utilities */
// Comprobacion de la resolucion
function divisorImage() {
	return screen.width > 375 ? divisorDesktop : divisorMobile;
}

// Elimina todos los hijos del elemento dado
function childRemover(parent: Element) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

export default Card;
