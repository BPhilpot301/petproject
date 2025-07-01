// Object Literal
const salon = {
  name: "Fashion Pet",
  phone: "123-456-7890",
  address: {
    street: "123 Main St",
    city: "Petville"
  },
  pets: []
};

// Display salon info
document.getElementById("salon-info").innerHTML = `
  <p><strong>${salon.name}</strong><br>
  ${salon.address.street}, ${salon.address.city}<br>
  Phone: ${salon.phone}</p>
`;

// Constructor
function Pet(name, age, gender, breed, service, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
}

// Create 3 pets
const pet1 = new Pet("Buddy", 3, "Male", "Golden Retriever", "Grooming", "Dog");
const pet2 = new Pet("Mittens", 2, "Female", "Siamese", "Vaccination", "Cat");
const pet3 = new Pet("Rex", 5, "Male", "Bulldog", "Nail Trim", "Dog");

// Add them to salon
salon.pets.push(pet1, pet2, pet3);

// Display pets
function displayPets() {
  const petList = document.getElementById("pet-list");
  petList.innerHTML = "";
  salon.pets.forEach((pet, index) => {
    petList.innerHTML += `
      <div class="pet-card">
        <p><strong>${pet.name}</strong> (${pet.gender}, ${pet.age} yrs)<br>
        ${pet.service} - ${pet.breed} (${pet.type})</p>
      </div>
    `;
  });
}

// Register pet
document.getElementById("pet-form").addEventListener("submit", function(event)) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const breed = document.getElementById("breed").value;
  const service = document.getElementById("service").value;
  const type = document.getElementById("type").value;

  const newPet = new Pet(name, age, gender, breed, service)
}
