$(function() {

$(document).ready(function() {

// Set Page UI
	$('#HomePage').fullpage({
		anchors: ['Main', 'codeworks','illustrworks'],
		navigation: true,
		navigationTooltips: ['About', 'Coding', 'Works']
	});
  $("#mainImg").twentytwenty();


	
	var web = Works.where({'type':'web'});
	var illust = Works.where({'type':'illu'});
	var workTmp = Handlebars.compile($('#workTmp').html());
	web.forEach(function(model){
		var modelDate = {
			"name": model.get('name'),
			"type": model.get('type'),
			"src": model.get('src'),
			"weburl": model.get('weburl'),
		}
		$('#webworkBlock .worksArea').append(workTmp(modelDate));
	});	
	illust.forEach(function(model){
		var modelDate = {
			"name": model.get('name'),
			"type": model.get('type'),
			"src": model.get('src'),
		}
		$('#illuworkBlock .worksArea').append(workTmp(modelDate));
		if($('#illuworkBlock .worksArea .work').length > 0 && ($('#illuworkBlock .worksArea .work').length % 3) == 0){
			$('#illuworkBlock .worksArea').append("<br />");
		}
	});




	// Click Events
  $('#contacts > div').on("click", function(e){
  	var id = $(e.currentTarget).attr('id');
  	var targetURL = '';
  	if( id == 'fb'){
  		targetURL = "https://www.facebook.com/FantasmaMeow";
  	} else if(id == 'pixiv'){
  		targetURL = "http://www.pixiv.net/member.php?id=303857";
  	} else if( id == 'github'){
  		targetURL = "https://github.com/FantasmaMeoW";
  	}
  
  	window.open(targetURL,'_blank');
  });
  $('#illuworkBlock .worksArea .work').on('click', function(e){
  	var name = $(e.currentTarget).attr('name');
  	var model = Works.findWhere({'name':name}) ;
  	var previewTmp = Handlebars.compile($('#previewTmp').html());
  	var modelDate = {
  		"src": model.get('src')
  	};
		$('#illuworkBlock .worksArea').after(previewTmp(modelDate));
		var height = ($(window).height() - $('#preview img').height())/2
		$('#preview img').css('margin-top', height);
		$('#preview').css('opacity', '1');
		
		$('.close').one('click', function(){
  		$('#preview').fadeOut(function(){
  			$('#preview').remove();
  		});
  		
 		});
  });
  
});
});