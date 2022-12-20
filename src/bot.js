require('dotenv').config();
const yandeximages = require("yandex-images");

const token=process.env.DISCORDJS_BOT_TOKEN;

const { Client, Events, GatewayIntentBits, AttachmentBuilder, EmbedBuilder,SlashCommandBuilder} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds,'GuildMessages',
                                      'GuildMessageTyping' ,
                                      'Guilds',
                                      'GuildMembers',
                                      'MessageContent']});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate',message=>{
    if (message.author.bot) return;
    if (message.content==='ping'){
        message.channel.send('pong');
    }
    
    const animepic=new AttachmentBuilder('./assets/anime.png')
    const animelogo=new AttachmentBuilder('./assets/logo.png')
    const watchAnime = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Animixplay')
        .setURL('https://animixplay.to/?from=com')
        .setAuthor({ name:message.author.username ,iconURL:message.author.avatarURL(), url: 'https://animixplay.to/?from=com' })
        .setDescription('Watch anime free here online!')
        .setThumbnail('attachment://logo.png')
        .setImage('attachment://anime.png')
        .setTimestamp()
    const mangapic=new AttachmentBuilder('./assets/mangapic.png')
    const mangalogo=new AttachmentBuilder('./assets/mangalogo.png')
    const readManga = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('MangaDex')
        .setURL('https://mangadex.org/titles/')
        .setAuthor({ name:message.author.username ,iconURL:message.author.avatarURL(), url: 'https://mangadex.org/titles/' })
        .setDescription('Read manga free here online!')
        .setThumbnail('attachment://mangalogo.png')
        .setImage('attachment://mangapic.png')
        .setTimestamp()                     
    const img =new AttachmentBuilder('./assets/messmenu.png')
    
    if (message.content==="l-menu"){
        message.channel.send({files:[img]})
    }
    if (message.content==="l-anime"){
        message.channel.send({embeds:[watchAnime],files:[animepic,animelogo]})
    }
    if (message.content==="l-manga"){
        message.channel.send({embeds:[readManga],files:[mangapic,mangalogo]})
    }
    
    if (message.content==="l-mess timings"){
        message.channel.send(`    MESS TIMINGS (W.E.F. SEPTEMBER 5, 2022)  
        --------------------------------------------------------------------------
        On Working Days, 
        Breakfast: 7.15 am to 9.30 am
        Lunch: 11.45 am to 2 pm
        Snacks: 4.30 pm to 6 pm
        Dinner: 7.30 pm to 9.30 pm
        --------------------------------------------------------------------------
        On Sundays and Institute Holidays,
        Breakfast: 8 am to 10 am
        Lunch: 12 pm to 2 pm
        Snacks: 4.30 pm to 6 pm
        Dinner: 7.30 pm to 9.30 pm
        --------------------------------------------------------------------------
         Note: The above timings are applicable to Mess 1 and Mess 2
        
        Thanks, 
        The Student's Mess Council.`)
    }
    const drinkgif =new AttachmentBuilder('./assets/pour_drink.gif')

    if (message.content==="l-drink"){
        message.channel.send({files:[drinkgif]})
    }

    const bfgif =new AttachmentBuilder('./assets/breakfast_gif.gif')

    if (message.content==="l-bf"){
        message.channel.send({files:[bfgif]})
    }

    const lunchgif =new AttachmentBuilder('./assets/lunch_gif.gif')

    if (message.content==="l-lunch"){
        message.channel.send({files:[lunchgif]})
    }

    const snackgif =new AttachmentBuilder('./assets/snacks_gif.gif')

    if (message.content==="l-snacks"){
        message.channel.send({files:[snackgif]})
    }

    const dinnergif =new AttachmentBuilder('./assets/dinner_gif.gif')

    if (message.content==="l-dinner"){
        message.channel.send({files:[dinnergif]})
    }
    const whapic=new AttachmentBuilder('./assets/whapic.png')
    const whalogo=new AttachmentBuilder('./assets/whalogo.png')
    const readPornwha = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Webtoon XYZ')
        .setURL('https://www.webtoon.xyz/?s&post_type=wp-manga&adult=1&m_orderby=latest')
        .setAuthor({ name:message.author.username ,iconURL:message.author.avatarURL(), url: 'https://www.webtoon.xyz/?s&post_type=wp-manga&adult=1&m_orderby=latest' })
        .setDescription('Read pornwha free here online!')
        .setThumbnail('attachment://whalogo.png')
        .setImage('attachment://whapic.png')
        .setTimestamp()
    if (message.content==="l-pornwha"){
        message.channel.send({embeds:[readPornwha],files:[whapic,whalogo]})
    }
    const cldr=new AttachmentBuilder('./assets/2022cldr.png')
    if (message.content==="l-calendar"){
        message.channel.send({files:[cldr]})
    }
    if (message.content==="ghot"){
        message.channel.send('kys')
    }   
})

/* client.on(Events.InteractionCreate,async interaction =>{
   / data: new SlashCommandBuilder()
    .setName('imagesearch')
    .setDescription('searches for an image based on your input')
    .addStringOption(option =>
		option.setName('input')
			.setDescription('searches'));
    const imsearch=interaction.options.get('search for');
    yandeximages.Search(imsearch, false, function(url){console.log(url);});
    await interaction.reply('Pong!'); 
}); */

client.login(token);
