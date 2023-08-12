// factory functions

function createRectangel(len, bre) {
    let rectangel ={
        length : len,
        breadth: bre,

        drwa: function(){
            console.log('drwaing a rectangel')
        }
    };
    return rectangel;
}

let rectangelobj1 = createRectangel(3, 4);