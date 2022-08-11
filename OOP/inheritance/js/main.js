class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }

}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
}
class SpecialDog extends Dog{
    constructor(name,breed,color){
        super(name,breed)
        this.color=color
    }
    speak(){
        return `wooowwwwuuuwoooo`
    }
}
let simba= new Dog("simba","shepherd")
let jack=new SpecialDog('jack','rautwiler','black')
class Cat extends Animal{
    constructor(name,fur){
        super(name)
        this.fur=fur
    }
}
let kit=new Cat('kit',true)
let farm=[simba,jack,kit]
for (attributes of farm){
    console.log( attributes.speak())
}

class Food{
    constructor(onion){
    this.onion=onion
 }
 slice(){
    console.log(`if ${this.onion} is true,slice it`)
 }
}
class Rice extends Food{
    constructor(onion,oil){
        super(onion)
        this.oil=oil
    }
}
let FriedRice=new Rice( true,true)