const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('bot online ');
});
 

client.on("message", message => {
	var prefix = "-";
 if (message.content === "&help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`&help1 ⇏ طلب كواد عامة 
─══════════════─
&help2 ⇏ طلب كواد ادارية  
─══════════════─
&help3 ⇏ اطلب ملافات بوتات
─══════════════─
&help4 ⇏ فديوهات تعليم علي يوتيوب
─══════════════─
ملحوظة البوت معمول للاستفاضة منو مش اكتر
─══════════════─
By @Yo[S]siF#0008
 `)
   message.channel.sendEmbed(embed)
    
   }
   }); 

client.on("message", message => {
	var prefix = "-";
 if (message.content === "&help2") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`mute <=اكتب mute لطلب كود 
─══════════════─
ban <=اكتب ban لطلب كود 
─══════════════─
unmute <=اكتب unmute لطلب كود 
─══════════════─
kick <=اكتب kick لطلب كود 
─══════════════─
clear <=اكتب clear لطلب كود 
─══════════════─
mvall <=اكتب mvall لطلب كود 
─══════════════─
hchannel <=اكتب hchannel لطلب كود 
─══════════════─
schannel <=اكتب schannel لطلب كود 
─══════════════─
mutechannel <=اكتب mutechannel لطلب كود 
─══════════════─
unmutechannel <=اكتب unmutechannel لطلب كود 
─══════════════─`)
   message.channel.sendEmbed(embed)
    
   }
   }); 
   
   
   
   client.on("message", message => {
	var prefix = "-";
 if (message.content === "&help1") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`id <=اكتب id لطلب كود 
─══════════════─
user <=اكتب user لطلب كود 
─══════════════─
server <=اكتب server لطلب كود 
─══════════════─
avatar <=اكتب avatar لطلب كود 
─══════════════─
bot <=اكتب bot لطلب كود 
─══════════════─
inv <=اكتب inv لطلب كود 
─══════════════─
top <=اكتب top لطلب كود 
─══════════════─
image  <=اكتب image  لطلب كود 
─══════════════─
roles <=اكتب roles لطلب كود 
─══════════════─
welcome <=اكتب welcome لطلب كود 
─══════════════─
info <=اكتب info لطلب كود 
─══════════════─
`)
   message.channel.sendEmbed(embed)
    
   }
   }); 
       
	      client.on("message", message => {
	var prefix = "-";
 if (message.content === "&help3") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`─══════════════─	  
@Fill <=اكتب Speed BOT طلب ملف اكتب
─══════════════─
*Fill <=اكتب PlatinumBot طلب ملف اكتب
─══════════════─
!Fill  <=اكتب Broadcast لطلب كود 
─══════════════─
$Fill  <=اكتب Music JavaFiles لطلب كود 
─══════════════─
%Fill  <=اكتب TicketyBot لطلب كود 
─══════════════─
-Fill  <=اكتب Turbo_Bot لطلب كود 
─══════════════─
^Fill   <=اكتب DarkBot  لطلب كود 
─══════════════─
&Fill  <=اكتب LE_BOT لطلب كود 
─══════════════─`)
   message.channel.sendEmbed(embed)
    
   }
   }); 
	   


   client.on("message", message => {
	var prefix = "-";
 if (message.content === "&help4") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`─══════════════─
PC <=فديو تعليم كيف عمل بوت ميوزك علي كبيوتر 
─══════════════─
HR <=فيديو تعليم كيف رفع بوت جافا ميوزك علي هروكو 
─══════════════─
قريبا نضيف فديوهات ثاني
`)
   message.channel.sendEmbed(embed)
    
   }
   }); 

	   
      client.on("message", message => {
	var prefix = "-";
 if (message.content === "@Fill") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://www.mediafire.com/file/48q1dcq0q9rmikh/Speed_Bot.rar/file`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 	   
	   
	   
	         client.on("message", message => {
	var prefix = "-";
 if (message.content === "info") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/lihusazazo.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
	   
	         client.on("message", message => {
	var prefix = "-";
 if (message.content === "welcome") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/agonukejuj.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   });
	   
	      client.on("message", message => {
	var prefix = "-";
 if (message.content === "*Fill") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`http://www.mediafire.com/file/341s7xpqir1i478/PlatinumBot_By_Fares.rar/file`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   });    
	   
	   
	   
	        client.on("message", message => {
	var prefix = "-";
 if (message.content === "!Fill") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://www.mediafire.com/file/f35d34695ptar7d/Broadcast-master.zip/file`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   });  
	   
	   
	   
	         client.on("message", message => {
	var prefix = "-";
 if (message.content === "$Fill") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://www.mediafire.com/file/5iq54s5vxdo3b45/Music_JavaFiles.rar/file`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
	   
	   
	   
	   
	   
	   
	         client.on("message", message => {
	var prefix = "-";
 if (message.content === "%Fill") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://www.mediafire.com/file/d4539d7i0n8in94/TicketyBot_.rar/file`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
	   
	   
	   	         client.on("message", message => {
	var prefix = "-";
 if (message.content === "-Fill") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://www.mediafire.com/file/90p5zdvrlkei395/Turbo_Bot-master.rar/file`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
	   
	   
	   
	   	         client.on("message", message => {
	var prefix = "-";
 if (message.content === "^Fill") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://www.mediafire.com/file/23xv4p5c9mmavfh/DarkBot-master.zip/file`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
	   
	   
	   
	   	         client.on("message", message => {
	var prefix = "-";
 if (message.content === "&Fill") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://www.mediafire.com/file/90p5zdvrlkei395/Turbo_Bot-master.rar/file`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
	   
	   
	   
	   
	   
	   
	   
      client.on("message", message => {
	var prefix = "-";
 if (message.content === "mute") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/hevoregowe.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
   
         client.on("message", message => {
	var prefix = "-";
 if (message.content === "unmute") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/ojusahawop.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
   
   
            client.on("message", message => {
	var prefix = "-";
 if (message.content === "ban") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/payehipohe.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }

   }); 
   
   
               client.on("message", message => {
	var prefix = "-";
 if (message.content === "kick") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/osiwehipoc.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
   
client.on("message", message => {
	var prefix = "-";
 if (message.content === "clear") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/uwoxitilaf.coffeescript`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
   
client.on("message", message => {
	var prefix = "-";
 if (message.content === "unmutechannel") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/suhupabiki.coffeescript`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
   
   client.on("message", message => {
	var prefix = "-";
 if (message.content === "mutechannel") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/uqasuzaluz.coffeescript`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
   
      client.on("message", message => {
	var prefix = "-";
 if (message.content === "mvall") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/yaganipaci.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
   
      client.on("message", message => {
	var prefix = "-";
 if (message.content === "schannel") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/vahatirako.cs`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 

         client.on("message", message => {
	var prefix = "-";
 if (message.content === "hchannel") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/perodufowi.cs`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 

            client.on("message", message => {
	var prefix = "-";
 if (message.content === "user") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/qacehuzoja.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 

              client.on("message", message => {
	var prefix = "-";
 if (message.content === "top") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/orenuzixem.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 

   
                 client.on("message", message => {
	var prefix = "-";
 if (message.content === "id") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/cedikosoqa.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 

                    client.on("message", message => {
	var prefix = "-";
 if (message.content === "server") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/cokalifovu.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 

   
          client.on("message", message => {
	var prefix = "-";
 if (message.content === "bot") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/biwobahige.coffeescript`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 

        client.on("message", message => {
	var prefix = "-";
 if (message.content === "rooms") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/ebinisidub.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
   
        client.on("message", message => {
	var prefix = "-";
 if (message.content === "image") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/ovuvilulih.cs`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 

           client.on("message", message => {
	var prefix = "-";
 if (message.content === "inv") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/owaxurimas.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 

              client.on("message", message => {
	var prefix = "-";
 if (message.content === "avatar") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://hastebin.com/bumojotufi.js`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 
   
           client.on("message", message => {
	var prefix = "-";
 if (message.content === "PC") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://youtu.be/7emzUSQPd3E`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 	  
   

client.on("message", message => {
	var prefix = "-";
 if (message.content === "HR") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`https://youtu.be/UmQs8Gz0l-Q`)
   message.author.sendEmbed(embed)
     message.channel.send(`تم ارسالك في الخاص :mailbox_with_mail:`)
   }
   }); 	  

   client.on('ready', () => {
  console.log(`-------------------------------
  [Start] ${new Date()}`);
  console.log(`[INFO] [Bot Name : ${client.user.username}. ]`)
  console.log(`[BOT] By : JoyBOT
  -------------------------------`)
    client.user.setActivity(`&help | Free Codes.js |  ${client.guilds.size} Server.`)
  });


client.login(process.env.BOT_TOKEN);
