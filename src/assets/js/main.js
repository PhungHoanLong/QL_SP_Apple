(jQuery)(function ($) {

	// Mobile Nav toggle
	$('.menu-toggle > a').on('click', function (e) {
		e.preventDefault();
		$('#responsive-nav').toggleClass('active');
	})

	// Fix cart dropdown from closing
	$('.cart-dropdown').on('click', function (e) {
		e.stopPropagation();
	});

	/////////////////////////////////////////

	// Custom jQuery
	// Choose navigation bar
	$(".main-nav li").on('click', function () {
		$(".main-nav li").removeClass("active");
		$(this).addClass("active");
	});

	// Choose navigation cart
	$(".cart-btns a").on('click', function () {
		$(".main-nav li").removeClass("active");
	});

});
