import { getHomepageData } from './modules/homepageApi.js';
import Reservations from './modules/reservations.js';
import { displayHomepageData } from './modules/dynamicContent.js';
import Comments from './modules/comment.js';
import addCounter from './modules/itemCounterHomepage.js';
import './scss/style.scss';

displayHomepageData();
addCounter();

const formReservation = document.getElementById('formReservation');
const formComment = document.getElementById('formComment');

formReservation.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = document.getElementById('modalReservId');
  const name = document.getElementById('reservationName');
  const start = document.getElementById('reservationStart');
  const end = document.getElementById('reservationEnd');

  Reservations.add(id.value, name.value, start.value, end.value);

  id.value = '';
  name.value = '';
  start.value = '';
  end.value = '';
});

formComment.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = document.getElementById('modalCommentId');
  const name = document.getElementById('commentName');
  const comment = document.getElementById('comment');

  Comments.add(id.value, name.value, comment.value);

  id.value = '';
  name.value = '';
  comment.value = '';
});

getHomepageData();
