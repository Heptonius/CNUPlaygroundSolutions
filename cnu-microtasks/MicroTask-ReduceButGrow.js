const grow = (array) => {
  let multiSum = 1;
  array.forEach((element)=>{multiSum*=element})
  return multiSum;
}

const grow = (array) => {
  return array.reduce((sum,current)=>{return sum*=current},1);
}