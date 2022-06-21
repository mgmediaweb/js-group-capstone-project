const currentPlayersShown = document.querySelectorAll('.display-card-js');
const navbarItem = document.getElementById('navbar-item');

const addCounter = () => {
  const counter = document.createElement('span');
  counter.classList.add('nav-link');
  counter.classList.add('active');
  counter.setAttribute('href', '#');
  counter.setAttribute('aria-current', 'page');
  counter.innerText = `Current Pro Players (${currentPlayersShown.length})`;
  navbarItem.appendChild(counter);
}

export default addCounter;