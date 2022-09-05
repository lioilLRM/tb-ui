const path = require('path');
const fs = require('fs');

module.exports = {
	guniu: {
		orgid: '54ed1ac607c8e6d8299ede0163bde648',
		iconsDir: path.join(__dirname, './guniu'),
		removeIconsDir: 'I:/codeHub/Guniu/App/GuNiuApp/unpackage/res/icons',
		name: "牯牛app打包",
		packCommand: path.join(__dirname,'./pack.bat'),
		manifestPath: 'S:/code/Vue/shop/tb-ui/tb-ui/manifest.json',
		
	}
}
