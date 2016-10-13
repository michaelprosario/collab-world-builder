function main(){ 
 var bot = new Bot(); 
 bot.drawCylinder(10,40);
for (var count = 0; count < 4; count++) {
  bot.drawBox(1,1,20);
  bot.forward(20);
  bot.turn(90);
}
bot.drawCylinder(10,40);


 }; 
 