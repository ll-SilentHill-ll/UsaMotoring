$(document).ready(function(){
	$('.js-tab_trigger').click(function(event) {
		if($('.answer').hasClass('one')){

		$('.js-tab_trigger').not($(this)).removeClass('active')
		$('.js-tab_content').not($(this).next()).slideUp(300)
		$(this).toggleClass('active').next().slideToggle(300)
}
	})
})
