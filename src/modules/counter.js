const showCounter = (data) => {
  let dataSize = data.length;
  if (dataSize === undefined) dataSize = 0;
  return dataSize;
};

export default showCounter;