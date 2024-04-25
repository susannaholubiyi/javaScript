let animal = {
    type: "Unknown",
    sound: function(){
        console.log("the " + this.type+ " makes a sound")
    }
}

let dog = Object.create(animal);
dog.type = "Dog";
dog.color = "brown and white";
dog.sound();
console.log(dog)

let goat = {}
Object.setPrototypeOf(goat, animal);
goat.type = "Goat";
console.log(goat);

let cutlery ={
        type: "unknown",
        color: "unknown"
}
let fork = Object.create(cutlery);
fork.type = "Fork";
fork.color = "silver";

let spoon = {}
Object.setPrototypeOf(spoon, cutlery);
spoon.type = "Spoon"
spoon.color = "Gold"


console.log(fork)
console.log(spoon);


let vehicles = {wheels: 4};
let car = {
        seat: 5,
        __proto__ : vehicles,
        wheels : 6,
};

// console.log(`vehicles:`, vehicles, vehicles.__proto__);
console.log(`car`, car, car.__proto__);
// console.log(`car wheels:`, car.wheels)

//constructor function are written in pascal casing
function Person(name, age){
    this.name = name;
    this.age = age;

    this.sayName = function(){
        console.log(this.name);
    }
}

const personOne = new Person("Jumoke", 13);
console.log(personOne.name)

const personTwo = new Person("Pastor", 20);
personTwo.sayName();
console.log(personTwo.name)