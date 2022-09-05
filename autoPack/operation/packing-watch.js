var child_process = require('child_process');
const {
	spawn
} = child_process;
var iconv = require('iconv-lite');
var mappings = require('../config/mappings.js');
var encoding = 'cp936';
var binaryEncoding = 'binary';
var path = require('path');
var consoleColor = require('../util/console-color.js');
var fs = require('fs');
const getVersion = function(key) {
	var manifestPath = mappings[key].manifestPath
	if (!manifestPath) {
		throw new Error('错误。config/mappings 中的manifestPath未配置');
	}
	console.log('manifestPath', manifestPath);
	
	var manifest = fs.readFileSync(manifestPath);
	// console.log('manifest', manifest);
	
	var data = JSON.parse(manifest);
	var version = data.versionName;
	return version;
}
module.exports = function(key) {
	var command = mappings[key].packCommand;
	if (!command) {
		throw new Error("请先完善config/mappings中的packCommand值");
	}
	console.log(command)
	return new Promise((resolve, reject) => {
		var version = getVersion(key);
		console.log(consoleColor.red, '开始打包，打包版本为：', version, consoleColor.white);

		const ls = spawn(command, ['-lh', '/usr']);
		var localFilePath = "";
		ls.stdout.on('data', (data) => {
			var str = iconv.decode(Buffer.from(data, binaryEncoding), encoding);
			if (/打包成功/.test(str)) {
				if (/安装包位置：(.+\.apk)/.test(str)) {
					var oldFilePath = RegExp.$1;
					var newFilePath = path.join(oldFilePath, '../', key + (Date.now()) + '.v' +
						version + '.apk')
					fs.renameSync(oldFilePath, newFilePath)
					console.log('修改文件名成功')
					localFilePath = newFilePath;
				}
			}
			console.log(str)
		});

		ls.stderr.on('data', (data) => {
			console.error(`stderr:`);
			console.log(iconv.decode(Buffer.from(data, binaryEncoding), encoding));
			reject();
			process.exit(1);
		});

		ls.on('close', (code) => {
			if(code === 1){
			resolve();
				return;
			}
			console.log(`打包成功，目录为：`, localFilePath);
      
		});
	})
}
