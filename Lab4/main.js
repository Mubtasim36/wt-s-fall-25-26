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