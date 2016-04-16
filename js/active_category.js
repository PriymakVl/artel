$(document).ready(function() {

	var cat_img, cat_list, data, path;

	$('.category-list li').click(function() {
	    cat_list = $(this).attr('cat');

		$('.product-icons-box img').each(function() {
			cat_img = $(this).attr('cat');
			if(cat_list == cat_img) {
				data = $(this).attr('data');	
				$(this).attr('src', data);
			}
			else {
			    path = $(this).attr('path');
				$(this).attr('src', path);	
			}
		});

	});
});

