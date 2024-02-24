function getSearchProducts<T>(products: Array<T>):T{
    return products[3]
}

// arrow function syntax
// here "T," comma means that it is not a jsx tag or fragments this syntax is common to be used in react
const getMoreSearchProducts=<T,>(products:Array<T>):T=>{
    const index=1
    return products[index]
}

// *******************************************************************************************
interface DataBase{
    connection:string,
    username:string,
    password:string
}

// here "U extends DataBase" means that it could be anything but shoudl be a type of database
function anotherFunction<T,U extends DataBase>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

anotherFunction(4,{connection:"demo",password:'12',username:"rishi"})


