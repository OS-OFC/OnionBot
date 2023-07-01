import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = `
*T H A N K S - TO*
- Tuhan Yang Maha Esa
- Zyko - Md (Developer)
- Aldi Lesmana (Master)
- WH-MODS-DEV (Master)
- XTRAM-TEAM (Master)
- Onion Development Team (Recoder)

*Project BOT* : 1 Juli 2023
_This bot was redeveloped by Onion Development Team who recoded some of the features and menus of the bot_

*Owner Contact* :
wa.me/6285892710203,

*Co Owner Contact* :
wa.me/6285750823860`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command =  /^(tqto|thanksto|thanks to)$/i

export default handler
