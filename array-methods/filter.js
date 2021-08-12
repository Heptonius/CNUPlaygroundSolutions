const filter = (condition, array) => {
  const resArray = [];

  for (let i = 0; i < array.length; i++) {
    if (condition(array[i])) {
      resArray.push(array[i]);
    }
  }

  return resArray;
};
