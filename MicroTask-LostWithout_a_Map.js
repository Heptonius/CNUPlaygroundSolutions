const maps = (array) => {
  return array.reduce((result,current)=>{
    result.push(current*2);
    return result;
  },[])
}

const maps = (array) => {
  let result = [];
  for(let i = 0; i<array.length;i++){
    result.push(array[i]*2)
  }
  return result;
}

//lost with a map

const maps = (array) => {
  return array.map(elem=>2*elem);
}