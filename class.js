class Dayo{
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size;
    }

    setName(newName){
        this.name = newName;
    }
    getName(){
        return this.name;
    }

    setAge(newAge){
        this.name = newAge;
    }
    getAge(){
        return this.age;
    }
    setSize(shoeSize){
        this.size = shoeSize;
    }
    getSize(){
        return this.size
    }

}

let ayomide = new Dayo();
ayomide.setSize(10)
console.log(ayomide)