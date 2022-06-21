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
        loadModalInfo(btn);
    })
});

btnReservations.forEach(btn => {
    btn.addEventListener('click', () => {
        loadModalInfo(btn);
    })    
});


formReservation.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('reservationName');
    const start = document.getElementById('reservationStart');
    const end = document.getElementById('reservationEnd');

    console.log("form");

    Reservations.add(Config.InvolveID, name, start, end);

    name.value = '';
    start.value = '';
    end.value = '';
});

const loadModalInfo = modal => {
    var name = modal.getAttribute('data-bs-name');
    var country = modal.getAttribute('data-bs-country');
    var team = modal.getAttribute('data-bs-team');
    var id = modal.getAttribute('data-bs-id');
    var link = modal.getAttribute('data-bs-link');
    var image = modal.getAttribute('data-bs-image');
    
    document.getElementById("modalCommentName").innerHTML = name; 
    document.getElementById("modalCommentCountry").innerHTML = country; 
    document.getElementById("modalCommentTeam").innerHTML = team; 
    document.getElementById("modalCommentPlayer").innerHTML = id; 
    document.getElementById("modalCommentLink").href = link; 
    document.getElementById("modalCommentImage").src = image;

    document.getElementById("modalReservName").innerHTML = name;
    document.getElementById("modalReservCountry").innerHTML = country; 
    document.getElementById("modalReservTeam").innerHTML = team;
    document.getElementById("modalReservPlayer").innerHTML = id;
    document.getElementById("modalReservLink").href = link; 
    document.getElementById("modalReservImage").src = image;
}

//createGame(Storage);
//Reservations.get(Config.InvolveID);