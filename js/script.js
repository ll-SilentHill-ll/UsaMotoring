$(document).ready(function(){
	$('.js-tab_trigger').click(function(event) {
		if($('.answer').hasClass('one')){

		$('.js-tab_trigger').not($(this)).removeClass('active')
		$('.js-tab_content').not($(this).next()).slideUp(300)
		$(this).toggleClass('active').next().slideToggle(300)
}
	})

	$('.heder-line').click(function(){
	$('.adaptive__menu').addClass('adaptive__menu-show')
	$('body').addClass('menu_stop')
	})

	$('.ad-menu_off').click(function(){
	$('.adaptive__menu').removeClass('adaptive__menu-show')
	$('body').removeClass('menu_stop')
	});
	$('.ad_header__link').click(function(){
	$('.adaptive__menu').removeClass('adaptive__menu-show')
	$('body').removeClass('menu_stop')
	});

	$('.mb_click').click(function(){
	$('.showicon').addClass('showicon-on')
	});

	$('.price_slide__button').click(function(){
	$('.showicon').addClass('showicon-on')
	});

	$('.showicon-off').click(function(){
	$('.showicon').removeClass('showicon-on')
	});

	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
				scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});


})
