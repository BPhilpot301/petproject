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
  },
  owner: "Britney Philpot"
}

// Function to display salon info
function displaySalonInfo() {
  const salonDiv = document.getElementById("salonInfo");
  salonDiv.innerHTML = `
    <h2>${salon.name}</h2>
    <p><strong>Phone:</strong> ${salon.phone}</p>
    <p><strong>Address:</strong> ${salon.address.street}, ${salon.address.city}</p>
    <p><strong>Hours:</strong> ${salon.hours.open} - ${salon.hours.close}</p>
    <p><strong>Owner:</strong> ${salon.owner}</p>
  `;
}

// Call the function when the page loads
displaySalonInfo();
  

// Constructor
function Pet(name, age, gender, breed, service, color) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.color = color;
}

// Array to store pets
let pets = [];

// Register form handler
document.getElementById("petForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("petName").value;
  const age = parseInt(document.getElementById("petAge").value);
  const gender = document.getElementById("petGender").value;
  const breed = document.getElementById("petBreed").value;
  const service = document.getElementById("petService").value;
  const color = document.getElementById("petColor").value;

  // Create a new Pet
  const pet = new Pet(name, age, gender, breed, service, color);

  // Add pet to array
  pets.push(pet);

  // Update UI
  displayPets();
  updatePetCount();

  // Clear form
  document.getElementById("petForm").reset();
});

// Display pets in table
function displayPets() {
  const tbody = document.getElementById("petTableBody");
  tbody.innerHTML = "";

  pets.forEach((pet, index) => {
    const row = `<tr>
      <td>${pet.name}</td>
      <td>${pet.age}</td>
      <td>${pet.gender}</td>
      <td>${pet.breed}</td>
      <td>${pet.service}</td>
      <td>${pet.color}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deletePet(${index})">Delete</button></td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

// Update pet count
function updatePetCount() {
  document.getElementById("petCount").innerText = pets.length;
}

// Delete pet
function deletePet(index) {
  pets.splice(index, 1);
  displayPets();
  updatePetCount();
}

// Initialize with 3 pets (optional)
pets.push(
  new Pet("Buddy", 3, "Male", "Labrador", "Grooming", "Brown"),
  new Pet("Mittens", 2, "Female", "Siamese", "Vaccination", "White"),
  new Pet("Rocky", 4, "Male", "Bulldog", "Nail Trim", "Gray")
);
displayPets();
updatePetCount();



