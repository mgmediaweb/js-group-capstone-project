import Config from './config.js';

console.log("--> ", Config.InvolveID);

// function to create a new game into the API
const createGame = async (Storage) => {

  console.log(Config.InvolveAPI);

  const response = await fetch(`${Config.InvolveAPI}apps/`, {
    method: 'POST'
  });

  const apiResponse = response;

  console.log(apiResponse);
 
};

export default createGame;