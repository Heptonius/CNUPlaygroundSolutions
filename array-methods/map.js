const map = (callback, array) => {
  console.time("test");
  if (array == undefined) {
    throw new Error("Input array undefined");
  }
  if (callback == undefined) {
    throw new Error("Callback function not undefined");
  }

  const resArray = [];

  //map every initial elem to a new one using callback with arguments (elem,index,array)
  for (let i = 0; i < array.length; i++) {
    resArray[i] = callback(array[i], i, array);
  }
  console.timeEnd("test");
  return resArray;
};

const map = (callback, array) => {
  const resArray = [];
  for (let i = 0; i < array.length; i++) {
    resArray[i] = callback(array[i], i, array);
  }
  return resArray;
};
