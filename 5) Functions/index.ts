function add(num1:number,num2:number):number{
    return num1+num2
}

function convertToUpperCase(val:string):string{
    return val.toUpperCase()
}

function signupUser(name:string,email:string,isPaid:boolean){}

function loginUser(name:string,email:string,isPaid:boolean=false){}

add(1,4)
convertToUpperCase('Carlos')
signupUser('Carlos','carlos@gmail.com',true)
loginUser("lurie",'lurie@gmail.com')


//* There can be a situation where multiple return types based on conditional can be expected
function getValue(myval:number){
    if(myval>5){
        return true
    }

    return "200 ok"
}

// syntax of adding a return type in arrow functions
const getHello =(s:string):string=>{
    return ""
}

// const heroes = ['thor','spiderman','ironman']
const heroes = [1,2,3]

// so inside map we dont need to give the type for the variable itself as typescrpit automatically determines that but we can always give the return type of the map function i.e in this case is 'string'
heroes.map((hero):string=>{
    return `hero name is ${hero}`
})

// when function is returning nothing then we shoudl use 'void' as a return type
function consoleError(errMsg:string):void{
    console.log(errMsg); 
}

// in case of function that handles the error we should use 'never' as a return type, although it may seem very similar to use void in this case but this is how it is recommended in its documentation
function handleErr(errMsg:string):never{
    throw new Error(errMsg)
}

export {}