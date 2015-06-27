/*=============================================================
	Authour URL: www.designbootstrap.com
	
	http://www.designbootstrap.com/

	License: MIT

	http://opensource.org/licenses/MIT

	100% Free To use For Personal And Commercial Use.

	IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */


$(document).ready(function () {

/*====================================
SCROLLING SCRIPTS
======================================*/

$('.scroll-me a').bind('click', function (event) { //just pass scroll-me in design and start scrolling
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top
	}, 1200, 'easeInOutExpo');
	event.preventDefault();
});


/*====================================
POPUP IMAGE SCRIPTS
======================================*/
$('.fancybox-media').fancybox({
	openEffect: 'elastic',
	closeEffect: 'elastic',
	afterLoad: function() {
		var res = this.title.split('|');
		//this.inner.prepend( '<h1>'+res.length+'</h1>' );
		this.title ='<ul>'
		+ '<li><h4>' + res[0] + '</h4></li>'
		+ '<li>par <i>' + res[1] + '</i></li>'
		+ '<li><small>catégories</small>&nbsp;:&nbsp;' + res[2] + '</li>'
		+ '<li><a href=\'' + res[3] + '\' target=\'_blank\'>+ de détail</a></li>'
		+ '<li>«&nbsp;' + res[4] + '&nbsp;»</li>'
		+ '</ul>';
	},
	afterShow: function() {
		$(".fancybox-title").wrapInner('<div />').show();
		$(".fancybox-wrap").hover(function() {
			$(".fancybox-title").show();
		}, function() {
			$(".fancybox-title").hide();
		});
	},
	helpers: {
		title: {
			type: 'over'
		}
	}
});


/*====================================
FILTER FUNCTIONALITY SCRIPTS
======================================*/
$(window).load(function () {
	var $container = $('#work-div');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
	$('.caegories a').click(function () {
		$('.caegories .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});
});



/*====================================
WRITE YOUR CUSTOM SCRIPTS BELOW
======================================*/







});
