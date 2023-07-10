$(document).ready(function(){
	$('.moon-circle').hover(function(){
	var details = ('#' + (this).id + '_d');    
	$(details).toggle();

    if($(details).is(':visible')) {
		$(details).val('Hide');
	} else {
		$(details).val('Show');
		}
	});
});