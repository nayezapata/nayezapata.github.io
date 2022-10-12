"use strict"

$(document).ready( () => { 
  
    $(".faqscontainer h6").click (evt => { 

        const target = evt.currentTarget;

        $(target).toggleClass("minus");

        if($(target).attr("class") != "minus") {
            $(target).next().hide();
        } else {
            $(target).next().show();
        }

        evt.preventDefault();

    });//end click
    

});//end ready