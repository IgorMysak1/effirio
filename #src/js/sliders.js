//SLIDERS
if ($('.body-customer__sliders').length > 0) {
	$('.body-customer__sliders').slick({
		//autoplay: true,
		dots: true,
		arrows: true,
		slidesToShow: 3,
		autoplaySpeed: 2000,
		slidesToScroll: 3,
		easing: 'ease',
		infinite: false,
		touchThreshold: 10,
		waitForAnimate: false,
		responsive: [{
			breakpoint: 1137,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 767.98,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				waitForAnimate: true,
				touchThreshold: 5
			}
		}, {
			breakpoint: 479.98,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				waitForAnimate: true,
				arrows: false,
				touchThreshold: 5
			}
		}]
	});
}
if ($('.message-voice__sliders').length > 0) {
	$('.message-voice__sliders').slick({
		//autoplay: true,
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		easing: 'ease',
		infinite: false,
		touchThreshold: 10,
		waitForAnimate: false,
		responsive: [{
			breakpoint: 1137,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 991.98,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				waitForAnimate: true,
				touchThreshold: 5
			}
		}]
	});
}
if ($('.wrapper-depression__sliders').length > 0) {
	$('.wrapper-depression__sliders').slick({
		//autoplay: true,
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		easing: 'ease',
		infinite: false,
		touchThreshold: 10,
		waitForAnimate: false,
		responsive: [{
			breakpoint: 1137,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 991.98,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				waitForAnimate: true,
				touchThreshold: 5
			}
		}]
	});
}
/*
arrows: true  //включені стрілки
dots: true //крапки
autoplay: true //автоматичне прокручування
autoplaySpeed: 3000 //кожниїх 3 сек буду перегортуватися слайд
pauseOnFocus:true //пауза при наведенні
pauseOnHover:true //пауза при наведенні
pauseOnDotsHover:true //пауза при наведенні
draggble: false //виключає свайп на компютері
swipe: false //виключає свайп на телефонах
touchThreshold: 10 //наскільки багато треба свайпнути щоб переключився слайдер
touchMove: true //не можна тягнути слайдер на телефонах
waitForAnimate: false //дозволяє дуже швидко перегортувати слайдер
centerMode: true //основна картинка по центру слайдера
variableWidth: false //займає ширину картинки
rows: 2 //кількість картинок врядок
slidesPerRow: 1 //кількість колонок в ряді
vertical: true //вертикальний слайдер
verticalSwiping: true //вертикальний сайт
fade: true //працює з одною картинкою , надає плавність
asNavFor:" " //звязування слайдів , щоб підключити треба зробити обмін назви класу слайдера


// SLIDER ON MOBILE
if($('.reviews-object__items').length>0){
		let slider=$('.reviews-object__items');
	function reviews_object(){
		slider.slick({
			dots: true,
			arrows: false,
			accessibility:false,
			slidesToShow:1,
			autoplaySpeed: 3000,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next ic-arrow"></button>',
			prevArrow:'<button type="button" class="slick-prev ic-arrow"></button>',
			responsive: [{
				breakpoint: 9999,
				settings:'unslick'
			},{
				breakpoint: 768,
				settings: {

				}
			}]
		});
	}
		reviews_object();
	$(window).resize(function(event) {
			var w=$(this).outerWidth();
		if(w<768 && !slider.hasClass('slick-initialized')){
			reviews_object();
		}
	});
}


//SLICK FIX
function slick_fix(slider){
	//SET OPTIONS
	//$('.progress__slider').slick('slickSetOption',{autoplay:false},true);
		var sltoshow=slider.get(0).slick.options.slidesToShow;
		var all=slider.find('.slick-slide').length;
		var allactive=slider.find('.slick-slide').not('.slick-cloned').length;
	slider.on('beforeChange', function(event,slick,currentSlide,nextSlide){
		if(nextSlide==0){
				var ind=all-allactive;
			if(sltoshow==1){
				slider.find('.slick-slide').eq(ind).addClass('active');
			}else{
				sliderfix(slider,ind);
			}
		}
		if(nextSlide==allactive-1){
			if(sltoshow==1){
				slider.find('.slick-slide').eq(0).addClass('active');
			}else{
				sliderfix(slider,sltoshow-1);
			}
		}
		//DIRECTION
		if (currentSlide === 0 && nextSlide === slick.$slides.length - 1) {
			direction = 'prev';
		}else if(nextSlide > currentSlide || (currentSlide === (slick.$slides.length - 1) && nextSlide === 0 )) {
			direction = 'next';
		}else{
			direction = 'prev';
		}
		//console.log(direction);
	});
	slider.on('afterChange', function(event, slick, currentSlide){
		slider.find('.slick-slide').removeClass('active');
	});
	function sliderfix(slider,v){
		for (var i=0; i < sltoshow; i++) {
				var n=v+i;
			slider.find('.slick-slide').eq(n).addClass('active');
		}
	}
}
*/
/*
if($('.newsmodule-slider').length>0){
	//Опция
	$('.newsmodule-slider').get(0).slick.options.slidesToShow

	$('.newsmodule-items-item').click(function(event) {
		$('.newsmodule-items-item').removeClass('active');
		$(this).addClass('active');
		$('.newsmodule-slider').slick('goTo',$(this).index());
	});
	$('.newsmodule-navigator-info span').eq(1).html($('.newsmodule-items-item').length);

	$('.newsmodule-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.newsmodule-navigator-info span').eq(0).html(nextSlide+1);
	});
	$('.newsmodule-slider').on('afterChange', function(event, slick, currentSlide){
		$('.newsmodule-navigator-info span').eq(0).html(currentSlide+1);
	});
	$('.newsmodule-navigator__arrow.fa-angle-left').click(function(event) {
		$('.newsmodule-slider').slick('slickPrev');
	});
	$('.newsmodule-navigator__arrow.fa-angle-right').click(function(event) {
		$('.newsmodule-slider').slick('slickNext');
	});
}
*/