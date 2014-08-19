$(document).ready(function(){

	$('#wrapper').css('opacity','0');
	$('#wrapper').css('margin-top','-15px');

	

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
	

/*	var link = 'a[href^=#]';

	$(link).click(function(e){
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').animate({
      		'scrollTop': $target.offset().top
      }, 1000, 'easeInQuart', function(){
      	window.location.hash = target;
      });

	});
*/
});

$(window).load(function(){
	$('#wrapper').animate({
		opacity:'1',
		marginTop:'0'
		},{
		delay: 6000,
		specialEasing: 'easeInOutSine',
		duration: 800
		});
});


