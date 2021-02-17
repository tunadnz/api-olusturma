const { Discord, MessageEmbed } = require("discord.js"); // Discord.js Modülünü Tanımlayıp Uygulamamızı Tanımlıyoruz
const axios = require('axios'); // Veri Çektirme Modülünü Tanımlıyoruz

exports.run = async (client, message, args) => {

// Verilerimizi Modül Yardımıyla Çektiriyoruz  
axios.get(`https://proje-adi.com/api/apiad`)
.then((response) => {

const embed = new MessageEmbed()
.setColor('RANDOM')
.addField(`Veri 1`, response.data.veri1, true)     
.addField(`Veri 2`, response.data.veri2, true) 
console.log(response)
message.channel.send(embed);        
});
};
