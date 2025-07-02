// Object Literal
const salon = {
  name: "Fashion Pet",
  phone: "123-456-7890",
  address: {
    street: "123 Pet St",
    city: "Pawville"
  },
  hours: {
    open: "9:00 AM",
    close: "5:00 PM"
  }
};

// Display Salon Info
document.getElementById("salon-info").innerHTML = `
  <p>Welcome to <strong>${salon.name}</strong>!</p>
  <p>Location: ${salon.address.street}, ${salon.address.city}</p>
  <p>Hours: ${salon.hours.open} - ${salon.hours.close}</p>
`;

// Pet Constructor
function Pet(name, age, gender, breed, service, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
}

// Store pets
const pets = [];

// Handle form submit
document.getElementById("pet-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("petName").value;
  const age = document.getElementById("petAge").value;
  const gender = document.getElementById("petGender").value;
  const breed = document.getElementById("petBreed").value;
  const service = document.getElementById("petService").value;
  const type = document.getElementById("petType").value;

  const newPet = new Pet(name, age, gender, breed, service, type);
  pets.push(newPet);

  displayPets();
  this.reset();
  console.log(newPet);
});

// Handle Clear Button
document.getElementById("clearBtn").addEventListener("click", function() {
  document.getElementById("pet-form").reset();
});

// Display pets
function displayPets() {
  const petList = document.getElementById("pet-list");
  petList.innerHTML = "";

  pets.forEach((pet) => {
    petList.innerHTML += `
      <p><strong>${pet.name}</strong> (${pet.gender}, ${pet.age} yrs) - ${pet.service} [${pet.breed}, ${pet.type}]</p>
    `;
    console.log(petList);
  });
}

// Create 3 starter pets
pets.push(
  new Pet("River", 1, "Male", "Half Husky, Half Corgi", "Grooming", "Dog"),
  new Pet("Annie May", 10, "Female", "Jack Russel", "Vaccination", "Dog"),
  new Pet("Jasper", 8, "Male", "Unknow Mix", "Nail Trim", "Dog")
);
displayPets();


function registerPet() {
  // Get form values
  let name = document.getElementById("petName").value;
  let age = document.getElementById("petAge").value;
  let gender = document.getElementById("petGender").value;
  let breed = document.getElementById("petBreed").value;
  let service = document.getElementById("petService").value;
  let type = document.getElementById("petType").value;

  // Create pet card container
  let petCard = document.createElement("div");
  petCard.className = "pet-card";

  // Create image element
  let img = document.createElement("img");
  img.src = `images/${name.toLowerCase()}.jpg`;
  img.alt = `${name} the pet`;
  img.className = "pet-image";

  // Create paragraph for pet info
  let petInfo = document.createElement("p");
  petInfo.innerHTML = `<strong>${name}</strong> (${gender}, ${age} yrs) - ${service} [${breed}, ${type}]`;

  // Append elements to pet card
  petCard.appendChild(img);
  petCard.appendChild(petInfo);

  // Append pet card to the registered pets section
  document.getElementById("registeredPets").appendChild(petCard);
}










