// Camelcase --> numberOfStudent
// constructor--> pascal Notation --> first letter of every word is Capital --> NumberOfStudents
// Constructor function -> property/methods -> intialise/Define

function Rectengal(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.drwa = function(){
        console.log('drwaing');
    }
}

// object creation using costrcutor function

let rectangalobject = new Rectengal(10, 11);



// constrocter property

let Rectengal1 = new Function(
    'length', 'breadth',
 ` this.length = length;
this.breadth = breadth;
this.drwa = function(){
    console.log('drwaing');
}`);


// object creation using Rectangale1

let rect = new Rectengal1(10 , 10);

console.log(rect);
