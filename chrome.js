// var toggleNavBox = function() {
// 	var box = document.getElementById('nav-box');
// 	if (box.style.display == 'none' && document.getElementsByClassName('header-hide')[0]) {
// 		box.style.display = 'block';
// 		document.getElementsByClassName('header-hide')[0].classList.add('header');
// 		document.getElementsByClassName('header-hide')[0].classList.remove('header-hide');
// 	} else {
// 		box.style.display = 'none';
// 		document.getElementsByClassName('header')[0].classList.add('header-hide');
// 		document.getElementsByClassName('header')[0].classList.remove('header');
// 	}
// 	console.log(box.style);
// 	console.log(box.style.display);
// }

// console.log(document.getElementById('nav-box'));
$(document).ready(function() {
	$('#apps-expander').click(function() {
		$('#apps-box').toggle('fast');
	});

	$('#main-menu-expander').click(function () {
		$('#main-menu-left').toggleClass('unexpanded expanded');
		$('#main-content').toggleClass('shrink');
	});

	// function to animate the selected options under chat section in left-menu
	$('#main-menu-left #options .small-icons').click(function() {
		if (this != $('#main-menu-left #options .small-icons').filter('.selected')) {
			$('#main-menu-left #options .small-icons').filter('.selected').toggleClass('selected');
			$(this).toggleClass('selected');
		}
	});

	$('#main-content #mails .email').hover(
		function() {
			$(this).children('.tools').toggleClass('visible');
			$(this).children('.drag-area').toggleClass('visible');
			$(this).children('.select, .fav').toggleClass('visible');
	}, function() {
			$(this).children('.tools').toggleClass('visible');
			$(this).children('.drag-area').toggleClass('visible');
			$(this).children('.select, .fav').toggleClass('visible');
	});

	//$('#main-content #mails .email').text($('#main-content #mails .email').text().replace('- ',''));
	// $('#top-toolbar .icon, #top-toolbar .circle-icon').hover(
	// 	function() {
	// 	console.log($(this).children());
	// 	$(this).children('i').css({'transform': 'scale(.69,.69)'});
	// 	$(this).css({'transform': 'scale(1.5,1.5)'});
	// }, function() {
	// 	$(this).css({'transform': 'scale(1,1)'});
	// 	$(this).children('i').css({'transform': 'scale(1,1)'});
	// });
});

var toggleNavBox = function() {
	$(document).ready(function() {
		var box = $('#nav-box');
			console.log(box[0]);
		if(box[0].style.display == 'block') {
			$('#nav-box').slideToggle('fast', function() {
				$('#triangle').toggle('fast');
			});
		} else {
			$('#triangle').toggle('fast', function() {
				$('#nav-box').slideToggle('fast');
			});
		}
	});
}

// var fadeSearchBox = function() {
// 	console.log($('#search-bar > input'));
// 	$('#search-bar > input').animate({
// 		opacity: 0.2
// 	}, 1000)
// };
