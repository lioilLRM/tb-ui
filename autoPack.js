const readline = require('readline')
const mappings = require('./autoPack/config/mapping.js');
const consoleColor = require('./autoPack/util/console-color.js')

const readLineObj = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
readLineObj.on('close', ()=> {
	process.exit(0)
})
readLineObj.on('error', ()=> {
	process.exit(0)
})

init()

function createQuestions() {
	var questions = "请输入方括号中的内容，以确定执行打包程序\r\n";
	questions += "[cl]:清空窗口信息\r\n";
	questions += "[all]:执行所有已知程序的打包程序\r\n";
	questions += "[q]:退出\r\n";
	
	var keys = Object.keys(mappings);
	// console.log("keys: ",keys);
	
	for (var i = 0; i < keys.length; i++) {
		var app = keys[i];
		questions += `[${i}]:${mappings[app].name}\r\n`;
	}
	
	return questions
}

function init() {
	let questions = createQuestions()
	const appKeys = Object.keys(mappings);
	console.log(consoleColor.blue, questions);
	
	const inputValueMapping = {
		all: handleApp,
		clear: handleClear,
		cl: handleClear,
		q: handleQuit
	}
	
	readLineObj.question('', inputValue => {
		const handleFn = inputValueMapping[inputValue]
		console.log("handleFn: ",inputValue, handleFn);
		if(!handleFn) {
			if(isNaN(inputValue) || !appKeys[inputValue]) {
				handleInValidValue()
				return
			}
			handleApp(appKeys[inputValue])
			return
		}
		
		handleFn(inputValue)
		
	})
}
function handleApp(inputValue) {
	console.log("执行: ",inputValue);
}
function handleClear() {
	console.clear();
	init();
}

function handleQuit() {
	process.exit(0);
}
function handleInValidValue() {
	console.clear();
	console.error('输入错误，请重新输入')
	init();
}


