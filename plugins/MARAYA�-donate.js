
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
 *DONATE* 
If you get more info of 👾Maraya-MD👾 Please Contact wa.me/94705675697 💰`
let img = 'https://telegra.ph/file/0628bc98ae8035f00f429.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donasi'] 

export default handler
