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

	$('#right-panel-toggle').click(function() {
		$(this).toggleClass('half');
		$('#right-nav-bar').toggleClass('hide');
		$('#main-content').toggleClass('expand-right');
	});

	$('#top-toolbar .option-icon').click(function() {
		if (!$(this).next().hasClass('show') && $('#top-toolbar .dialogue-box.show').length == 0) {
			$(this).next().toggleClass('show');
		} else if ($(this).next().hasClass('show')) {
			$(this).next().toggleClass('show');
		} else if (!$(this).next().hasClass('show') && $('#top-toolbar .dialogue-box.show').length > 0) {
			$('#top-toolbar .dialogue-box.show').toggleClass('show');
			$(this).next().toggleClass('show');
		}
	});

	$('.email .select').click(function() {
		$(this).children().toggleClass('fa-square fa-check-square');
		$(this).parent().toggleClass('checked');
	});

	$('#top-toolbar #checkbox').click(function() {
		if ($(this).children().hasClass('fa-square')) {
			$(this).children().toggleClass('fa-square fa-check-square');
			$('#mails .email .select').children('.fa-square').toggleClass('fa-square fa-check-square');
		} else {
			//to uncheck all the children regardless of ticked or unticked
			$(this).children().toggleClass('fa-square fa-check-square');
			$('#mails .email .select').children('.fa-check-square').toggleClass('fa-check-square fa-square');
		}
	});

	$('#mails .email .fav').click(function() {
		if($(this).children().hasClass('fas')) {
			$(this).children().toggleClass('fas far').css({'color': 'black'});
			$(this).parent().toggleClass('favourite');
		} else {
			$(this).children().toggleClass('fas far').css({'color': 'rgb(202, 115, 0)'});
			$(this).parent().toggleClass('favourite');
		}
	});

	// $('#main-menu-left').hover(
	// 	function() {
	// 		$(this).toggleClass('hover-expand');
	// },function() {
	// 		$(this).toggleClass('hover-expand');
	// });

	let timeoutId;
	$('#main-menu-left').hover(function() {
		console.log($(this));
		if($(this).hasClass('expanded')) {
			
		} else if ($(this).hasClass('unexpanded')){
			timeoutId = window.setTimeout(function() {
				$('#main-menu-left').toggleClass('hover-expand');
			},500);
		}
	},
	function() {
		if($(this).hasClass('hover-expand')) {
			$(this).toggleClass('hover-expand');
		} else {
			window.clearTimeout(timeoutId);
		}
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
