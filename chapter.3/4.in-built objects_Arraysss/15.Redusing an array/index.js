let arr = [1,2,3,4];
// let total= 0;

// for(let value of arr) {
//     total = total+value;
// }

// console.log(total)


// let totalsum = arr.reduce(function(accumulater,currentValue){
//     return accumulater+currentValue;
// })


let totalsum = arr.reduce((accumulater,currentValue)=> accumulater+currentValue,0);

console.log(totalsum)