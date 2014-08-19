$(document).ready(function(){

	var $moveOne = $('#three'),
        $moveTwo = $('#two');

    var $link = $('a');
  
    var   r = 0, 
        dir = true;

  	

	    $moveOne.click(function(e) {
	      if (e.target !==this)
	        return;

	        dir = !dir;
	        r = dir? -625 : 0;
	        $moveOne.stop().animate({right: r+'px'}, 400);

	    });
	   $moveTwo.click(function(f) {
	     if (f.target !==this)
	        return;
	        dir = !dir;
	        r = dir? -625 : 0;
	        $moveTwo.stop().animate({right: r+'px'}, 400);

	    });