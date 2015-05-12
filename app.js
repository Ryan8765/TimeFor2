$(document).ready(function() {
//--------------------------------
	//scroll user to signup form
	$('#CTA').on('click', function() {
		$('html, body').animate({
			scrollTop: ($('#mc_embed_signup').offset().top)-(20)
		}, 2000);
	});
//----------------------------------	
});