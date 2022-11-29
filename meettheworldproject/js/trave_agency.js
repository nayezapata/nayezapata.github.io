"use strict"

// let time = new Date()

const currentDate = new Date();

let month = currentDate.getMonth() + 1;
if (month < 10) {                                
    month = "0" + month;                       
}

let day = currentDate.getDate();
if (day < 10) {
    day = "0" + day;
}

const year = currentDate.getFullYear();

const hours = currentDate.getHours();

let minutes = currentDate.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}

const dateString = `Today is ${month}/${day}/${year} at ${hours}:${minutes}.`;	

$(document).ready(() =>{

    /* ***** Contact Form ***** */
    $("#contactus").click (evt => {
        
        let isValid = true;
       
        const firstNamePattern = /^[a-z,.'-]+$/i;
        const firstName = $("#fname").val().trim();
        if(firstName == ""){
            isValid = false;
            $("#fname").next().text("First Name is required");
        } else if(!firstNamePattern.test(firstName)){
            $("#fname").next().text("First name must be a valid value")
            isValid = false;
        } else{
            $("#fname").next().text(" ");
        }
        $("#fname").val(firstName);
        $("#fname").focus();
        

        const lastNamePattern = /^[a-z,.'-]+$/i;        
        const lastName = $("#lname").val().trim();
        if(lastName == ""){             
            isValid = false;
            $("#lname").next().text("Last Name is required.");
        } else if(!lastNamePattern.test(lastName)){
            $("#lname").next().text("Last name must be a valid value.") 
            isValid = false;
        }else{
            $("#lname").next().text("");
        }
        $("#lname").val(lastName);
        $("#lname").focus();

        const message = $("#subject").val().trim();
        if(message == ""){
            $("#subject").next().text("Please write a message");
            isValid = false;
        } else{
            $("#subject").next().text("");
        }
        $("#subject").val(message);
        $("#subject").focus();
        
        if(isValid == false){
            evt.preventDefault();
        } 
        else{
            alert("Thanks for contacting us! We will be in touch with you shortly. \n" + dateString + "."); 
        } 
        $("#fname").focus();
    });
    


    /* ***** Newsletter Form ***** */
    $("#join").click (evt => {
        let isValid = true;

        const namePattern = /^[a-z,.'-]+$/i;
        const name = $("#name").val().trim();
        if(name == "") {
            isValid = false;
            $("#name").next().text("Name is required");
        } else if(!namePattern.test(name)){
            $("#name").next().text("Name must be a valid value.")
            isValid = false;
        } else{
            $("#name").next().text("");
        }
        $("#name").val(name);
        $("#name").focus();

        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if(email == "") {
            $("#email").next().text("Email is required.");
            isValid = false;
        } else if (!emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.")
            isValid = false;
        } else {
            $("#email").next().text("");  
        }
        $("#email").val(email);

        if(isValid == false){
            evt.preventDefault();   
        } else {
            alert("Meeting the world could have not been easier. \nThanks for joing our newsletter! \n" + dateString + ".");
        }

        $("#email").val(email);

    });
   
});


    


    





