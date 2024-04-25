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


let