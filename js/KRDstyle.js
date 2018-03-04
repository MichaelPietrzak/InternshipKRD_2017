(function ($) {

	new WOW().init();


	//preloader & loader fade

	$(window).load(function() { 
		$("#preloader").delay(100).fadeOut("slow");
		$("#load").delay(100).fadeOut("slow");
	});


	// collapsing navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//MJ Avatar popup 
	$(window).scroll(function() {
		if ($(this).scrollTop() > 600) {
			$(".totop").css( "right", "0px" ) 
			$(".fa fa-2x fa-angle-down").hide();
        } else {
		$(".totop").css( "right", "-300px" ); 
		$(".fa fa-2x fa-angle-down").show(); 
		}
	});

	// page scrolling with jquery easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
