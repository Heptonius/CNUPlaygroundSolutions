const multipleOfIndex = (array) => {
  return array.reduce((result,current,index)=>{
    if(current%index===0){
      result.push(current);
    }
    return result
  },[])
}

const multipleOfIndex = (array) => {
  let result = [];
  for(let i = 0; i<array.length;i++){
      if(array[i]%i===0){
      result.push(array[i]);
    }
  }
  return result;
}

const multipleOfIndex = (array) => {
  return array.filter((element,index)=>element%index===0);
}