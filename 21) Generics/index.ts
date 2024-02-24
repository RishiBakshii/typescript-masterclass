const score:Array<number>=[]
const names:Array<string>=[]

function identityOne(val:boolean | number): boolean | number{
    return val
}

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}

identityThree(4)
identityThree('Rishi')

function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand:string,
    type:number,  
}

function identityFive<Bottle>(obj:Bottle):Bottle{
    return obj
}


