$(document).ready(function () {
    $("#Toggle").click(function () {
        $("#demo").toggle("slow");
        alert("done");
    });

    $("#FadeIn").click(function () {
        $("#demo").slideDown("slow");
    });

    $("#Enlarge").mouseenter(function (){
        $("#demo").animate({width:"250px", height:"250px"});
    });

    $("#Enlarge").mouseleave(function (){
        $("#demo").animate({width:"100px", height:"100px"});
    });

    $("#slide").click(function () {
        $("#forslide").slideDown(2000).slideUp(2000).slideDown(2000)

    })

    $("#changeTextValue").click(function () {
        currentText = $("#changeTextHere").text();
        alert("Current Text: " + currentText);
        $("#changeTextHere").text("Hello Sal"); //change the text in paragraph
        currentValue = $("#changeValueHere").val(); //collect current value in input box
        alert("Current Value: " +currentValue); //show it in popup
        $("#changeValueHere").val("Hello Ahmad"); //change the value in the input box
    });

});
