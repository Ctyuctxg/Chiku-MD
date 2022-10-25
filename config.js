const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['201279251079']
global.OwnerNumber = ['201279251079']
global.ownertag = ['201279251079']
global.BotName = "🔱*SATO BOT*🔱 `️"
global.packname = "★ارمين يا قلبي★"
global.author = "★01279251079★"
global.OwnerName = "🔱Armin turbo🔱 `️"
global.BotSourceCode = "https://wa.me/qr/unccrvvz2xpab1"
global.SupportGroupLink = "https://chat.whatsapp.com/f9xrc1ole0379pn3vttqzn"
global.sessionName = "session"

// Prefix //
// 🎗don't change the prefix if you can change the prefix may be bot doesn't work properly//
global.prefa = ['-'] 


global.location = "bihar, India"
global.reactmoji = "❤️"
global.themeemoji = "🍭"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://wa.me/qr/unccrvvz2xpab1"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job done/تم...',
    useradmin: 'Sorry, only *Group Admins* can use this command/هذا الامر لادمن فقط!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group/يجب أن يكون البوت مسؤولاً أولاً.',
    botowner: 'Only my *Owner* can use this command/هذه الميزة للمالك فقط!',
    grouponly: 'This command is only made for *Groups*لميزة تستخدم فقط للمجموعات!',
    privateonly: 'This command is only made for *Private Chat*هذه الميزه فقط في الخاص!',
    botonly: 'Only the *Bot itself* can use this command/هذه الميزه للبوت فقط!',
    waiting: 'please wait/استني شويه...',
    nolink: 'Please provide me *link*اين الرابط?!',
    error: 'An error occurd/ايرور!',
    banned: 'You are *Banned* fron using commands/انت محظور من استخدام البوت تواصل مع المطور لالغاء حظرك!',
    bangc: 'This Group is *Banned* from using Commands/تم حظر هذه المجموعه من استخدام البوت!',
    nonsfw: 'Dont be a pervert! This is not a NSFW enabled group/لا تكن منحرفا هذه المجموعه ليست لاباحي!!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
