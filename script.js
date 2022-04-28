$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 40) {
          $("#theta").css({"left":"5%", "bottom":"5%"});
        }
  
        else{
            $("#theta").css({"left":"5%", "bottom":"25%"});  	
        }
    });
});


// getsummary

//getpoints

//getsents








// $('#threshold').change(function(){
//     console.log(document.getElementById('threshold').value)
// });