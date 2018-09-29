function queryString(){
	var params = {};
	if(url.split("?").length > 1){
        var query = url.split("?")[1];  //id=1&name=2
        query = query.split('&');
        for(var i=0,len=query.length; i< len; i++) {
            var item = query[i].split('=');
            params[item[0]] = item[1];
        }
        return params;
    }
    return null;
}

var url =  window.location.href;