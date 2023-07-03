import fg from 'api-dylux'

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {

  if (!text) throw `👾*Maraya-MD*👾img downloader\n\n🇱🇰 Ex: *${usedPrefix + command}* 👾*Maraya-MD*👾`

  let res = await fg.googleImage(text)

  conn.sendFile(m.chat, res.getRandom(), 'img.png', `

🇱🇰 Results : *${text}*`.trim(), m)

}

handler.help = ['imagen']

handler.tags = ['img']

handler.command = /^(img|image|photo|pic)$/i

handler.diamond = false

export default handler



