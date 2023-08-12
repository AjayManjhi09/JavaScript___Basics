function createRectangel(len, ber) {
    reactngale = {
        length: len,
        breadth: ber,

        drwa(){
            console.log('drwaing a rectangale');
        }
    }

    return reactngale;
}

let rectangaleobj = createRectangel(10, 11);

reactngale.color = 'black';
console.log(rectangaleobj);

delete rectangaleobj.color;
console.log(rectangaleobj);