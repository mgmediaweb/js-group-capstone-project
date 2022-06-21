const loadButtons = () => {
    const btnComments = document.querySelectorAll('.btn-comment');
    const btnReservations = document.querySelectorAll('.btn-reservation');

    btnComments.forEach(btn => {
        btn.addEventListener('click', () => {
            const idnum = btn.getAttribute('data-bs-id');
            console.log(idnum);
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

const loadModalInfo = (id,modal) => {
    /* CLEAR FIELDS */
    document.getElementById("modalCommentName").innerHTML = '...'; 
    document.getElementById("modalCommentCountry").innerHTML = '...'; 
    document.getElementById("modalCommentTeam").innerHTML = '...'; 
    document.getElementById("modalCommentPlayer").innerHTML = '...'; 
    document.getElementById("modalCommentLink").href = '#'; 
    document.getElementById("modalCommentImage").src = './noimage.png';
    document.getElementById("modalCommentId").value = '';

    document.getElementById("modalReservName").innerHTML = '...';
    document.getElementById("modalReservCountry").innerHTML = '...'; 
    document.getElementById("modalReservTeam").innerHTML = '...';
    document.getElementById("modalReservPlayer").innerHTML = '...';
    document.getElementById("modalReservLink").href = '#'; 
    document.getElementById("modalReservImage").src = './noimage.png';
    document.getElementById("modalReservId").value = '';
    /* CLEAR FIELDS */

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

export default loadButtons;