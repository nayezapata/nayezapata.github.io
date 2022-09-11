"use strict"

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    $("#contactus").addEventListener("click", evt => {
        const first_name = $("#fname").value;
        const last_name = $("#lname").value;
        
        let errorMessage ="";

        if(first_name == "" || last_name == ""){
            errorMessage += "Name and Last name are required";
        }
        else if(errorMessage == ""){
            $("#contactForm").submit();
        }
        else{
            alert(errorMessage);
            evt.preventDefault();
            $("#fname").focus(); 
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

    $("#join").addEventListener("click", evt => {
        const name = $("#name").value;
        const email = $("#email").value;
        
        let errorMessage ="";

        if(name == "" || email == ""){
            errorMessage += "Name and email are required";
        }

        if(errorMessage == ""){
            $("#joinForm").submit();  
            alert("Thanks for join!");  
        }
        else{
            alert(errorMessage);
            evt.preventDefault();
            $("#name").focus(); 
        }
    });
});   


