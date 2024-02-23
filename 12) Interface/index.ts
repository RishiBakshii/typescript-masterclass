interface User{
    readonly dbId: number,
    userId:number,
    email:string
    googleId?:number

    // there are two ways of defining function in interface

    // 1
    // startTrail:()=>string

    // 2 (more preferred)
    startTrail():string

    getCoupon(couponName:string,value:number):number
}

const rishi:User ={dbId:112,email:'r@rgmail',userId:3515,
    startTrail:()=>{
        return 'trail started'
    },
    getCoupon:(couponName:"849038R",value:12)=>{  
        return 3
    }
}

rishi.email='rishibakshiofficial@gmail.com'

// as dbId is readonly
// rishi.dbId =33  // this is not allowed