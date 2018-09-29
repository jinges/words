;$(function(){
	$("#vote").click(function(){
		params.act = 'dovote';
		params.act_id  = $("#act_id").val();
		params.ent_id  = $("#ent_id").val();

		postData('ballot', params, 
			function(err, data){
	            alert(data.retMsg);
	            if(data.retCode){
	                return false;
	            }
	            window.location.reload()
	        }
	    )
	})
})