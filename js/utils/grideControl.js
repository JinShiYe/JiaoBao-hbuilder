/**
 * @anthor an
 */
/**
 * 
 * @param {Object} gride 九宫格父控件
 * @param {Object} array 元素数组，包括图标和标题
 */
var createGirde = function(gride,array) {
		//数组遍历
		array.forEach(
			/**
			 * 创建子元素
			 * @param {Object} map 数组元素
			 * @param {Object} index 数组序号
			 * @param {Object} array 数组
			 */
			function(map, index, array) {
			console.log("字符串：" + map.key + "图标：" + map.value);
			var li = document.createElement('li');//子元素
			var bgColor=getRandomColor();//获取背景色
			if(array.length<=3){//数组小于等于3，每行3个图标
				li.className = "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4";
			}else{//数组大于3，每行四个图标
				li.className = "mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3";
			}
			//子控件的innerHTML
			li.innerHTML = '<a href="#">' +
				'<img class="mui-icon circular-square" src="' + map.value + '" style="background-color:'+bgColor+';"></img>' +
				'<div class="mui-media-body">' + map.key + '</div>' +
				'</a>';
			/**
			 * 子控件加载点击监听事件
			 */
			li.addEventListener('tap',function(){
				openTarWindow(map.tarUrl)
			})
			//父控件加载子控件
			gride.appendChild(li)
		})
	}

/**
 * 创建子控件数组
 * @param {Object} chars 底部标题 数组
 * @param {Object} imgUrls 图片Url 数组
 * @param {Object} urls 跳转页面Url数组
 */
var createArray = function(chars, imgUrls,urls) {
	var array=new Array();
	//遍历
	for(i = 0; i < chars.length; i++) {
		var value = {
			key: chars[i],
			value: imgUrls[i],
			tarUrl:urls[i]
		}
		array.push(value)
	}
	console.log(JSON.stringify(array))
	return array;
}
/**
 * 创建随机颜色
 */
var getRandomColor = function(){
  return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
}
/**
 * 打开新页面
 */
var openTarWindow=function(tarUrl){
	mui.openWindow({
		url:tarUrl,
		id:tarUrl
	})
}
