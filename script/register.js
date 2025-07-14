const form = document.getElementById('registerForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent page refresh

  const name = document.getElementById('petName').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  console.log(`Registered: ${name}, Service: ${service}, Date: ${date}, Time: ${time}`);

  alert(`Thank you for registering ${name}!\nService: ${service}\nDate: ${date}\nTime: ${time}`);
  
  form.reset();
});