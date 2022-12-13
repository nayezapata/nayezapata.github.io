"use strict"
	
$(document).ready(() =>{

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
            alert("Thanks for your message! I am excited to get in touch with you!.") 
        } 
        $("#fname").focus();
    });
});  