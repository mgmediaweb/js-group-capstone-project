class Counter {
  constructor(data) {
    this.data = data;
  }

 showCounter = (data) => {
   let dataSize = data.length;
   if (dataSize === undefined) dataSize = 0;
   return dataSize;
 }

  addCounter = (currentPlayersShown) => {
    if (currentPlayersShown.length) {
      return currentPlayersShown.length;
    }
    return null;
  };
}

module.exports = Counter;