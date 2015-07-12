$(document).ready(function(){ 
	$('.thumbnails img').hover(function(){ 
		$('#preview').attr('src',
			$(this).attr('src'); }); });