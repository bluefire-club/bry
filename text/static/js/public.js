function ajax(type, api, mdata, mtoken){
	return new Promise((resolve, reject) => {
		$.ajax({
			type: type,
			url: "http://47.108.31.145:5003/Api/" + api + "?r=" + Math.random(3),
			data: {
				Data: "{" + mdata + "}",
				token: mtoken
			},
			dataType: "json",
			success: function (res) {
				resolve(res);
			},
			error: function (res) {
				reject(res);
			}
		});
	});
}