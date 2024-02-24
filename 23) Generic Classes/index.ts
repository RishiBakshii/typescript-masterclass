interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{

    public cart:Array<T> = []

    addToCart(product: T){
        this.cart.push(product)
    }

}