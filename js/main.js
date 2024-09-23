$('a.button').on('click', function(e) {
	e.preventDefault();
	$('.modal').addClass('modalActive');
});

$('.modal').on('click', function(modal) {
	if (modal.target == this) {
		$(this).removeClass('modalActive');
	}
});