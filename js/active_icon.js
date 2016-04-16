$(document).ready(function() {

	$('.product-icons-box img').hover(
		function() {
			var data = $(this).attr('data');
			src = $(this).attr('src');
		 	$(this).attr('src', data);	
		},
		function() {
			$(this).attr('src', src);
	});
});

