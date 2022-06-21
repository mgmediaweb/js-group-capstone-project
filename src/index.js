import Reservations from './modules/reservations.js';
import Storage from './modules/localstorage.js';
//import createGame from './modules/create.js';
import Config from './modules/config.js';
import './scss/style.scss';

const formReservation = document.getElementById('formReservation');

const btnComments = document.querySelectorAll('.btn-comment');
const btnReservations = document.querySelectorAll('.btn-reservation');
const modalComments = document.getElementById('modalComments');


btnComments.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = modal.getAttribute('data-bs-id');
        loadModalInfo(btn);
    })
});

btnReservations.forEach(btn => {
    btn.addEventListener('click', () => {
        const idnum = btn.getAttribute('data-bs-id');
        loadModalInfo(btn);

        Reservations.get(idnum);
    })    
});


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

const loadModalInfo = modal => {
    const id = modal.getAttribute('data-bs-id');
    const name = modal.getAttribute('data-bs-name');
    const country = modal.getAttribute('data-bs-country');
    const team = modal.getAttribute('data-bs-team');
    const link = modal.getAttribute('data-bs-link');
    const image = modal.getAttribute('data-bs-image');
    
    document.getElementById("modalCommentName").innerHTML = name; 
    document.getElementById("modalCommentCountry").innerHTML = country; 
    document.getElementById("modalCommentTeam").innerHTML = team; 
    document.getElementById("modalCommentPlayer").innerHTML = id; 
    document.getElementById("modalCommentLink").href = link; 
    document.getElementById("modalCommentImage").src = image;
    document.getElementById("modalCommentId").value = id;

    document.getElementById("modalReservName").innerHTML = name;
    document.getElementById("modalReservCountry").innerHTML = country; 
    document.getElementById("modalReservTeam").innerHTML = team;
    document.getElementById("modalReservPlayer").innerHTML = id;
    document.getElementById("modalReservLink").href = link; 
    document.getElementById("modalReservImage").src = image;
    document.getElementById("modalReservId").value = id;
}

//createGame(Storage);
