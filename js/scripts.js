$(document).ready(function(){
	$('#wrapper').css('opacity','0');
	$('#wrapper').css('margin-top','-15px');
	/*console.log('man, get out ron');*/

	var link = 'a[href^=#]';

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

