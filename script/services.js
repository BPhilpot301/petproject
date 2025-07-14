const services = [
    {
        title: "Bath",
        description: "A refreshing bath with pet-friendly shampoo and conditioner for a clean, shiny coat."
    },
    {
        title: "Nail Trim",
        description: "Gentle nail trimming to keep your pet’s paws healthy and comfortable."
    },
    {
        title: "Vaccinations",
        description: "Essential vaccinations to protect your pet’s health and well-being."
    },
    {
        title: "Complete Service",
        description: "A full-service package including bath, nail trim, brushing, and ear cleaning."
    }
];

const container = document.getElementById('services-container');

services.forEach(service => {
    const box = document.createElement('div');
    box.className = 'service-box';
    box.innerHTML = `
        <h2>${service.title}</h2>
        <p>${service.description}</p>
    `;
    container.appendChild(box);
});
