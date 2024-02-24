function getSearchProducts<T>(products: Array<T>):T{
    return products[3]
}

// arrow function syntax
// here "T," comma means that it is not a jsx tag or fragments this syntax is common to be used in react
const getMoreSearchProducts=<T,>(products:Array<T>):T=>{
    const index=1
    return products[index]
}