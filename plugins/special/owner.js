exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'My instagram',
         website: 'https://instagram.com/anggatzi123',
         email: 'wbot84199@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}
