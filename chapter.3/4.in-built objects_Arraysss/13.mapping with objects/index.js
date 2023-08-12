 let numbers = [1,2,3,-4,-5,-6,];

 let filtered = numbers.filter(value=>value >=0);

//  let items = filtered.map(num =>{return {value:num}});
//  jab ham onject ke sath mapping ka arrow function 
//  banayenge tb return ko ni hatana hai

let items = filtered.map(num =>({value:num}));
// brecets ka bhi use kr skte hai thi^is good pectice


 console.log(items);


 





