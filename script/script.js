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
document.getElementById("salon-info").innerHTML = `
  <p> Welcome to <strong>${salon.name}</strong>!</p>
  <p>Location: ${salon.address.street}, ${salon.address.city}</p>
  <p>Hours: ${salon.hours.open} - ${salon.hours.close}</p>
  <p>Owner: ${salon.owner}</p>
`;

displaySalonInformation();
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
}

const newPet = new Pet(name, age, gender, service, breed, type);

console.log(newPet);

displayPet(newPet);

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
