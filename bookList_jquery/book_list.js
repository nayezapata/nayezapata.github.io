"use strict";

$(document).ready(() => {
    $("#categories h2").click (evt =>{
        const h2s = evt.currentTarget;

        $(h2s).toggleClass("minus");
        $(h2s).next().toggleClass("open");

        $("#image").attr("src", "");

    });

    $("#web_images a, #language_images a, #database_images a").each( (index, img) => {
        var imageURL = $(img).attr("href");

        var image = new Image();
        image.src = imageURL;

        $(img).click(evt => {
            $("#image").attr("src", imageURL);
            
            evt.preventDefault();

         });   
            
    });
    
});