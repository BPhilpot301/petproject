// print full array
let movies =["movie1","movie2","movie3","movie4","movie5"];
console.log(movies);

//print the first and last movie
console.log(movies[0]);
console.log(movies[4]);

//replace 3rd movies with a new one
movies[2] = "movie6";
console.log(movies);

//add a movie to the beginning and end
movies.unshift("movie7");
console.log(movies);

movies.push("movie8");
console.log(movies);

//remove the last movie
movies.pop();

//print the updated list
console.log(movies);


//creating a number list
let number = [1, 2, 3, 4, 5,];
let sum = 0;

//loop through the array
for(let i=0; i<number.length; i++){
    sum += number[i];
}

console.log(sum);

//print average
let average = sum/number.length;
console.log(average);

let book = {
    name:"Percy Jackson",
    author: "Author",
    year: "2010"
}


//themplate literals
console.log(`The book name is: ${book.name} and the year is ${book.year}`);


let user = {
    username: "Bphilpot",
    email: "bphilpot.com",
    age: 35
}

console.log(`Hello ${user.username}! Your email is ${user.email} and you are ${user.age} years old.`);


