let numbers =[1,4,5,7];


console.log(numbers);

console.log(numbers.indexOf(7));

// we want to check if number exist in array


// this is not a good pectise
// if(numbers.indexOf(10) !=-1)
// console.log("present");

// else{
//     console.log('absent');
// }

// this is good prectice
console.log(numbers.includes(5));

// advanse


// srch bigen at nidex of 3
console.log(numbers.indexOf(4,3));