// enums are used when we want to restrict a variabel wiht some fixed option choices

// in enum (variables inside them automatically follows up with default values 
// 0 ,1, 2, 4)
// or if we give a value for ex 6 for first variable then other variables automcatilly follow up with 7,8,9 and we can also give custom values if we want

// but if we assign a string value then we have to set the value(it can be number or string) for each variable because just like numbers strings cannot be assingned in an incremental order

//* note: if we dont want that enum should produce a lot of js code then we can just simply add "const" keyword before enum, so we can right it like 'const enum
enum SeatChoice{
    AISLE='aisle',
    MIDDLE=1,
    WINDOW,
    FOURTH
}

const mySeat = SeatChoice
console.log(mySeat);