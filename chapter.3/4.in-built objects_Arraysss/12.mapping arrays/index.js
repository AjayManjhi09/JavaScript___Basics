 let numbers = [1,2,3,4,5,6,7,8,9,10];

//   let items= numbers.map(function(value){
//   return 'Student_no'+ value;
//    });

let items =numbers.map(value=>'Student_no'+value);

 console.log(items);

 for(let value of items){
    console.log(value);
 }

 





