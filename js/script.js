$(document).ready(function () {
    // if you use ID, Please add # in front
    // # means ID, #button is the selector, click() is the action
    // $ syntax from jquery $()
    $("#button").click(function () {
        // p is my select, show() is my action
        $("p").show();
    });

    $("#button1").click(function () {
        //class group1 will be my selector, hide() is my action
        // . means class
        $(".group1").hide();
    });

    $("#button2").click(function () {
        $("#p5").hide();
    });

    $("#button3").click(function () {
        $(".group2").toggle();
    });

    $("#doubleClick").dblclick(function () {
        $("p").toggle();

    });
});



