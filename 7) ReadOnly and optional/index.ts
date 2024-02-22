type User={
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    credcardDetails?:number
}

type cardNumber = {
    cardnumber:string
}

type cardDate={
    carddate:string
}

type cardDetails= cardNumber & cardDate & {
    cvv:number
}

let myUser:User = {
    _id:"1234",
    name:"r",
    email:'r@r.com',
    isActive:false
}

myUser.email = 'r@gmail.com'