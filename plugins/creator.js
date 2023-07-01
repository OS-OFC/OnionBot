import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Axell\nNICKNAME:👑 Owner Purwandani\nORG:Purwandani\nTITLE:soft\nitem1.TEL;waid=6285892710203:+62 858-9271-0203\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://www.youtube.com/@DaBlueShi\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:theblueshi@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Purwandani\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 21-12-2004\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
