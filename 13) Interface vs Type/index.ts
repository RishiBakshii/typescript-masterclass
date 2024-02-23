interface User{
    readonly dbId: number,
    userId:number,
    email:string
    googleId?:number
    startTrail():string
    getCoupon(couponName:string,value:number):number
}

// interface supports re-openning ( supports addition of new values )
interface User{
    extraProperty:string
}

// interface also supports "inheritance"
interface Admin extends User{
    role:'developer' | 'software enginnner' | 'system-architect'
}

const rishi:User ={
    dbId:56,
    userId:231,
    email:'rishibakshiofficial@gmail.com',
    startTrail:()=>{
        return 'trial started'
    },
    getCoupon:(couponName:'45',value:1)=>{
        return 87
    },
    extraProperty:'exra'
}

export {}