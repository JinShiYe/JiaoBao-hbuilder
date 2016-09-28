/**
 * @author an
 */
/**
 * 加载跳转界面监听的公用方法 
 * @param {Object} object 加载监听的控件
 * @param {Object} targetHTML 目标Url
 */
var jumpPage=function(object,targetHTML){
	object.addEventListener('tap',function(){
		mui.openWindow({
			url:targetHTML,
			id:targetHTML,
			show:{
				anishow:"slide-in-right"
			},
			waiting:{
				title:'正在加载...'
			}
		})
	})
}