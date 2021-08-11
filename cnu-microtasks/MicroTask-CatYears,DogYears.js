const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears, dogYears;    
  if(humanYears>=1){catYears=15; dogYears=15;}
  if(humanYears>=2){catYears=24; dogYears=24;}
  if(humanYears>=3){
    catYears+=(humanYears-2)*4;
    dogYears+=(humanYears-2)*5;  
  }
  return [humanYears,catYears,dogYears];
}

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears, dogYears;
  catYears = humanYears >=2 ? 24 : humanYears >= 1? 15 : 0;
  dogYears = humanYears >=2 ? 24 : humanYears >= 1? 15 : 0;
  if(humanYears>2){
    catYears+=4*(humanYears-2);
    dogYears+=5*(humanYears-2);
  }
  return [humanYears,catYears,dogYears];
}