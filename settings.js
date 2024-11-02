const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : wa.me/6282113821188
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['6282113821188','6281356484612','6285773557984','6385852536578']
global.packname = 'Bot WhatsApp'
global.author = 'izhardev'
global.botname = 'Amel Bot'
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'
global.pairing_code = true

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/c/izhar_nation',
	gh: 'https://github.com/IzharDevelop',
	gc: 'https://chat.whatsapp.com/Hx9vcBVhbc04KLVGPFtH2R',
	ch: '120363250409960161@newsletter',
}

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	owner: 'Fitur niki khusus mas izhar sayang!',
	admin: 'Fitur niki khusus kulo dados admin!',
	botAdmin: 'Kulo sanes admin sayang!',
	group: 'sampean damel ten grub!',
	private: 'sampean damel ten chat prib!',
	prem: 'niki damel orang tersayang!',
	wait: 'Sabar geh sayang...',
	error: 'Error!',
	done: 'sampun'
}

global.APIs = {
	zaynn: 'https://api.zaynn.my.id/api',
}
global.APIKeys = {
	'https://api.zaynn.my.id/api': 'Najedev',
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
