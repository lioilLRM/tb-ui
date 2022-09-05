const fileUpdate = require('./file-update.js');
const packWatch = require('./packing-watch.js');
const mappings = require('../config/mappings.js');
const packInit = function(str) {
	return new Promise((resolve) => {
		var tmp_time = 3;
		console.log('packInit', str);
		
		fileUpdate(mappings[str]);
		var it = setInterval(() => {
			if (tmp_time === 0) {
				clearInterval(it);
				packWatch(str).then(() => {
					resolve();
				});
				return;
			}
			console.log(tmp_time + '秒后开始打包' + str + '....');
			tmp_time--;
		}, 1000)
	})

}

module.exports = async function(str) {
	if (str === 'all') {
		var keys = 	Object.keys(mappings);
		for(var i =0 ;i<keys.length;i++){
			var k = keys[i];
			console.log('-------------开始' + k + '更新配置文件------------')
			console.time(k)
			await packInit(k);
			console.timeEnd(k)
			console.log('-------------配置文件更新成功------------')
		}
		return true;
	}
	if (!mappings[str]) {
		throw new Error("映射关系不存在，请先修改映射关系后再执行");
	}
	await packInit(str);
	return true;

}
