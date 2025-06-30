//object literal

let person = {
    name: "britney",
    age: 35,
    email: "britphilpot@gmail.com"
}

//object constructor

function Person(name, age,email){
    this.name = name;
    this.age = age;
    this.email = email;
}

let person1 = new Person("Mie", 30, "mis@sdgku.edu");
let person2 = new Person("Philpot", 35, "Philpot@sdgku");

function Pet(name, gender, age, service, breed){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.service = service;
    this.breed = breed;
}

