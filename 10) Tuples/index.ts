//  tuples are not a part of javascript and only typescript

const user : (string | number)[] = [1,'rishibakshi']

// so in the case of tuples ( we can also define that in which order of data-type data should be )
const user1: [string,number,boolean] = ['vimal',1,true]

// rgb values example
let rgb: [number,number,number]= [1,2,3]


// User type
type User = [number,string]
const loggedInUser:User = [1,'rishibakshi']

// but here is also a problem that we can push something inside logged in user
loggedInUser.push(100)  // we are able to push

export {}