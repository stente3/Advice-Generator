import '../sass/app.scss';

const root = document.querySelector('#app');
let card: Element | null = document.createElement('div');
let advice: Element | null = document.createElement('p');
root?.classList.add('root');
card.classList.add('card');
advice.textContent =
	'When youre at a concert or event, enjoy the moment, enjoy being there. Try leaving your camera in your pocket.';
card.appendChild(advice);
root?.appendChild(card);
