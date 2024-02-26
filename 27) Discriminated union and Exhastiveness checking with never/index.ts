//* the concept of discriminated union says that we can mention a kind property and based on that in our function we can do the task

interface Cirlce {
    kind:"circle",
    radius:number
}

interface Square {
    kind:"sqaure"
    side:number
}

interface Rectangle {
    kind:"rectangle"
    length:number
    width:number
}

type Shape = Cirlce | Square | Rectangle

function getTrueShape(shape:Shape){

    // as here we know that each shape has a property of kind
    if(shape.kind==='circle'){
        return Math.PI * shape.radius ** 2
    }


}


//* The Never Type
function getArea(shape:Shape){
    switch(shape.kind){

        case "circle":
            return 'this is a circle'
        case "sqaure":
            return "this is a sqaure"
        case "rectangle":
            return 'this is a rectangle'
        
        //* the documentation says that we should always have a default case with type never on to whatever shape you are defining and you should return that

        //* as default case with type never is never supposed to run so whenever my default case gets hit it will give me an error and we can handle the case that is not being handled
        default:
            const _defaultForShape:never= shape
            return _defaultForShape
    }
}