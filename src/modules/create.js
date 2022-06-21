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
/*
  let gameId = apiResponse.result.substr(14);
  gameId = gameId.substr(0, gameId.length - 7);

  const gameInfo = {
    name: gameName.charAt(0).toUpperCase() + gameName.slice(1).toLowerCase(),
    id: gameId,
  };

  Storage.set(gameInfo);
  window.location.reload();
*/  
};

export default createGame;