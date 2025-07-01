//get the form
const form = document.querySelector("form");

//get the button
const submitButton = form.elements["submitButton"];

//function to be triggered after clicking submit
//and get the data
function onSubmitButton(event){
     event.preventDefault();//prevent the 
     //browser to be refreshed

     const username = form.elements["username"].value;
     const email = form.elements["email"].value;
     const password = form.elements["password"].value;

     //add the calues to the html, save it to the database, or just print in the console.
     console.log("Username is", username);
     console.log("Email", email);
     console.log("Password", password);

     //for us, please, clear the form.
     form.reset();
}


