import Config from './config.js';

const getData = async (id) => {
    //console.log(`${Config.InvolveAPI}apps/${id}/reservations`);
    const response = await fetch(`${Config.InvolveAPI}apps/${id}/reservations?item_id=55`, {
        method: 'GET',
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const results = await response.json();

    //console.log(results);

    //showScores(results.result);
};

const addData = async (id, name, start, end) => {
    //console.log("@@@ ", id, name, start, end);
    /*
    const response = await fetch(`${Config.InvolveAPI}games/${id}/scores`, {
        method: 'POST',
        body: JSON.stringify({
            user,
            score: Number(score),
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });
    await response.json();
    //getData(id);
    */
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