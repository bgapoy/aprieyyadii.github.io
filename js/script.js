$(document).ready(function(){
				$('a[href^="#"]').on('click', function (e) {
					e.preventDefault();

					var target = this.hash;
					var $target = $(target);

					$('html, body').animate({
						'scrollTop': $target.offset().top -50
					}, 1000, 'easeInOutExpo');
				});
			});




$(window).scroll(function(){
	var wscroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px , '+wscroll/5+'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px , '+wscroll/2+'%)'
	});
	$('.jumbotron p').css({
	'transform' : 'translate(0px , '+wscroll/1.2+'%)'
	});
});