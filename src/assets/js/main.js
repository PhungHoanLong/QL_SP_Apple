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

	// // Input number
	// $('.input-number').each(function () {
	// 	var $this = $(this),
	// 		$input = $this.find('input[type="number"]'),
	// 		up = $this.find('.qty-up'),
	// 		down = $this.find('.qty-down');

	// 	down.on('click', function () {
	// 		var value = parseInt($input.val()) - 1;
	// 		value = value < 1 ? 1 : value;
	// 		$input.val(value);
	// 		$input.change();
	// 		updatePriceSlider($this, value)
	// 	})

	// 	up.on('click', function () {
	// 		var value = parseInt($input.val()) + 1;
	// 		$input.val(value);
	// 		$input.change();
	// 		updatePriceSlider($this, value)
	// 	})
	// });

	function updatePriceSlider(elem, value) {
		if (elem.hasClass('price-min')) {
			console.log('min')
			priceSlider.noUiSlider.set([value, null]);
		} else if (elem.hasClass('price-max')) {
			console.log('max')
			priceSlider.noUiSlider.set([null, value]);
		}
	}

	var priceInputMax = document.getElementById('price-max'),
		priceInputMin = document.getElementById('price-min');

	priceInputMax?.addEventListener('change', function () {
		updatePriceSlider($(this).parent(), this.value)
	});

	priceInputMin?.addEventListener('change', function () {
		updatePriceSlider($(this).parent(), this.value)
	});

	// Price Slider
	var priceSlider = document.getElementById('price-slider');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: [1, 999],
			connect: true,
			step: 1,
			range: {
				'min': 1,
				'max': 999
			}
		});

		priceSlider.noUiSlider.on('update', function (values, handle) {
			var value = values[handle];
			handle ? priceInputMax.value = value : priceInputMin.value = value
		});
	}

	// Custom jQuery
	// Create QR Code by choose payment 
	$(".payment-method div").click(function () {
		$(".code img").attr('src', "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + document.getElementsByClassName('input-radio')[$(this).index()]?.querySelector('input[name="payment"]').value);
	});

	// Choose navigation bar
	$(".navbar-nav li").click(function () {
		$("li").removeClass("active");
		$(this).addClass("active");
	});

	// Choose cart navigation
	$(".cart-btns a").click(function () {
		$(".navbar-nav li").removeClass("active");
	});
});
