import '../sass/app.scss';
import Card from '../components/card';

/* Creacion de elementos */
const root = document.querySelector('#app');
root?.classList.add('root');
append();
async function append(){
  root?.appendChild(await Card());
}