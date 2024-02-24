class User{

    email:string
    name:string
    readonly city:string='default'

    constructor(email:string,name:string){
        this.email=email
        this.name=name
    }
}

const rishi = new User('r@rgmail.com','rishibakshi')
console.log(rishi.city);

export {}