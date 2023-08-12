// function interest(p,r,y){
//     return p*r*y/100;
// }
// console.log(interest(1000,10,5));


// for default values

function interest(p,r=6,y=10){
    return p*r*y/100;
}
console.log(interest(1000,10,5))
// console.log(interest(1000,undefined,5));