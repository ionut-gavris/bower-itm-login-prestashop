/*
Author: 	Ionut Gavris
Company: 	IT MANIAX
Email: 		ionut.gavris@itmaniax.com
Web:		http://www.itmaniax.com
*/
/******************************************************************************/
/******************************************************************************/
function itm_bullet() {
	var bullet = "";
	bullet += "<span class='bullet'></span>";
	
	return bullet;
}
function itm_powered_by() {
	var logo = "";
	logo += "<p id='powered'>Powered by</p>";
	logo += "<h1>";
	logo += "	<a href='http://www.itmaniax.com' title='Visit www.itmaniax.com' target='_blank' tabindex='-1'>";
	logo += "	</a>";
	logo += "</h1>";

	return logo;
}
function align_center_content() {
	var window_height = $(window).height();
	var content_height = $('#content').height();
	var padding_top = (window_height - content_height)/2 - 20;
	
	$('#content').css({'padding-top':padding_top});
}
/******************************************************************************/
/******************************************************************************/
$(document).ready(function(){
	if ($('.form-group .bullet').length == 0) {
		$('.flip-container .front.panel').prepend($('.bootstrap #shop-img'));
		$('.bootstrap #shop-img img').remove();	
		$('.bootstrap #login-panel #shop_name').remove();
		
		var powered_by = itm_powered_by();
		$('.bootstrap #shop-img').prepend(powered_by);
		
		var forgot_info = $('#forgot_password_form .alert-info').detach();
		$(forgot_info).addClass('forgot-password-info');
		$('#login-header').append(forgot_info);
		
		$('#login-panel').addClass('front-panel');
		
		$(document).on('click', '.show-forgot-password', function(){
			$('#login-panel').addClass('back-panel').removeClass('front-panel');
		});
		
		$(document).on('click', '.show-login-form', function(){
			$('#login-panel').addClass('front-panel').removeClass('back-panel');
		});
		
		var back_login = $('.show-login-form').detach();
		$('.bootstrap #login-panel .panel-footer').append(back_login);
		
		align_center_content();
		
		var bullet = itm_bullet();
		jQuery('#email, #passwd, #email_forgot').parents('.form-group').append(bullet);
	}
});
/******************************************************************************/
/******************************************************************************/
$(window).resize(function(){
	align_center_content();
});
/******************************************************************************/
/******************************************************************************/