// let a= {valu:10};

// let b = a;

// a.value++;

// console.log(a.valu);
// console.log(b.valu);

// reference type k andr same address pr point krte hai

let a = {value:10};

function inc(a) {
    a.value++;
}

inc(a);

console.log(a.value);