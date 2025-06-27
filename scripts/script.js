//alert("Hello from JavaScript!")

//Tracking clicks
//function trackingClicks(){
  //  console.log("Click");
//}

//function changingText(){
  //    document.getElementById("textField").textContent = "Yes, I am here!"
//}

//function happyMood(){
  // document.getElementById("moodText").textContent = "I'm feeling happy!"
//}

//function sadMood(){
  //  document.getElementById("moodText").textContent = "I'm feeling sad..."
//}

//function excitedMood(){
  //  document.getElementById("moodText").textContent = "I'm feeling excited!"
//}

function moodChanger(mood){
    let moodText = document.getElementById("moodText");
    let message = "";

    if (mood == "happy"){
        message = "I am Feeling Happy"
    }else if(mood == "sad"){
        message = "I am feeling sad"
    }else if(mood == "excited"){
        message = "I am feeeling excited!"
    }

    moodText.textContent = message;
}

//Creating Arrays
// let arrayName = ["value1", "value2", "on and on"];

let fruits = ["banana", "apple", "orange","avocado"];
    
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);
//console.log(fruits);

//console.log(fruits.length);

//user a for loop to print all the values in the fruits array
//add to end
fruits.push("watermelon");
//add to beginning
fruits.unshift("grapes");
//removing
fruits.pop();
//removing certain 
fruits.splice(1,1);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//objects
//Is a collection of attributes that represents an entity
//key and a value
//person
//name - britney
//age - 30

//let person = {
  //  name: "Britney",
    //age: 35,
    //lastName: "Philpot",
    //isStudent: true
//}

//console.log(person.name);
//console.log(person[`age`]);

//let pet = {
  //  name: "River",
   // age: 1,
    //gender: "Male",

//}

//console.log(pet.name);
//console.log(pet.age);
//console.log(pet.gender);


let student = {
    name: "Britney",
    age: 35,
    gender: "female",
}

console.log(student.name);
console.log(student.age);
console.log(student.gender);

let student1 = []