;$(function () {
	if(url.indexOf('join')>-1){
		(function(){
			parmas = {};
			var birthday = $("#birthday");
			var len = 365 * 5;
			for(var i= 0; i < len; i++) {
				var date = GetDateStr(-1 * i)
				birthday.append('<option value="'+date+'">'+ date +'</option>')
			}
		}());

		$("#join").click(function(){
			if(!params.imgs || params.imgs.length < 4) {
				alert('请上传图片');
				return false;
			}

			params.childname = $("#childname").val();
			params.phone = $("#phone").val();
			params.birthday = $("#birthday").val();
			params.act_id  = $("#act_id").val();
			params.act = 'join';

			if(!params.childname) {
				alert('请输入姓名');
				return false;
			}

			if(!/1\d{10}/.test(params.phone)) {
				alert('请输入正确的手机号码');
				return false;
			}

			postData('ballot', params, 
				function(err, data){
		            if(data.retCode){
		                alert(data.retMsg);
		                return false;
		            }
		            var act_id = params.act_id;
		            params = {};
		            window.location.href="./vote?act_id="+act_id+"&ent_id="+data.data.id;
		        }
		    )
		})
	}
});

function GetDateStr(AddDayCount) { 
	var dd = new Date(); 
	dd.setDate(dd.getDate()+AddDayCount);
	var y = dd.getFullYear(); 
	var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);
	var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();
	return y+"-"+m+"-"+d; 
}