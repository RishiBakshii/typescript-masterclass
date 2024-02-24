//* that's not how professional people write code
// class User{
//     // by default if we dont give private then it is automatically marked as public
//     public name:string
//     private email:string
//     readonly city:string='Ghaziabad'
//     constructor(name:string,email:string){
//         this.name=name
//         this.email=email
//     }
// }
// const Rishi = new User('rishibakshi','rishibakshiofficial@gmail.com')
//* Professional and short code
var User = /** @class */ (function () {
    // writting constructor this way in equivalnet to defining class variables seperately
    function User(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    return User;
}());
