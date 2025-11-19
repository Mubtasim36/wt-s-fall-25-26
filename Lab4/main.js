<<<<<<< HEAD
function validate_form(){
    var user_email= document.forms["myForm"]["email"].value;
    console.log(user_email);

    if(user_email.length===0){
        alert("Email cannot be empty");
        return false;
    }
            return false;
        const regex=/^[A-Za-z0-9._+-]+aiub\.edu$;   //regular expression
       if(!regex)
}
=======
function validate_form() {
  var user_email = document.forms["myForm"]["email"].value;
  console.log(user_email);

  if (user_email.length === 0) {
    alert("Email cannot be empty");
    return false;
  }

  // Correct regex for AIUB email (example: something@aiub.edu)
  const regex = /^[A-Za-z0-9._+-]+@aiub\.edu$/;

  if (!regex.test(user_email)) {
    alert("Enter a valid AIUB email (example: name@aiub.edu)");
    return false;
  }

  return true; // validation passed
}
>>>>>>> 2431bc4 (Lab4 JS update)
