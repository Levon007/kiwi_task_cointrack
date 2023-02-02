
$('.change_theme').click(function(){
	var dark_style = $('.dark_style');
	var dark_bg = $('.dark_bg');
	var light_style = $('.light_style');
	var light_bg = $('.light_bg');
	if($('.sun_moon').attr('src')=='images/sun.svg'){
		dark_style.toggleClass('light_style dark_style');
		$('.sun_moon').attr('src', 'images/moon.svg');
		dark_bg.toggleClass('light_bg dark_bg');
		$('.window_bg').toggleClass('window_bg_light window_bg');
		$('.window_content_bg').toggleClass('window_content_bg_light window_content_bg');
		$('.light_grey_color').toggleClass('dark_grey_color light_grey_color');
		$('.title_tr').css('background', '#a588e7');
	}else{
		light_style.toggleClass('dark_style light_style');
		light_bg.toggleClass('dark_bg light_bg');
		$('.window_bg_light').toggleClass('window_bg window_bg_light');
		$('.sun_moon').attr('src', 'images/sun.svg');
		$('.window_content_bg_light').toggleClass('window_content_bg window_content_bg_light');
		$('.dark_grey_color').toggleClass('light_grey_color dark_grey_color');
		$('.title_tr').css('background', '#272E3C');
	}
	
})
$(window).scroll(function(){
	 y = $(this).scrollTop()
		if(y > 75){
			$('header').css('opacity', '0.8');
		}
		else{
			$('header').css('opacity', '1');
		}
})