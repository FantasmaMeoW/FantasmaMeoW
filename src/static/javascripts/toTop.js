$(document).ready(function() {

	var target = $("body, html");

	checkScroll( target );
	$(window).on("scroll", function(){
		checkScroll( $(this));
	});

	function checkScroll(target){
		var height = $(window).height() / 2 ;
		var top = target.scrollTop();
		// console.log(top);
		if( top > height){
			if( !$("#toTop").hasClass("active") ){
				$("#toTop").addClass("active");
			}
		} else{
			if( $("#toTop").hasClass("active") ){
				$("#toTop").removeClass("active");
			}
		}
	}

	$("body").on("click", "#toTop", function(){
		target.animate({scrollTop:0}, '500');
	});

});