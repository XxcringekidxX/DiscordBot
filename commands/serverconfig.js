const ServerConfig = require("../Schema/Serverconfig.js")

exports.run = async (bot, message, args) => {

    console.log(message.guild.id)

    if(ServerConfig.findOne({id: message.guild.id})){
        message.author.send(`already have what i need for the server: ${message.guild.name}`)
    }
    if(!ServerConfig.findOne({id: message.guild.id})){
        await ServerConfig.create({
            id: message.guild.id,
            ServerOwner: message.guild.ownerID,
            ServerName: message.guild.name,
            Members: message.guild.memberCount
        });
    }

}