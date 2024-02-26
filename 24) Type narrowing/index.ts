// so the behaviour js is like that when we use the typeof to check the types it's behavirous is unsual  as
// typeof 1 -> returns number
// typeof 's' -> returns string
// typeof [1,2,3] -> returns object
// typeof '' - > return string
// typeof null -> returns object

// and this is not somethign which is a problem this is just the behaviour of javscript

// so this is where this problem causes the pain
function detectType(val:number | string ){
    if(typeof val === "string"){
        return val.toLowerCase()
    }

    return val+3
}

// this is the cautionary code where we handle the edge case too
function provideId(id:string | null){

    if(!id){
        console.log('Please provide ID');
        return 
    }

    id.toLowerCase()

}

