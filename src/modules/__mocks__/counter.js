class Counter {
  constructor(data) {
    this.data = data;
  }

 showCounter = (data) => {
   let dataSize = data.length;
   if (dataSize === undefined) dataSize = 0;
   return dataSize;
 }
}

module.exports = Counter;