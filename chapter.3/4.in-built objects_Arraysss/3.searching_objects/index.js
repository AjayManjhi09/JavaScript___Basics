let names = [
    {no:1, naam:'Ajay'},
    {no:2, naam:'Saket'},
    {no:2, naam:'Robin'}
]; 

console.log(names);

// console.log(names.includes({no:1, naam:'Ajay'}));

// let dost = names.find(function(names){
//     return names.naam === 'Ajay';
// }) 

// Arrow function

let dost = names.find(names =>names.naam === 'Saket');
 

console.log(dost);