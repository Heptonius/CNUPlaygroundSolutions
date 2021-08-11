const check = (array,value) => {
  return array.includes(value);
};

const check = (array,value) => {
  return array.indexOf(value)>=0;
};

const check = (array,value) =>{
  return array.find(element=>element===value)!==undefined;
}