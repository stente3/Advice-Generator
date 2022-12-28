import '../sass/app.scss';
import divisorDesktop from '../images/pattern-divider-desktop.svg';
import divisorMobile from '../images/pattern-divider-mobile.svg';

const root = document.querySelector('#app');
let card: Element | null = document.createElement('div');
let advice: Element | null = document.createElement('p');
let image = document.createElement('img');

if (screen.width > 375) {
	image.src = divisorDesktop;
} else {
	image.src = divisorMobile;
}
root?.classList.add('root');
card.classList.add('card');
image.classList.add('image');
advice.textContent =
	'When youre at a concert or event, enjoy the moment, enjoy being there. Try leaving your camera in your pocket.';

card.appendChild(advice);
card.appendChild(image);
root?.appendChild(card);
