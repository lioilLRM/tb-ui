var fs = require('fs');
var path = require('path')
var updateOrgIdFile = function(opt){
	console.log('run updateOrgIdFile', opt);
	
	var {orgid,iconsDir,removeIconsDir} = opt;
	//修改对应的图标，(目前只需要修改应用的图标,仅针对恒峰与银河)
	//删除当前应用的app图标
	var appIconDir = removeIconsDir;
	var appIconFileList = fs.readdirSync(appIconDir);
	appIconFileList.forEach(tFile=>{
		var p = path.join(appIconDir,tFile);
		fs.unlinkSync(p);
	})
	
	// //准备复制app图标到上一步已经移除的目录
	var iconDir = iconsDir;
	var iconFileList = fs.readdirSync(iconDir);
	iconFileList.forEach(tFile=>{
		//先读，再写入。直接copy会有权限问题
		var sourcePath = path.join(iconDir,tFile);
		var aimPath = path.join(appIconDir,tFile);
		var data = fs.readFileSync(sourcePath);
		fs.writeFileSync(aimPath,data)
	})
	opt.customer&& opt.customer();
	
}



module.exports = function(data){
	console.log('-------------开始'+data.orgid+'更新配置文件------------')
	console.time('updateFile')
	updateOrgIdFile(data);
	console.timeEnd('updateFile')
	console.log('-------------配置文件更新成功------------')
}