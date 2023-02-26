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


	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
				scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});

	$(function() {
  const $modal = $('.showicon');
  const $closeBtn = $('.showicon-off');
  const $openModalBtn = $('.price_slide__button');

  // Функція для відкриття модального вікна
  function showModal() {
    $modal.fadeIn();
  }

  // Функція для закриття модального вікна
  function hideModal() {
    $modal.fadeOut();
  }

  // Додавання обробника події на кнопку закриття
  $closeBtn.on('click', hideModal);

  // Додавання обробника події на клік по модальному вікні
  $modal.on('click', function(e) {
    if ($(e.target).hasClass('modal')) {
      hideModal();
    }
  });

  // Додавання обробника події на клік по кнопці, що відкриває модальне вікно
  $openModalBtn.on('click', showModal);
});
})
