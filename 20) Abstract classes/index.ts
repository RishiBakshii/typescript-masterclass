// from abstract classess we cannot make a instance(Object) directly, it can be done by first making a inherited class from it and then making an object from that class.

// abstract classes act as total blueprints ( pretty much like interfaces )


abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
    
    // so just like in interface we can say that there shoudl be a function but actually dont give any function declartioun( what it does), so just like in abstract class we have to add the keywrod absstract before it and then it also acts like a interface function declaration that we dont know what the function woudl do but there shoudl be a function named the same and witht the same return type
    abstract getSepia():void
    
    // this creates a difference between abstract classes and interface as because we are also able to define the function declaration but in interfaces we can't
    getReelTime():number{
        // some complex calculation
        return 8
    }
}

// const rishi = new TakePhoto('test',"test")

class Instagram extends TakePhoto{

    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log('hello World');
    }

}

const rishi= new Instagram('burst','sepia',56)

rishi.getReelTime()

export {}