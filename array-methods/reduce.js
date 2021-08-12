const reduce = (callback, array, initial) => {
  let result = initial;

  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i], i, array);
  }

  return result;
};
