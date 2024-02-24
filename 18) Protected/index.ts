
// while inheriting a class if we want to access the private variables of a class then we should decalred them as protected as because they are still not accessbile by objects but protected varaibels are accessed through inhertiance also

class User{

    protected _courseCount=1

    constructor(
        public name:string,
        public email:string,
        private userId:string
        ){}
    
    private deleteToken(){
        console.log('token deleted');
    }

    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get getCourseCount():number{
        return this._courseCount
    }

    set setCourseCount(count:number){
        if(count<=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount=count
    }
}

class SubUser extends User{
    isFamily:boolean = true

    changeCourseCount(){
        // _coureCount is accessible because it is declared as protected
        this._courseCount=4
    }

}

export {}

