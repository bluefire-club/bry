# bry 使用vue拉取数据，其中有 基于layui实现的文件上传。
distpicker 省市区的插件
上传文件js
//拿到event 
getFile(event) {
					var file = event.target.files;
					let that = this;
					for (var i = 0; i < file.length; i++) {
						// 上传类型判断
						var imgName = file[i].name;
						var idx = imgName.lastIndexOf(".");
						if (idx != -1) {
							var ext = imgName.substr(idx + 1).toUpperCase();
							ext = ext.toLowerCase();
							if (
								ext != "jpg" &&
								ext != "png" &&
								ext != "bmp" &&
								ext != "gif"
							) {
							} else {
								that.imgArr = file[i];
							}
						} else {
						}
						//展示上传的图片
						let reader = new FileReader();
						reader.readAsDataURL(file[i]);//这个方法将文件转为base64编码的字符串，可以把这个给后端了。
            //这里在页面展示图片 
						reader.onload = function (e) {
							that.imgArr = this.result;
						};
					}
				},
