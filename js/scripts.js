$(document).ready(function(){

	var $moveOne = $('#three'),
        $moveTwo = $('#two');
  
    var   r = 0, 
        dir = true;

  	

	    $('.enable2').unbind().click(function(e) {
	      if (e.target !==this)
	        return;
		console.log('clicked');
	        dir = !dir;
	        r = dir? -625 : 0;
	        $moveOne.stop().animate({right: r+'px'}, 400);
	        
	    });
	   $('.enable1').unbind().click(function(f) {
	     if (f.target !==this)
	        return;
	    console.log('clicked');
	        dir = !dir;
	        r = dir? -625 : 0;
	        $moveTwo.stop().animate({right: r+'px'}, 400);
	        
	    });
});