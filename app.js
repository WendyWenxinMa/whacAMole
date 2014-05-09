$(document).ready( function() {

    //This code will run after your page loads

    var changeOpacity;

    $('.penguin').css({opacity : 0.1});



    // $(".yeti").mousedown(function() {
    //     alert("Yaaaarrrr!");
    // });

    $('.clickable').click(function (e) {
        console.log(e);
        //console.log(e.target.id);
        $("#"+e.target.id).css({opacity:1});

        $("#1")
        //e.target.css({opacity:1});
    });

});
