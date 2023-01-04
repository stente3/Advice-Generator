import '../sass/app.scss';
import card from '../components/card';

/* Creacion de elementos */
const root = document.querySelector('#app');
root?.classList.add('root');
root?.appendChild(card);
