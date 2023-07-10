$(document).ready(function(){
		$('.showme').click(function(){
				var details = ('#' + (this).id + '_d');    
				$(details).toggle();

			});
	});