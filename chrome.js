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
			$(this).children().toggleClass('fas far');
			$(this).parent().toggleClass('favourited');
			$('#mails #inbox').append($(this).parent());
		} else {
			$(this).children().toggleClass('fas far');
			$(this).parent().toggleClass('favourited');
			$('#mails #favourite-mails').append($(this).parent());
		}
	});

	$('#main-menu-left #menu-list .icon-container').click(function() {
		if($(this).hasClass('selected')) {
			//if user clicks on the currently selected, do nothing
		} else {
			let prevSelected = $('#main-menu-left .icon-container.selected').attr('id');
			let currentlySelected = $(this).attr('id');

			$('#main-menu-left .icon-container.selected').toggleClass('selected');
			$(this).toggleClass('selected');


			switch(prevSelected) {
				case 'inbox-icon':
					$('#inbox').css({'display': 'none'});
					break;
				case 'archive-icon':
					$('#archive-mails').css({'display': 'none'});
					break;
				case 'sent-icon':
					$('#sent-mails').css({'display': 'none'});
					break;
				case 'fav-icon':
					$('#favourite-mails').css({'display': 'none'});
					break;
				case 'draft-icon':
					$('#draft-mails').css({'display': 'none'});
					break;
				case 'custom1-icon':
					$('#custom1-mails').css({'display': 'none'});
					break;
				case 'custom2-icon':
					$('#custom2-mails').css({'display': 'none'});
					break;
			}

			switch(currentlySelected) {
				case 'inbox-icon':
					$('#inbox').css({'display': 'flex', 'flex-direction': 'column'});
					$('#search-bar input').attr('placeholder', 'Search ur mel');
					break;
				case 'archive-icon':
					$('#archive-mails').css({'display': 'flex', 'flex-direction': 'column'});
					$('#search-bar input').attr('placeholder', 'in: Archive');
					break;
				case 'sent-icon':
					$('#sent-mails').css({'display': 'flex', 'flex-direction': 'column'});
					$('#search-bar input').attr('placeholder', 'in: Sent');
					break;
				case 'fav-icon':
					$('#favourite-mails').css({'display': 'flex', 'flex-direction': 'column'});
					$('#search-bar input').attr('placeholder', 'in: Favourites');
					break;
				case 'draft-icon':
					$('#draft-mails').css({'display': 'flex', 'flex-direction': 'column'});
					$('#search-bar input').attr('placeholder', 'in: Draft');
					break;
				case 'custom1-icon':
					$('#custom1-mails').css({'display': 'flex', 'flex-direction': 'column'});
					$('#search-bar input').attr('placeholder', 'label: Custom1');
					break;
				case 'custom2-icon':
					$('#custom2-mails').css({'display': 'flex', 'flex-direction': 'column'});
					$('#search-bar input').attr('placeholder', 'label: Custom2');
					break;
			}
		}
	});

	$('#compose-button').click(function() {
		//if there is no box, display a box,
		console.log($(window).width());
		if ($(window).width() < 415) {
			if($('#new-mail-2').hasClass('hidden')){
				$('#new-mail-2').toggle('fast').toggleClass('hidden');
			}
		} else {
			if ($('#compose-email-area .compose-box.hidden').length > 0) {
				$('#compose-email-area .compose-box.hidden').eq(0).toggle('fast').toggleClass('hidden');
			}
		}
	});

	$('#compose-email-area .header .window-control i').click(function() {
		if ($(this).hasClass('minimize')) {
			$(this).parents('.compose-box').toggleClass('minimized');
		}
		if ($(this).hasClass('resize')) {
			$(this).parents('.compose-box').toggleClass('resize');
		}
		if ($(this).hasClass('close')) {
			$(this).parents('.compose-box').toggle('fast').toggleClass('hidden');
		}
	});

	let timeoutId;
	$('#main-menu-left').hover(function() {
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
});

var toggleNavBox = function() {
	$(document).ready(function() {
		var box = $('#nav-box');
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
