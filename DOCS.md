### 乂  Non-Media Messages

```Javascript
// send text
client.reply(m.chat, 'Hello everyone!', m)
// or
m.reply('Hello everyone!')

// send text \w thumbnail
client.sendMessageModify(m.chat, 'Hello everyone!', m, {
   title: 'This is title',
   ads: true,
   largeThumb: true,
   thumbnail: await Func.fetchBuffer('https://telegra.ph/file/f996d4e04e4258bd031b4.jpg'),
   url: 'https://chat.whatsapp.com/Ly28IB8Fel4JbPS0qCUy2p'
})

// send react
client.sendReact(m.chat, '🕒', m.key)

// send list
const rows = [{
   title: 'Command A',
   rowId: '.a'
   description: ``
}, {
   title: 'Command B',
   rowId: '.b'
   description: ``
}]
client.sendList(m.chat, 'This is header', `Hello everyone!`, '© neoxr-bot', 'Tap!', [{
   rows
}], m)
         
// send text button
const buttons = [{
   buttonId: `.a`,
   buttonText: {
      displayText: 'Command A'
   },
   type: 1
}, {
   buttonId: `.b`,
   buttonText: {
      displayText: 'Command B'
   },
   type: 1
}]
client.sendButtonText(m.chat, 'Hello everyone!', '© Lisabotz-MD 🥰😍', buttons)
```
