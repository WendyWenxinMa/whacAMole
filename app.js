$(document).ready( function() {

    //This code will run after your page loads

    var changeOpacity;

    $('.penguin').css({opacity : 1.0});




    $('.clickable').click(function (e) {
        console.log(e);
        //console.log(e.target.id);
        $("#"+e.target.id).css({opacity:0.0});

    });

    
    for(var n = 0; n< 4; n++){
        var $randomId = Math.floor(Math.random()*9+1); 
        
        
        
        var $randomNum = Math.floor(Math.random()*4+2) * 500; 

        
        setInterval(function(){$('#'+(Math.floor(Math.random()*9+1))).css({opacity:1.0})}, $randomNum);

    }




});

  //Math.floor((Math.random() * 10) + 1); this random is from 1-10
     // $( "#1" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
   // setTimeout(function() { $('#'+$randomId).fadeOut(); }, $randomNum); 
   
    //setTimeout(function() { $('#'+$randomId).fadeIn(); }, $randomNum*2); 


// $(document).ready(function(){
//     /* Pick random number between 1 and 2 */
//     var randomNum = Math.ceil(Math.random()*2); 
//     $.each([1,2], function(){
//        var $div = $('<div class="background" style="background-image: url(images/main' + this + '.jpg)"></div>');
//        if( this !== randomNum ) $div.hide();
//        $div.appendTo( document.body );
//     });
// });