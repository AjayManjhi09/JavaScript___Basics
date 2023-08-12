// getter---> access proprtises
// setter---> change or mutate properties

// raead only function
// let person = {
//     fName : 'AJAY',
//     lName : 'Manjhi'
// };

// function fullName(){
//     return `${person.fName} ${person.lName}`; 
// }

// console.log(fullName());

let person = {
    fName : 'Ajay',
    lName : 'Manjhi',

    get fullName(){
        return `${person.fName} ${person.lName}`; 
    },

    set fullName(value)  {
        if(typeof value !== 'string') {
            throw new Error("You have not sent a string");
        }
        let parts = value.split(' ');
        this.fName= parts[0];
        this.lName= parts[1];
    }
}; 


try {
    person.fullName = 'saket sahani';
}

catch (e){
    alert(e)
}


// person.fullName = 'saket '
console.log(person.fullName);
