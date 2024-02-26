// anything that can be constructed with "new keyword" thats where we can use the instance of keyword

function logValue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString().split(' ').slice(0,-1).join(' '));
    }
    else{
        console.log(x.toUpperCase());
    }
}

const todayDate=new Date()

console.log(todayDate);

logValue(todayDate)

// type predicates

type Fish = {
    swim():void
}

type Bird= {
    fly():void
}

// * as this function is returning a type of boolean i.e true of false so that is why the function getFood will not work as intended inside the if conidtion also it is still showing any when me hover over pet and same wiht the else condition also
// * so to solve that we need to typecast 
// function isFish(pet: Fish | Bird){
//     return (pet as Fish).swim() !== undefined
// }

// * after doing this now getFood function shows either fish or bird and not any when we hover to see the type
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim() !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return 'fish food'
    }
    else{
        pet
        return 'bird food'
    }
}