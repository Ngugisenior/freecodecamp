const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  let squaredIntegers = realNumberArray.reduce((arr,num) => {
    if(num % 1 === 0 && num > 0) arr.push(num*num);
    return arr;
  }, []);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
