let score: number | string = 50

score=20
score='20 points'

type User={
    id:number,
    name:string
}

type Admin={
    id:number,
    username:string
}

let rishi: User | Admin = {name:'rishideveloper',id:334}

rishi = {username:"rishi-admin",id:334}

function getUserDetailsById(id: number | string){
    // now in the function we need to make a strict check wether the id is number or string, as typescript combines the number and string data type as one and then checks if id is matching the data type or not

    // so we can't just simply do this
    //* id.toLowerCase() as it says that toLowerCase() does not exists on type 'string | number'

    // we need to conditionaly check for the type
    if(typeof id === "string"){
        id.toLowerCase()
    }

    else if(typeof id === 'number'){
        id.toPrecision(1)
    }

}

// arrays

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]

// this says that whether the array should have all the strings or all the numbers
const data3: string[] | number[] = [1,2,2]
const data4: string[] | number[] = ["1","2","3"]

// but if we want to make a mixed type array then this is the correct way
const data5: (string | number | boolean)[] = [1,2,'3',false,true]

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment= 'aisle'
seatAllotment= 'middle'
seatAllotment='window'