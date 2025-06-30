// Create pets using object literals
const pets = [
  {
    name: "River",
    age: 2,
    gender: "Male",
    service: "Grooming",
    breed: "Half Huskey, Half Corgi"
  },
  {
    name: "Annie May",
    age: 14,
    gender: "Female",
    service: "Vaccination",
    breed: "Jack Russel"
  },
  {
    name: "Jasper",
    age: 8,
    gender: "Male",
    service: "Nail Trim, Vaccination",
    breed: "Unknown"
  }
]

console.log(pets)

// Display number of pets
function displayPetCount() {
  document.getElementById("count").textContent = pets.length;
}

// Display pet names in the list
function displayPetNames() {
  const list = document.getElementById("pet-list");
  list.innerHTML = "";

  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    const listItem = document.createElement("li");
    listItem.textContent = `${pet.name} (${pet.gender}, ${pet.age} yrs) - ${pet.service} [${pet.breed}]`;
    list.appendChild(listItem);
  }
}

// Extra challenge: Calculate average age
function calculateAverageAge() {
  const totalAge = pets.reduce((sum, pet) => sum + pet.age, 0);
  const average = (totalAge / pets.length).toFixed(1);
  document.getElementById("avg-age").textContent = average;
}

// Call functions to display everything
displayPetCount();
displayPetNames();
calculateAverageAge();