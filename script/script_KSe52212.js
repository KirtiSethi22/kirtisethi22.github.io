/*JS Validation*/
function validateForm(form){
    
    if(validateName(form) && validatePhone(form) && validateEmail(form) && checked1(form) && validateComment(form))
        return true;
    else
        return false;
}

function validateName(form){
    var Name = document.getElementById("Name");
    
    if(Name.validity.valueMissing){                 
        Name.setCustomValidity("Please enter your name here");
        return false;
    }
    else{
        Name.setCustomValidity("");
        return true;
    }
}

function validatePhone(form){
    var Phone = document.getElementById("Phone");
    
    if(Phone.validity.valueMissing){                 
        Phone.setCustomValidity("Please enter the phone number");
        return false;
    }
    else if(Phone.validity.patternMismatch){                 
        Phone.setCustomValidity("Please enter the correct number format i.e. \"9876543210\"");
        return false;
    }
    else{
        Phone.setCustomValidity("");
        return true;
    }
}

function validateEmail(form){
    var email = document.getElementById("Email");
    
    if(email.validity.valueMissing){                 
        email.setCustomValidity("Please enter the email address");
        return false;
    }
    else if(email.validity.typeMismatch){                 
        email.setCustomValidity("Email is not in a correct format");
        return false;
    }
    else{
        email.setCustomValidity("");
        return true;
    }
}
function checked1(form){
    var checkbox1 = document.querySelector('input[name="connected"]:checked');
    var name=document.getElementById("response");
    var name1=document.getElementById("response1");
    
    if(checkbox1 !=null){          
        name.setCustomValidity("");
        name1.setCustomValidity("");
        return true;
        
    }else{
        name.setCustomValidity("Please select either yes or no.");
        name1.setCustomValidity("Please select either yes or no.");
        return false;
    }
}



function validateComment(form){
    var Detail= document.getElementById("Comment");
    
    if(Detail.validity.valueMissing){                 
        Detail.setCustomValidity("Please enter the comments");
        return false;
    }
    else{
        Detail.setCustomValidity("");
        return true;
    }
}

/* Heading Animation */


/*Video Button Onclick Function */
function PreviewVideo(video){
    var target = document.getElementById("videoButton");
    target.src = "" + video.getAttribute("data-videoLink");
}
/*Image Zoom In*/
function zoomImg(x){
x.style.height = "250px";
x.style.width = "340px";  
}

/*Image Zoom Out*/

function outImg(y) {
    y.style.height = "220px";
    y.style.width = "310px";
  }