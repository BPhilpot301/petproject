// Object literal for the salon
const salon = {
  name: "Fashion Pet",
  address: {
    street: "918 Pet Ave.",
    city: "Oklahoma"
  },
  hours: {
    open: "9:00am",
    close: "5:00pm"
  }
};

// Show salon info
document.getElementById("salon-info").innerHTML = `
  <p><strong>${salon.name}</strong></p>
  <p>${salon.address.street}, ${salon.address.city}</p>
  <p>Hours: ${salon.hours.open} - ${salon.hours.close}</p>
`;

// Pet constructor
function Pet(name, age, gender, breed, service, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
}

// Create pet objects
let pet1 = new Pet("Buddy", 2, "Male", "Golden Retriever", "Grooming", "Dog");
let pet2 = new Pet("Whiskers", 3, "Female", "Siamese", "Nail Trim", "Cat");
let pet3 = new Pet("Spike", 5, "Male", "Bulldog", "Vaccination", "Dog");

let pets = [pet1, pet2, pet3];

// Display pets
function displayPets() {
  const petList = document.getElementById("pet-list");
  pets.forEach(pet => {
    petList.innerHTML += `
      <div class="pet">
        <p><strong>${pet.name}</strong> (${pet.gender}, ${pet.age} yrs)</p>
        <p>Breed: ${pet.breed}</p>
        <p>Service: ${pet.service}</p>
        <p>Type: ${pet.type}</p>
      </div>
    `;
  });
}

displayPets();

