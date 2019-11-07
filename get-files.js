const fs = require('fs');

let directory = '../icons/';
let dirBuf = Buffer.from(directory);

let files = fs.readdirSync(directory);

let list = files.filter(x => x.includes('.svg'));
console.log(list);

fs.writeFile("array-gen/list.json", JSON.stringify(list), function(err) {

	if(err) {
			return console.log(err);
	}

	console.log("The file was saved!");
}); 