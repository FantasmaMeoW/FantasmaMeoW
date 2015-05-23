$(function() {

$(document).ready(function() {
	$('#toggleMenu').on('click', function(){
		if($('#menu').hasClass('show') ){
			$('#menu').removeClass('show');
		} else{
			$('#menu').addClass('show');	
		}
		
	});
	$('#menu .bg').on('click', function(){
			$('#menu').removeClass('show');
	});
	$('#menu_list > li').on('click', function(e){
		$('#menu_list .active').removeClass('active');
		$(e.currentTarget).addClass('active');
	});
});


});