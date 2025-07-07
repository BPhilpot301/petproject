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
  },
  owner: "Britney Philpot"
}

// Display Salon Info
document.getElementById("salon").innerHTML = `
  <p> Welcome to <strong>${salon.name}</strong>!</p>
  <p>Location: ${salon.address.street}, ${salon.address.city}</p>
  <p>Hours: ${salon.hours.open} - ${salon.hours.close}</p>
  <p>Owner: ${salon.owner}</p>
`;

function displaySalonInformation() {
  // Function body can be implemented here if needed
}
function Pet(name, age, gender, service,breed,type){
  this.name = name,
  this.age = age,
  this.gender = gender,
  this.service = service,
  this.breed = breed,
  this.type = type
}

const pet4 = new Pet("Lola", 5, "Female", "Nail Trim", "Golden Doodle", "Dog");
const pet5 = new Pet("Max", 1, "Male", "Vaccination", "Bulldog", "Dog");
const pet6 = new Pet("Sir Flufferton", 7, "Male", "Grooming", "Egyptian Mau", "Cat");



function registerPet(event){
  event.preventDefault();

  const name = petRegistrationForm.elements["petName"].value;
  const age = petRegistrationForm.elements["petAge"].value;
  const gender = petRegistrationForm.elements["petGender"].value;
  const service = petRegistrationForm.elements["petService"].value;
  const breed = petRegistrationForm.elements["petBreed"].value;
  const type = petRegistrationForm.elements["petType"].value;
  
  const newPet = new Pet(name, age, gender, service, breed, type);
  
  console.log(newPet);
  
  displayPet(newPet);
}


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


const pets = [];



// Create 3 starter pets
pets.push(
  new Pet("River", 1, "Male", "Half Husky, Half Corgi", "Grooming", "Dog"),
  new Pet("Annie May", 10, "Female", "Jack Russel", "Vaccination", "Dog"),
  new Pet("Jasper", 8, "Male", "Unknow Mix", "Nail Trim", "Dog")
);
  displayPets();
  
  petRegistrationForm.reset();

function displayPet(pet){
  PerformanceObserverEntryList.innerHTML += `
  <div class="pet-card">

    <h3> Name: ${pet.name} </h3>
    <p> Age: ${pet.age} </p>
    <p> Gender: ${pet.gender} </p>
    <p> Service: ${pet.service} </p>
    <p>Breed: ${pet.breed} </p>
    <p>Type: ${pet.type} </p>

  </div>
  `;
}

 function registerPet(event) {
  // Get form values
  let name = document.getElementById("petName").value;
  let age = document.getElementById("petAge").value;
  let gender = document.getElementById("petGender").value;
  let breed = document.getElementById("petBreed").value;
  let service = document.getElementById("petService").value;
  let type = document.getElementById("petType").value;

  console.log(displayPet);

  // pet card container

  let petCard = document.createElement("div");
  petCard.className = "pet-card";

  petList.innerHTML += `
    <div class="pet-card">
    <h3> ${newPet.name}</h3>
    <p> ${newPet.age} </p>
    <p> ${newPet.gender} </p>
    <p> ${newPet.breed} </p>
    <p> ${newPet.service} </p>
    <p> ${newPet.type} </p>
    </div>
  
  `;

  // image element
  let img = document.createElement("img");
  img.src = `images/${name.toLowerCase()}.jpg`;
  img.alt = `${name} the pet`;
  img.className = "pet-image";

  // paragraph for pet info
  let petInfo = document.createElement("p");
  petInfo.innerHTML = `<strong>${name}</strong> (${gender}, ${age} yrs) - ${service} [${breed}, ${type}]`;

  // Append elements to pet card
  petCard.appendChild(img);
  petCard.appendChild(petInfo);

  // Append pet card to the registered pets section
  document.getElementById("registeredPets").appendChild(petCard);
}