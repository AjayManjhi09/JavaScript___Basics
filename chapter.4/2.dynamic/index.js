let x = 1;
    x= 'a'

console.log(x)

function sum(a,b) {
    console.log(arguments);
    return a+b;
}

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
console.log(sum(1,2,3,4,5,6,));

// to see the other numbers
// function sum(a,b) {
//     console.log(arguments);
//     return a+b;
// }

// console.log(sum(1,2,3,4,5,6,));


// sum of many numbers
function sum(a,b) {
    let total=0;
    for(let value of arguments)
        total = total+value;
    return total; 
}

let ans = sum(1,2,3,4,5,6);
// let ans = sum(1);
// let ans = sum();

console.log(ans);