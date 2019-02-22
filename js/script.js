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

// about

$(window).on('load', function(){
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');
});


$(window).scroll(function(){
	var coba = $(this).scrollTop();
	
	//jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px , '+ coba/4 +'%)'
	});
		$('.jumbotron h1').css({
		'transform' : 'translate(0px , '+ coba/2 +'%)'
	});
			$('.jumbotron p').css({
		'transform' : 'translate(0px , '+ coba/1.2 +'%)'
	});

    //portfolio
    if (coba > $('.portfolio').offset().top -250) {
    	$('.portfolio .thumbnail').each(function(i){
    		setTimeout(function(){
    			$('.portfolio .thumbnail').eq(i).addClass('muncul');
    		},300 * (i + 1));
    	});
    	
    	
    }




});