const User={
    name:"Rishi",
    email:"rishibakshiofficial@gmail.com",
    isActive:true
}

function createUser({name:string, isPaid:boolean}):object{
    return {}
}

createUser({name:"rishi",isPaid:false})

// * But there's an issue that if we pass an object after storing it in a variable then it allows to pass extra information
const newUser={name:"carlos",isPaid:false,email:false} // we are able to pass the email
createUser(newUser)

function createCourse():{name:string,price:number}{
    return {name:"Full stack dev",price:900}
}


//* so in order to solve this problem we can go with 'type' alias it basically lets us define our own type
type User1={
    name:string,
    email:string,
    isActive:boolean
}

function createUser2(user:User1):User1{
    return {name:user.name,email:user.email,isActive:user.isActive}
}

const result=createUser2({name:"rishibakshi",email:"example@gmail.com",isActive:false})
console.log(result);

export {}