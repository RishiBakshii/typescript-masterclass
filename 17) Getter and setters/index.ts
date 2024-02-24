
class User{

    private _courseCount=1

    constructor(
        public name:string,
        public email:string,
        private userId:string
        ){}
    
    // it is only accessible inside the class not from an object
    private deleteToken(){
        console.log('token deleted');
    }

    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get getCourseCount():number{
        return this._courseCount
    }


    // setters are not allowed to return anything ( there is not return type )
    set setCourseCount(count:number){
        if(count<=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount=count
    }
}

export {}

