import { getHomepageData } from './modules/homepageApi.js';
import Reservations from './modules/reservations.js';
import { displayHomepageData } from './modules/dynamicContent.js';
import './scss/style.scss';

displayHomepageData();

const formReservation = document.getElementById('formReservation');
const modalComments = document.getElementById('modalComments');

const loadButtons = () => {
    const btnComments = document.querySelectorAll('.btn-comment');
    const btnReservations = document.querySelectorAll('.btn-reservation');

    btnComments.forEach(btn => {
        btn.addEventListener('click', () => {
            const idnum = btn.getAttribute('data-bs-id');
            loadModalInfo(idnum,btn);
        })
    });

    btnReservations.forEach(btn => {
        btn.addEventListener('click', () => {
            const idnum = btn.getAttribute('data-bs-id');
            Reservations.get(idnum);
            loadModalInfo(idnum,btn);
        })    
    });
}


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

getHomepageData();