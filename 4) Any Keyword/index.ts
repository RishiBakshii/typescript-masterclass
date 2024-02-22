// any

//* Note: any is not a data type it just serves as a default case where we don't define any data type and basdically it surpasses the typescript static type check for that variable

// in this scenario where we are not initializing the variable directly and it is getting popualted via api call or some function return value then we shoudl always decalre the type of it

// by doing so we can the prevent the "any" type mistake that will let it get populated by any value!

let hero: string;

function getHero(){
    return 'helloWorld'
}

hero=getHero();