import { getHomepageData } from "./homepageApi.js";
import loadButtons from "./loadButtons.js";

const displayCard = document.querySelectorAll(".display-card-js"); 



export const displayHomepageData = async () => {
 const storedData = await getHomepageData();
 for (let i = 0; i < displayCard.length; i++) {
  const countryCode = storedData[i].country_code.toUpperCase();
  const countryName = new Intl.DisplayNames(['en-US'], {type: 'region'});
  displayCard[i].innerHTML = `
    <img class="card-img-top" src="${storedData[i].avatarfull}" alt="Card image cap">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">${storedData[i].name}</h5>
        <i class="fa fa-heart-o" aria-hidden="true"></i>
      </div>
      <small>${numberOfLikes} Likes</small>
      <p class="card-text">This pro player is from ${countryName.of(countryCode)} and his team is ${storedData[i].team_name}. His ID is ${storedData[i].account_id}. You can take a look at his profile <a href="${storedData[i].profileurl}">by CLICKING HERE</a></p>
      <div class="d-flex flex-column justify-content-center">
      <button 
      type="button"
      class="btn btn-primary btn-comment mb-2" 
      data-bs-toggle="modal" 
      data-bs-target="#modalComments" 
      data-bs-name="${storedData[i].name}"
      data-bs-country="${countryName.of(countryCode)}"
      data-bs-team="${storedData[i].team_name}"
      data-bs-id="${storedData[i].account_id}"
      data-bs-link="${storedData[i].profileurl}"
      data-bs-image="${storedData[i].avatarfull}"
  >
    Comments
  </button>

  <button 
      type="button"
      class="btn btn-primary btn-reservation" 
      data-bs-toggle="modal" 
      data-bs-target="#modalReservation" 
      data-bs-name="${storedData[i].name}"
      data-bs-country="${countryName.of(countryCode)}"
      data-bs-team="${storedData[i].team_name}"
      data-bs-id="${storedData[i].account_id}"
      data-bs-link="${storedData[i].profileurl}"
      data-bs-image="${storedData[i].avatarfull}"
  >
    Reservations
  </button>
      </div>
  `

 };

 loadButtons();
}

const numberOfLikes = () => {
  
}