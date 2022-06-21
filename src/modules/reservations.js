import Config from './config.js';

const boardReservation = document.getElementById('msjReservations');

const showCounter = data => {
    let dataSize = data.length;
    if(dataSize == undefined) dataSize = 0;
    return dataSize;
}

const showData = data => {
    let content = '';
    boardReservation.innerHTML = '';
    
    document.getElementById('title-reservation').innerHTML = `Reservations (${showCounter(data)})`;
  
    if (data.length) {
        data.map((item) => {
            content += `<p>${item.date_start} - ${item.date_end} <span class="fw-bold">By ${item.username}</span></p>`;
            return true;
        });
    } else {
      content += '<p class="text-center py-3">No reservation availables</p>';
    }
  
    boardReservation.innerHTML = content;
};

const getData = async (item) => {
    const response = await fetch(`${Config.InvolveAPI}apps/${Config.InvolveID}/reservations?item_id=${item}`, {
        method: 'GET',
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const results = await response.json();
    showData(results);
};

const addData = async (item, name, start, end) => {

    const sendInfo = {
        item_id: item,
        username: name,
        date_start: start,
        date_end: end
    }

    const response = await fetch(`${Config.InvolveAPI}apps/${Config.InvolveID}/reservations`, {
        method: 'POST',
        body: JSON.stringify(sendInfo),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });
    getData(item);
};

export default class Reservations {
    constructor() {
      return null;
    }
  
    static add(id, name, start, end) {
      addData(id, name, start, end);
    }
  
    static get(id) {
      getData(id);
    }
  }
