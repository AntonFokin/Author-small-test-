$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	//button hover
		$(".button-plan").hover(function(){
			event.preventDefault();
			var btn= this;
			var plan= $(btn).closest('.plan')[0];
			var head= $(plan).children('.head')[0];
			var h3= $(head).children('h3')[0];			
			btn.classList.toggle('button-active');
			h3.classList.toggle('button-active');
		})
	// Smooth scrolling
	$(".nav").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 500);
	    });

	// Fixed menu
	var $menu = $(".topline");             
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
			$menu.fadeOut('fast',function(){
				$(this).removeClass("default")
				.addClass("fixed transbg")
				.fadeIn('fast');
			});
		} else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
			$menu.fadeOut('fast',function(){
				$(this).removeClass("fixed transbg")
				.addClass("default")
				.fadeIn('fast');
			});
		}
	});
});