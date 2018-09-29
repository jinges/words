;$(function(){
	var hasNext = true;
	var isSCroll = false;
	params = {
		page: 1,
		pagesize: 10
	}
	if(url.indexOf('rank')>-1){
		params.act = 'rank';
		params.act_id  = 1;//$("#act_id").val();
		(function(){
			rankView(params, function(flag){
				hasNext = flag;
			})
		})();

		var v_h = document.body.offsetHeight;

		$("body").scroll(function(){
			var s_t = document.body.scrollTop;
			var d_h = document.body.scrollHeight;

			if(isSCroll) {
				return false;
			}
			
			isSCroll  = true;
			if(d_h <= (s_t + v_h)) {
				console.log(1);
				if(!hasNext) {
				    console.log('done loading');
					return false;
				}
				params.page ++;
				rankView(params, function(flag){
					hasNext = flag;
					isSCroll = false;
				})
			}
		})
	}
})

function rankView(params, cb){
	rankData(params, function(data){
		var li = '';
		data.data.forEach(function(item, index){
			li +='<li class="grid">'+
			'	<span>'+ item.rank +'</span>'+
			'	<span>'+item.childname+'</span>'+
			'	<span>'+item.number+'</span>'+
			'	<span>'+item.votes+'</span>'+
			'</li>';
		})
		$(".ranking .pannel-list").append(li);
		cb(data.next);
	});
}

function rankData(params, cb){
	getData('ballot', params, 
		function(err, data){
            if(data.retCode){
                alert(data.retMsg);
                return false;
            }
            cb(data.data);
        }
    )
};