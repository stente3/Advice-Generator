import '../sass/app.scss';
import divisorDesktop from '../images/pattern-divider-desktop.svg';
import divisorMobile from '../images/pattern-divider-mobile.svg';

/* Creacion de elementos */
const root = document.querySelector('#app');
let card: Element | null = document.createElement('div');
let advice: Element | null = document.createElement('p');
let id: Element | null = document.createElement('p');
let button: Element | null = document.createElement('button');
let image = document.createElement('img');

/* Comprobacion de la resolucion */
if (screen.width > 375) {
	image.src = divisorDesktop;
} else {
	image.src = divisorMobile;
}

/* Creacion de clases */
root?.classList.add('root');
card.classList.add('card');
image.classList.add('image');
button.classList.add('button');
id.classList.add('id');

advice.textContent =
	'When youre at a concert or event, enjoy the moment, enjoy being there. Try leaving your camera in your pocket.';

id.textContent = 'Advice #114';

card.appendChild(id);
card.appendChild(advice);
card.appendChild(image);
card?.appendChild(button);
root?.appendChild(card);
