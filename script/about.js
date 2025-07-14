const services = [
  { name: "Bath & Brush", price: 30 },
  { name: "Full Groom", price: 50 },
  { name: "Nail Trim", price: 15 },
  { name: "Teeth Cleaning", price: 20 },
  { name: "Ear Cleaning", price: 10 },
  { name: "Deluxe Spa Package", price: 75 }
];

const serviceList = document.getElementById("service-list");

services.forEach(service => {
  const li = document.createElement("li");
  li.textContent = `${service.name} - $${service.price}`;
  serviceList.appendChild(li);
});

document.body.style.backgroundImage = "url('images/nackground oet salon.webp')"
