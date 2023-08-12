let rectangale ={
    length :2,
    breadth :4,
}

let rectangale1 = {};

for(let key in rectangale){
    rectangale1[key] = rectangale[key];
}

for(key in rectangale1) {
    console.log(key, rectangale1[key]);
}