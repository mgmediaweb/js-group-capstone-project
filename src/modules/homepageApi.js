export async function getHomepageData() {
  const requestURL = 'https://api.opendota.com/api/proPlayers'
  const response = await fetch(requestURL, {
    method: 'GET',
  });
  const data = await response.json();
  // console.log(data);

  return data;
}


const loop = () => {
  let content = `<div class="col-12 col-md-6 col-lg-4">
    <div class="card mb-3">
      <img
        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        class="card-img-top"
        alt="Pro Player Profile Picture"
      />
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title">Card title</h5>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <small class="card-text"> 0 Likes</small>
        <p class="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <div class="d-flex flex-column justify-content-center">
          <button 
              type="button"
              class="btn btn-primary btn-comment" 
              data-bs-toggle="modal" 
              data-bs-target="#modalComments" 
              data-bs-name="${item.name}"
              data-bs-country="${item.country}"
              data-bs-team="${item.team}"
              data-bs-id="${item.playerid}"
              data-bs-link="${item.link}"
              data-bs-image="${item.image}"
          >
            Comments
          </button>

          <button 
              type="button"
              class="btn btn-primary btn-reservation" 
              data-bs-toggle="modal" 
              data-bs-target="#modalReservation" 
              data-bs-name="${item.name}"
              data-bs-country="${item.country}"
              data-bs-team="${item.team}"
              data-bs-id="${item.playerid}"
              data-bs-link="${item.link}"
              data-bs-image="${item.image}"
          >
            Reservations
          </button>
        </div>
      </div>
    </div>
  </div>`;
}